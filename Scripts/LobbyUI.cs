using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System.Collections.Generic;
using FishNet.Connection;
using FishNet.Managing;

public class LobbyUI : MonoBehaviour
{
    [Header("UI Elements")]
    [SerializeField] private Transform playersListParent;
    [SerializeField] private GameObject playerItemPrefab;
    [SerializeField] private Button startGameButton;
    [SerializeField] private Button readyButton;
    [SerializeField] private TMP_InputField playerNameInput;
    [SerializeField] private TextMeshProUGUI lobbyInfoText;
    [SerializeField] private TextMeshProUGUI readyButtonText;
    
    [Header("Colors")]
    [SerializeField] private Color readyColor = Color.green;
    [SerializeField] private Color notReadyColor = Color.red;
    
    private NetworkLobbyManager lobbyManager;
    private List<GameObject> playerItems = new List<GameObject>();
    private bool isPlayerReady = false;
    
    private void Start()
    {
        // Encontrar o LobbyManager
        lobbyManager = FindObjectOfType<NetworkLobbyManager>();
        
        if (lobbyManager != null)
        {
            lobbyManager.OnPlayersUpdated += UpdatePlayersList;
            lobbyManager.OnGameStarted += OnGameStarted;
        }
        
        // Configurar botões
        if (startGameButton != null)
        {
            startGameButton.onClick.AddListener(StartGame);
        }
        
        if (readyButton != null)
        {
            readyButton.onClick.AddListener(ToggleReady);
        }
        
        if (playerNameInput != null)
        {
            playerNameInput.onEndEdit.AddListener(OnNameChanged);
        }
        
        UpdateUI();
    }
    
    private void OnDestroy()
    {
        if (lobbyManager != null)
        {
            lobbyManager.OnPlayersUpdated -= UpdatePlayersList;
            lobbyManager.OnGameStarted -= OnGameStarted;
        }
    }
    
    public void UpdatePlayersList(List<PlayerData> players)
    {
        // Limpar lista atual
        foreach (var item in playerItems)
        {
            if (item != null)
                Destroy(item);
        }
        playerItems.Clear();
        
        // Criar novos itens para cada jogador
        foreach (var player in players)
        {
            CreatePlayerItem(player);
        }
        
        UpdateUI();
    }
    
    private void CreatePlayerItem(PlayerData playerData)
    {
        if (playerItemPrefab == null || playersListParent == null) return;
        
        GameObject playerItem = Instantiate(playerItemPrefab, playersListParent);
        playerItems.Add(playerItem);
        
        // Configurar o item do jogador
        PlayerItemUI playerItemUI = playerItem.GetComponent<PlayerItemUI>();
        if (playerItemUI != null)
        {
            playerItemUI.SetupPlayerItem(playerData);
        }
        else
        {
            // Fallback se não houver componente PlayerItemUI
            TextMeshProUGUI[] texts = playerItem.GetComponentsInChildren<TextMeshProUGUI>();
            if (texts.Length > 0)
            {
                texts[0].text = $"{playerData.playerName} {(playerData.isReady ? "(Ready)" : "(Not Ready)")}";
                texts[0].color = playerData.isReady ? readyColor : notReadyColor;
            }
        }
    }
    
    private void UpdateUI()
    {
        if (lobbyManager == null) return;
        
        // Atualizar informações do lobby
        if (lobbyInfoText != null)
        {
            lobbyInfoText.text = $"Players: {lobbyManager.GetPlayerCount()}/{lobbyManager.GetMaxPlayers()}";
        }
        
        // Atualizar botão de iniciar (apenas para o host)
        if (startGameButton != null)
        {
            startGameButton.gameObject.SetActive(lobbyManager.IsHost());
            
            // Verificar se pode iniciar o jogo
            if (lobbyManager.IsHost())
            {
                bool canStart = CanStartGame();
                startGameButton.interactable = canStart;
            }
        }
        
        // Atualizar botão ready
        if (readyButton != null && readyButtonText != null)
        {
            readyButtonText.text = isPlayerReady ? "Not Ready" : "Ready";
            readyButton.GetComponent<Image>().color = isPlayerReady ? readyColor : notReadyColor;
        }
    }
    
    private bool CanStartGame()
    {
        var players = lobbyManager.GetPlayersInLobby();
        
        if (players.Count < 2) return false;
        
        foreach (var player in players)
        {
            if (!player.isReady) return false;
        }
        
        return true;
    }
    
    private void StartGame()
    {
        if (lobbyManager != null && lobbyManager.IsHost())
        {
            lobbyManager.StartGameServerRpc();
        }
    }
    
    private void ToggleReady()
    {
        if (lobbyManager != null)
        {
            var networkManager = InstanceFinder.NetworkManager;
            if (networkManager != null && networkManager.ClientManager.Connection != null)
            {
                int connectionId = networkManager.ClientManager.Connection.ClientId;
                lobbyManager.TogglePlayerReadyServerRpc(connectionId);
                isPlayerReady = !isPlayerReady;
                UpdateUI();
            }
        }
    }
    
    private void OnNameChanged(string newName)
    {
        if (string.IsNullOrEmpty(newName)) return;
        
        if (lobbyManager != null)
        {
            var networkManager = InstanceFinder.NetworkManager;
            if (networkManager != null && networkManager.ClientManager.Connection != null)
            {
                int connectionId = networkManager.ClientManager.Connection.ClientId;
                lobbyManager.UpdatePlayerNameServerRpc(connectionId, newName);
            }
        }
    }
    
    private void OnGameStarted()
    {
        // Esconder UI do lobby quando o jogo iniciar
        gameObject.SetActive(false);
    }
}