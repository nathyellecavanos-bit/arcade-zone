# Arcade Zone — Front-end para Apache

Este projeto é um site estático de catálogo de jogos. Foi feito com HTML, CSS e JavaScript puro.
Não precisa de PHP, banco de dados, Node.js, npm ou build.

## Como executar no Apache (XAMPP)

1. Extraia a pasta `arcade-zone` do ZIP.
2. Copie a pasta para `C:\xampp\htdocs\`.
3. Abra o XAMPP Control Panel.
4. Clique em **Start** na linha **Apache**.
5. No navegador, acesse:

   http://localhost/arcade-zone/

Se você usa WAMP, coloque a pasta na pasta `www` e acesse `http://localhost/arcade-zone/`.

## Estrutura

- `index.html` — estrutura das páginas e seções.
- `css/style.css` — cores, layout, cartões, modal e responsividade.
- `js/script.js` — catálogo, pesquisa, filtros, menu e detalhes dos jogos.

## Funcionalidades

- Layout responsivo para computador e celular.
- Catálogo com oito jogos de exemplo.
- Pesquisa por nome, categoria ou descrição.
- Filtro por Aventura, Ação, RPG e Indie.
- Cards com informações resumidas.
- Janela modal com detalhes do jogo.
- Menu mobile.
- Botão para limpar filtros.

## Observações

- O catálogo é demonstrativo e fica no arquivo `js/script.js`.
- As capas são ilustrações criadas com CSS, então o site funciona sem baixar imagens.
- A fonte externa usa Google Fonts; se estiver sem internet, o navegador usa fontes alternativas.
- Este pacote é somente o front-end. Não possui login, painel administrativo nem banco de dados.
