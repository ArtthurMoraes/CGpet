<h1>C&G Pet 🐾</h1>

<h2>Descrição do Projeto</h2>
<p>A C&G Pet é uma plataforma web projetada para centralizar e facilitar o acesso a informações sobre serviços essenciais para animais de estimação. O projeto visa conectar tutores de pets a diversos serviços, incluindo:</p>

<ul>
  <li>Veterinários</li>
  <li>Lojas de artigos para pets</li>
  <li>ONGs</li>
  <li>Centros de adoção</li>
  <li>Centros de castração</li>
</ul>

<h2>Prototipagem</h2>
<p>O design do projeto foi inicialmente desenvolvido no Figma, garantindo uma interface intuitiva e amigável.</p>
<p>Veja o protótipo: https://www.figma.com/proto/9WmBH3I2Zvw9jKd8ygpK8F/Prot%C3%B3tipo?node-id=54-31</p>

<h2>Tecnologias Utilizadas:</h2>

<p><strong>Frontend:</strong></p>
<ul>
  <li>React.js</li>
  <li>Vite</li>
</ul>

Dependências: "cors": "^2.8.5" e "express": "^4.21.1".

<p><strong>Backend:</strong></p>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Prisma ORM</li>
</ul>

Dependências: "@prisma/client": "^5.22.0", "cors": "^2.8.5" e "express": "^4.21.1"

<p><strong>Banco de Dados:</strong></p>
<li>MongoDB (Online) gerenciado com Prisma</li>

<h2>Como Executar o Projeto</h2>
<strong>Passos para Inicialização</strong>

Abra três terminais no VSCode

<li>Terminal 1 - Servidor Backend:</li>
cd cgpet-backend
node --watch server.js

<li>Terminal 2 - Prisma Studio:</li>
cd cgpet-backend
npx prisma studio

<li>Terminal 3 - Frontend:</li>
cd cgpet-frontend
npm run dev

<br><br> 
<strong>Observações:</strong>

<li>Terminal 1: O primeiro terminal inicializa o servidor</li>
<li>Terminal 2: O Prisma Studio permite visualizar e editar dados do banco</li>
<li>Terminal 3: O frontend será iniciado no modo de desenvolvimento</li>

<li>Prisma Studio: Permite visualização dos dados, mas não possui atualização em tempo real e é necessário dar refresh na página após mudanças</li>

