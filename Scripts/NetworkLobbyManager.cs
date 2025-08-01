using UnityEngine;
using FishNet.Object;
using FishNet.Connection;
using FishNet.Managing;
using System.Collections.Generic;
using UnityEngine.SceneManagement;

public class NetworkLobbyManager : NetworkBehaviour
{
    [Header("Lobby Settings")]
    [SerializeField] private int maxPlayers = 4;
    [SerializeField] private string gameSceneName = "GameScene";
    
    [Header("UI References")]
    [SerializeField] private LobbyUI lobbyUI;
    
    // Lista de jogadores no lobby
    private List<PlayerData> playersInLobby = new List<PlayerData>();
    
    // Eventos
    public System.Action<List<PlayerData>> OnPlayersUpdated;
    public System.Action OnGameStarted;
    
    private NetworkManager networkManager;
    
    public override void OnStartServer()
    {
        base.OnStartServer();
        networkManager = InstanceFinder.NetworkManager;
        
        // Inscrever em eventos de conexão
        networkManager.ServerManager.OnRemoteConnectionState += OnRemoteConnectionState;
    }
    
    public override void OnStopServer()
    {
        base.OnStopServer();
        if (networkManager != null)
        {
            networkManager.ServerManager.OnRemoteConnectionState -= OnRemoteConnectionState;
        }
    }
    
    public override void OnStartClient()
    {
        base.OnStartClient();
        
        // Solicitar dados dos jogadores quando cliente conecta
        if (!IsServer)
        {
            RequestPlayersDataServerRpc();
        }
    }
    
    private void OnRemoteConnectionState(NetworkConnection conn, FishNet.Transporting.RemoteConnectionStateArgs args)
    {
        if (args.ConnectionState == FishNet.Transporting.RemoteConnectionState.Started)
        {
            OnPlayerConnected(conn);
        }
        else if (args.ConnectionState == FishNet.Transporting.RemoteConnectionState.Stopped)
        {
            OnPlayerDisconnected(conn);
        }
    }
    
    private void OnPlayerConnected(NetworkConnection conn)
    {
        if (!IsServer) return;
        
        // Criar dados do jogador
        PlayerData newPlayer = new PlayerData
        {
            connectionId = conn.ClientId,
            playerName = $"Player {conn.ClientId}",
            isReady = false
        };
        
        playersInLobby.Add(newPlayer);
        UpdatePlayersListClientRpc(playersInLobby.ToArray());
        
        Debug.Log($"Player {conn.ClientId} joined the lobby");
    }
    
    private void OnPlayerDisconnected(NetworkConnection conn)
    {
        if (!IsServer) return;
        
        // Remover jogador da lista
        playersInLobby.RemoveAll(p => p.connectionId == conn.ClientId);
        UpdatePlayersListClientRpc(playersInLobby.ToArray());
        
        Debug.Log($"Player {conn.ClientId} left the lobby");
    }
    
    [ServerRpc(RequireOwnership = false)]
    private void RequestPlayersDataServerRpc()
    {
        UpdatePlayersListClientRpc(playersInLobby.ToArray());
    }
    
    [ServerRpc(RequireOwnership = false)]
    public void UpdatePlayerNameServerRpc(int connectionId, string newName)
    {
        if (!IsServer) return;
        
        var player = playersInLobby.Find(p => p.connectionId == connectionId);
        if (player != null)
        {
            player.playerName = newName;
            UpdatePlayersListClientRpc(playersInLobby.ToArray());
        }
    }
    
    [ServerRpc(RequireOwnership = false)]
    public void TogglePlayerReadyServerRpc(int connectionId)
    {
        if (!IsServer) return;
        
        var player = playersInLobby.Find(p => p.connectionId == connectionId);
        if (player != null)
        {
            player.isReady = !player.isReady;
            UpdatePlayersListClientRpc(playersInLobby.ToArray());
        }
    }
    
    [ServerRpc(RequireOwnership = false)]
    public void StartGameServerRpc()
    {
        if (!IsServer) return;
        
        // Verificar se todos os jogadores estão prontos
        if (playersInLobby.Count < 2)
        {
            Debug.Log("Need at least 2 players to start the game");
            return;
        }
        
        bool allReady = true;
        foreach (var player in playersInLobby)
        {
            if (!player.isReady)
            {
                allReady = false;
                break;
            }
        }
        
        if (!allReady)
        {
            Debug.Log("Not all players are ready");
            return;
        }
        
        // Iniciar o jogo
        StartGameClientRpc();
        LoadGameScene();
    }
    
    [ObserversRpc]
    private void UpdatePlayersListClientRpc(PlayerData[] players)
    {
        playersInLobby.Clear();
        playersInLobby.AddRange(players);
        OnPlayersUpdated?.Invoke(playersInLobby);
        
        // Atualizar UI se existir
        if (lobbyUI != null)
        {
            lobbyUI.UpdatePlayersList(playersInLobby);
        }
    }
    
    [ObserversRpc]
    private void StartGameClientRpc()
    {
        OnGameStarted?.Invoke();
        Debug.Log("Game is starting!");
    }
    
    private void LoadGameScene()
    {
        if (!IsServer) return;
        
        // Usar o SceneManager do FishNet para carregar a cena para todos os clientes
        networkManager.SceneManager.LoadGlobalScenes(gameSceneName);
    }
    
    public bool IsHost()
    {
        return IsServer;
    }
    
    public List<PlayerData> GetPlayersInLobby()
    {
        return new List<PlayerData>(playersInLobby);
    }
    
    public int GetPlayerCount()
    {
        return playersInLobby.Count;
    }
    
    public int GetMaxPlayers()
    {
        return maxPlayers;
    }
}