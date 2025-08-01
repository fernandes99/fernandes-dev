using UnityEngine;
using FishNet.Managing;
using FishNet.Transporting;

public class NetworkBootstrap : MonoBehaviour
{
    [Header("Network Settings")]
    [SerializeField] private bool autoStartAsHost = false;
    [SerializeField] private string serverAddress = "localhost";
    [SerializeField] private ushort port = 7777;
    
    [Header("UI References")]
    [SerializeField] private GameObject connectionUI;
    [SerializeField] private GameObject lobbyUI;
    
    private NetworkManager networkManager;
    
    private void Start()
    {
        networkManager = InstanceFinder.NetworkManager;
        
        if (networkManager != null)
        {
            // Inscrever em eventos de conexão
            networkManager.ClientManager.OnClientConnectionState += OnClientConnectionState;
            networkManager.ServerManager.OnServerConnectionState += OnServerConnectionState;
        }
        
        // Mostrar UI de conexão inicialmente
        ShowConnectionUI();
        
        if (autoStartAsHost)
        {
            StartHost();
        }
    }
    
    private void OnDestroy()
    {
        if (networkManager != null)
        {
            networkManager.ClientManager.OnClientConnectionState -= OnClientConnectionState;
            networkManager.ServerManager.OnServerConnectionState -= OnServerConnectionState;
        }
    }
    
    public void StartHost()
    {
        if (networkManager != null)
        {
            networkManager.ServerManager.StartConnection();
            networkManager.ClientManager.StartConnection();
            Debug.Log("Starting as Host...");
        }
    }
    
    public void StartServer()
    {
        if (networkManager != null)
        {
            networkManager.ServerManager.StartConnection();
            Debug.Log("Starting as Server...");
        }
    }
    
    public void StartClient()
    {
        if (networkManager != null)
        {
            networkManager.ClientManager.StartConnection(serverAddress, port);
            Debug.Log($"Connecting to {serverAddress}:{port}...");
        }
    }
    
    public void StopConnection()
    {
        if (networkManager != null)
        {
            networkManager.ClientManager.StopConnection();
            networkManager.ServerManager.StopConnection();
            ShowConnectionUI();
            Debug.Log("Stopping connection...");
        }
    }
    
    private void OnClientConnectionState(ClientConnectionStateArgs args)
    {
        Debug.Log($"Client connection state: {args.ConnectionState}");
        
        if (args.ConnectionState == LocalConnectionState.Started)
        {
            ShowLobbyUI();
        }
        else if (args.ConnectionState == LocalConnectionState.Stopped)
        {
            ShowConnectionUI();
        }
    }
    
    private void OnServerConnectionState(ServerConnectionStateArgs args)
    {
        Debug.Log($"Server connection state: {args.ConnectionState}");
        
        if (args.ConnectionState == LocalConnectionState.Started)
        {
            // Se é servidor puro (não host), não mostrar lobby UI
            if (!networkManager.ClientManager.Started)
            {
                HideAllUI();
            }
        }
    }
    
    private void ShowConnectionUI()
    {
        if (connectionUI != null)
            connectionUI.SetActive(true);
        
        if (lobbyUI != null)
            lobbyUI.SetActive(false);
    }
    
    private void ShowLobbyUI()
    {
        if (connectionUI != null)
            connectionUI.SetActive(false);
        
        if (lobbyUI != null)
            lobbyUI.SetActive(true);
    }
    
    private void HideAllUI()
    {
        if (connectionUI != null)
            connectionUI.SetActive(false);
        
        if (lobbyUI != null)
            lobbyUI.SetActive(false);
    }
    
    public void SetServerAddress(string address)
    {
        serverAddress = address;
    }
    
    public void SetPort(string portString)
    {
        if (ushort.TryParse(portString, out ushort newPort))
        {
            port = newPort;
        }
    }
}