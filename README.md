
<p align="center" >
  <img src="https://raw.githubusercontent.com/LucasVanni/Vagas/master/internship/assets/logo.png" height="200" alt="Logo do Site" />
</p>

<p align="center">
    Braking News é uma solução para deixar as notícias mais agradáveis e com grandes chances de fazer o cliente ler.
</p>
<p align="center">
    O backend foi projetado para capturar as notícias em tempo real do jornal New York Times.
</p>

## 📚 Tecnologias

Segue abaixo as técnologias utilizadas no backend da aplicação:

-  [node.js](https://nodejs.org/en/)
-  [express](https://expressjs.com/)
-  [nodemon](https://github.com/remy/nodemon)
-  [esm](https://github.com/standard-things/esm#readme)
-  [cors](https://github.com/expressjs/cors#readme)
-  [dotenv](https://github.com/motdotla/dotenv#readme)
-  [axios](https://github.com/axios/axios)
-  [sucrase](https://github.com/alangpierce/sucrase#readme)
-  [VS Code](https://code.visualstudio.com/) com [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig), [ESLint](https://eslint.org) e [Prettier](https://prettier.io)

ℹ️ Como Utilizar

A aplicação backend está disponível para consumo no [endereço](https://upload-application-backend.herokuapp.com/), para capturar as notícias você deve utilizar a rota 'news' e passar qtdNews e page como query params.

Obs: Para a aplicação funcionar melhor defini para recuperar da api do New York Times, no máximo 10 páginas com 12 notícias cada. Então se passar mais do que 12 qtdNews e 10 pages irá retornar erro na aplicação.

Para clonar o repositório e executá-lo em localhost terá que ter instalado o [GIT](https://git-scm.com) em sua máquina, o [Node.js v12.18.2](https://nodejs.org/en/) ou maior + [Yarn v1.22.4](https://yarnpkg.com/)

```bash
# Clone o repositório
git clone https://github.com/LucasVanni/ez-test-backend.git

# Ir até a pasta do backend
cd ez-test-backend

# Instalar as dependências
yarn

# Ligar o servidor
yarn dev
```
