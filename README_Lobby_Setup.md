# Sistema de Lobby Unity + FishNet

Este é um sistema completo de lobby multiplayer para Unity usando FishNet.

## Funcionalidades

- ✅ Conexão Host/Client/Server
- ✅ Lista de jogadores em tempo real
- ✅ Sistema de "Ready" para jogadores
- ✅ Mudança de nome dos jogadores
- ✅ Botão "Iniciar Jogo" (apenas para Host)
- ✅ Transição de cena sincronizada
- ✅ Interface intuitiva

## Configuração

### 1. Instalar FishNet
- Importe o FishNet do Asset Store ou GitHub
- Configure o NetworkManager na cena

### 2. Configuração da Cena do Lobby

1. **NetworkManager Setup:**
   - Crie um GameObject vazio chamado "NetworkManager"
   - Adicione o componente `NetworkManager` do FishNet
   - Configure o Transport (Tugboat é recomendado)

2. **Lobby Setup:**
   - Crie um GameObject vazio chamado "LobbyManager"
   - Adicione o script `NetworkLobbyManager`
   - Configure:
     - `maxPlayers`: Número máximo de jogadores (padrão: 4)
     - `gameSceneName`: Nome da cena do jogo (ex: "GameScene")
     - `lobbyUI`: Referência para o componente LobbyUI

3. **Bootstrap Setup:**
   - Crie um GameObject chamado "NetworkBootstrap"
   - Adicione o script `NetworkBootstrap`
   - Configure as referências para connectionUI e lobbyUI

### 3. Configuração da UI

#### Connection UI
Crie uma UI com os seguintes elementos:
- **Panel de Conexão** com:
  - Input Field para endereço do servidor
  - Input Field para porta
  - Botão "Host" 
  - Botão "Join"
  - Botão "Server Only"
  - Text para status da conexão

#### Lobby UI
Crie uma UI com os seguintes elementos:
- **Panel do Lobby** com:
  - ScrollView para lista de jogadores
  - Input Field para nome do jogador
  - Botão "Ready/Not Ready"
  - Botão "Start Game" (visível apenas para Host)
  - Text para informações do lobby (ex: "Players: 2/4")

#### Player Item Prefab
Crie um prefab para cada item de jogador na lista:
- Text para nome do jogador
- Text para status (Ready/Not Ready)
- Image para indicador visual (opcional)

### 4. Configuração de Cenas

1. **Build Settings:**
   - Adicione a cena do Lobby como índice 0
   - Adicione a cena do Jogo como índice 1
   - Configure o nome da cena no `NetworkLobbyManager`

2. **Scene Manager do FishNet:**
   - No NetworkManager, configure o Scene Manager
   - Habilite "Enable Scene Management"

### 5. Conectar os Scripts às UIs

#### NetworkBootstrap
```csharp
// Arraste as referências no Inspector:
connectionUI -> Panel de Conexão
lobbyUI -> Panel do Lobby
```

#### LobbyUI
```csharp
// Arraste as referências no Inspector:
playersListParent -> Content do ScrollView
playerItemPrefab -> Prefab do item de jogador
startGameButton -> Botão Start Game
readyButton -> Botão Ready
playerNameInput -> Input Field do nome
lobbyInfoText -> Text de informações
```

#### ConnectionUI
```csharp
// Arraste as referências no Inspector:
hostButton -> Botão Host
clientButton -> Botão Join
serverButton -> Botão Server
addressInput -> Input Field do endereço
portInput -> Input Field da porta
statusText -> Text de status
```

## Como Usar

### Para Host (Criar Lobby)
1. Execute o jogo
2. Clique em "Host"
3. Aguarde outros jogadores se conectarem
4. Quando todos estiverem "Ready", clique em "Start Game"

### Para Client (Entrar no Lobby)
1. Execute o jogo
2. Digite o endereço IP do host
3. Clique em "Join"
4. Altere seu nome se desejar
5. Clique em "Ready"
6. Aguarde o host iniciar o jogo

## Estrutura dos Scripts

- **NetworkLobbyManager**: Gerencia o lobby, jogadores e início do jogo
- **LobbyUI**: Interface do lobby
- **ConnectionUI**: Interface de conexão inicial
- **NetworkBootstrap**: Inicializa a rede e gerencia estados
- **PlayerData**: Dados dos jogadores (nome, status, etc.)
- **PlayerItemUI**: UI individual de cada jogador na lista

## Personalização

### Alterar Número Máximo de Jogadores
No `NetworkLobbyManager`, modifique o valor `maxPlayers`.

### Alterar Cena do Jogo
No `NetworkLobbyManager`, modifique o valor `gameSceneName`.

### Customizar UI
- Modifique as cores nos scripts `LobbyUI` e `PlayerItemUI`
- Altere os textos e layouts conforme necessário
- Adicione animações e efeitos visuais

## Troubleshooting

### Jogadores não aparecem na lista
- Verifique se o `NetworkLobbyManager` está marcado como NetworkObject
- Certifique-se de que os eventos estão sendo inscritos corretamente

### Botão Start Game não funciona
- Verifique se todos os jogadores estão "Ready"
- Confirme que há pelo menos 2 jogadores no lobby
- Certifique-se de que apenas o Host pode ver o botão

### Cena não carrega para todos
- Verifique se a cena está adicionada no Build Settings
- Confirme se o Scene Manager do FishNet está configurado
- Verifique o nome da cena no `NetworkLobbyManager`

## Próximos Passos

- Adicionar sistema de chat no lobby
- Implementar diferentes modos de jogo
- Adicionar sistema de ranking/matchmaking
- Criar sistema de salas personalizadas