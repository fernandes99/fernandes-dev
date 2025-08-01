using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class ConnectionUI : MonoBehaviour
{
    [Header("UI Elements")]
    [SerializeField] private Button hostButton;
    [SerializeField] private Button clientButton;
    [SerializeField] private Button serverButton;
    [SerializeField] private TMP_InputField addressInput;
    [SerializeField] private TMP_InputField portInput;
    [SerializeField] private TextMeshProUGUI statusText;
    
    [Header("Default Values")]
    [SerializeField] private string defaultAddress = "localhost";
    [SerializeField] private string defaultPort = "7777";
    
    private NetworkBootstrap networkBootstrap;
    
    private void Start()
    {
        networkBootstrap = FindObjectOfType<NetworkBootstrap>();
        
        // Configurar valores padrão
        if (addressInput != null)
        {
            addressInput.text = defaultAddress;
            addressInput.onEndEdit.AddListener(OnAddressChanged);
        }
        
        if (portInput != null)
        {
            portInput.text = defaultPort;
            portInput.onEndEdit.AddListener(OnPortChanged);
        }
        
        // Configurar botões
        if (hostButton != null)
        {
            hostButton.onClick.AddListener(StartHost);
        }
        
        if (clientButton != null)
        {
            clientButton.onClick.AddListener(StartClient);
        }
        
        if (serverButton != null)
        {
            serverButton.onClick.AddListener(StartServer);
        }
        
        UpdateStatus("Ready to connect...");
    }
    
    private void StartHost()
    {
        if (networkBootstrap != null)
        {
            UpdateStatus("Starting as Host...");
            networkBootstrap.StartHost();
        }
    }
    
    private void StartClient()
    {
        if (networkBootstrap != null)
        {
            UpdateStatus($"Connecting to {addressInput.text}:{portInput.text}...");
            networkBootstrap.StartClient();
        }
    }
    
    private void StartServer()
    {
        if (networkBootstrap != null)
        {
            UpdateStatus("Starting as Server...");
            networkBootstrap.StartServer();
        }
    }
    
    private void OnAddressChanged(string newAddress)
    {
        if (networkBootstrap != null)
        {
            networkBootstrap.SetServerAddress(newAddress);
        }
    }
    
    private void OnPortChanged(string newPort)
    {
        if (networkBootstrap != null)
        {
            networkBootstrap.SetPort(newPort);
        }
    }
    
    private void UpdateStatus(string message)
    {
        if (statusText != null)
        {
            statusText.text = message;
        }
        Debug.Log($"Connection Status: {message}");
    }
    
    public void OnConnectionFailed(string error)
    {
        UpdateStatus($"Connection failed: {error}");
    }
    
    public void OnConnectionSuccess()
    {
        UpdateStatus("Connected successfully!");
    }
}