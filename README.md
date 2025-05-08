# NutriChat

Aplicação desenvolvida com foco em proporcionar uma experiência interativa por meio de um chat conectado à API do Gemini, responsável por analisar e indicar a qualidade nutricional das refeições. A plataforma conta com integração a um banco de dados seguro, oferecendo funcionalidades de cadastro, autenticação de usuários e gerenciamento de perfil, visando garantir eficiência e usabilidade.

## Pontos principais da aplicação:

- Chat conectado à API do Gemini
- Interface responsiva
- Cadastro do usuário
- Login do usuário
- Listar informações do usuário
- Editar informações do usuário

---

## Tecnologias Utilizadas e Justificativas

### **Frontend**
- **React**: Escolhido por sua modularidade e facilidade de criação de interfaces dinâmicas e responsivas. A biblioteca permite o uso de componentes reutilizáveis, o que melhora a organização e manutenção do código.
- **React Router**: Utilizado para gerenciar as rotas da aplicação, permitindo uma navegação fluida entre as páginas, como login, cadastro, e o chatbot.
- **React Icons**: Adicionado para incorporar ícones visuais de alta qualidade, melhorando a experiência do usuário.
- **CSS Modules**: Implementado para estilização, garantindo escopo local para os estilos e evitando conflitos de classes.

### **Backend e Integrações**
- **Firebase**:
  - **Authentication**: Utilizado para gerenciar o login e cadastro de usuários de forma segura e eficiente.
  - **Firestore**: Escolhido como banco de dados NoSQL para armazenar informações do usuário, como nome, telefone e imagem de perfil.
  - **Storage**: Usado para armazenar imagens de perfil dos usuários.
- **API do Gemini**: Integrada para fornecer análises nutricionais detalhadas com base nas refeições informadas pelo usuário. A escolha foi feita devido à sua capacidade de processamento de linguagem natural e geração de respostas inteligentes.

### **Ferramentas de Desenvolvimento**
- **Vite**: Utilizado como bundler e servidor de desenvolvimento por sua velocidade e simplicidade em comparação com alternativas como Webpack.
- **ESLint**: Configurado para garantir a qualidade do código, seguindo boas práticas e evitando erros comuns.
- **Git e GitHub**: Utilizados para controle de versão e colaboração no desenvolvimento do projeto.

### **Justificativas**
- **React e Firebase**: A combinação dessas tecnologias permite o desenvolvimento rápido de aplicações escaláveis e seguras. O Firebase elimina a necessidade de configurar um backend completo, reduzindo o tempo de desenvolvimento.
- **API do Gemini**: A integração com uma API de linguagem natural foi essencial para oferecer uma experiência interativa e personalizada aos usuários, alinhada ao objetivo do projeto.
- **CSS Modules**: Escolhido para manter o código CSS organizado e evitar conflitos de estilos em uma aplicação com múltiplos componentes.

---

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nutriChat.git
   cd nutriChat
    ```
   
2. Instale as dependências:
   ```bash
   npm install
    ```
   
3. Configure as variáveis de ambiente no arquivo .env:
    ```bash
    VITE_API_URL=<sua-chave-da-API-do-Gemini>
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
5. Acesse a aplicação no navegador:
    ```bash
    Exemplo:
    [npm run dev](http://localhost:5173)
    ```

## Responsáveis
Murillo Castro:  
https://github.com/Muca5
---
Rafael Lopes:  
https://github.com/RafaelFLopes
---
Vinicius Rodrigues:  
https://github.com/viniciusrrodrigues
---
Vitor Iwamoto:  
https://github.com/Daisukeiw
---
