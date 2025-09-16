# To-Do List

Este é um projeto de uma aplicação de lista de tarefas (To-Do List), que permite aos usuários organizar e gerenciar tarefas de forma eficiente. Os usuários podem adicionar, marcar como concluídas e excluir tarefas, com um design simples e funcional.

---


https://github.com/user-attachments/assets/7c500dd0-de65-4400-a666-a179b02fc646



## Tecnologias Utilizadas

- **Frontend**: React
- **Estilização**: CSS Modules
- **Gerenciamento de Estado**: `useState` (React Hooks)

---

## Funcionalidades

- Adicionar uma nova tarefa.
- Exibir a lista de tarefas pendentes e concluídas.
- Marcar uma tarefa como concluída/desmarcar como não concluída.
- Excluir uma tarefa.
- Interface responsiva e amigável.

---

## Como Executar o Projeto

### Requisitos

- Node.js (v14 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd nome-do-repositorio
    ```

3. Instale as dependências:

    - Usando npm:

        ```bash
        npm install
        ```

    - Ou usando yarn:

        ```bash
        yarn install
        ```

4. Inicie o servidor de desenvolvimento:

    - Usando npm:

        ```bash
        npm run dev
        ```

    - Ou usando yarn:

        ```bash
        yarn dev
        ```

5. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

---

## Estrutura do Projeto

```plaintext
. 
├── src
│   ├── assets        # Imagens e ícones utilizados
│   ├── components    # Componentes reutilizáveis (ex: Task, Header)
│   ├── styles        # Arquivos de estilização (CSS Modules)
│   ├── App.tsx       # Componente raiz
│   └── index.tsx     # Ponto de entrada do aplicativo
├── public            # Arquivos estáticos
├── package.json      # Dependências do projeto
└── README.md         # Documentação do projeto
