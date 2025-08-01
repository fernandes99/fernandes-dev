using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class PlayerItemUI : MonoBehaviour
{
    [Header("UI References")]
    [SerializeField] private TextMeshProUGUI playerNameText;
    [SerializeField] private TextMeshProUGUI playerStatusText;
    [SerializeField] private Image statusIndicator;
    
    [Header("Colors")]
    [SerializeField] private Color readyColor = Color.green;
    [SerializeField] private Color notReadyColor = Color.red;
    
    private PlayerData playerData;
    
    public void SetupPlayerItem(PlayerData data)
    {
        playerData = data;
        UpdateDisplay();
    }
    
    private void UpdateDisplay()
    {
        if (playerData == null) return;
        
        // Atualizar nome do jogador
        if (playerNameText != null)
        {
            playerNameText.text = playerData.playerName;
        }
        
        // Atualizar status
        if (playerStatusText != null)
        {
            playerStatusText.text = playerData.isReady ? "Ready" : "Not Ready";
            playerStatusText.color = playerData.isReady ? readyColor : notReadyColor;
        }
        
        // Atualizar indicador visual
        if (statusIndicator != null)
        {
            statusIndicator.color = playerData.isReady ? readyColor : notReadyColor;
        }
    }
    
    public PlayerData GetPlayerData()
    {
        return playerData;
    }
}