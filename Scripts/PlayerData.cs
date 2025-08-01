using System;

[Serializable]
public class PlayerData
{
    public int connectionId;
    public string playerName;
    public bool isReady;
    
    public PlayerData()
    {
        connectionId = -1;
        playerName = "Unknown";
        isReady = false;
    }
    
    public PlayerData(int id, string name, bool ready = false)
    {
        connectionId = id;
        playerName = name;
        isReady = ready;
    }
}