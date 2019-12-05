## Projeto de processo seletivo para Supero


### Front

Comandos:
1. *yarn* instala as dependências necessárias
2. *yarn start* inicia a aplicação no endereço [http://localhost:3000]
3. *yarn build* builda a aplicação

Considerações:

Utilizado o React como o definido no documento, com alguns elementos do Material UI, por se tratar de uma aplicação simples não foi necessário o uso do Redux, que deixaria a aplicação mais robusta sem necessidade. <br/>
Existe uma estrutura de rotas, porém utilizado apenas uma página por não haver troca de contexto (outra funcionalidade além da busca e listagem de livros.) <br/>
Foi escolhido o componente de classe na página para mostrar conhecimento básicos do React, porém poderia ser implementado totalmente funcional com uso dos React Hooks. <br/>
Nesse caso foi utilizado o próprio servidor de desenvolvimento do React-App, porém em caso de um sistema de produção optaria por utilizar o Webpack, tanto para desevolvimento quanto para build de produção.

### Back

Comandos:
1. *yarn* instala as dependências necessárias
2. *yarn run dev* inicia a aplicação no endereço [http://localhost:3001]

Necessidades:
1. Node
2. MongoDB

Considerações:
A estrutura escolhida foi baseada em experiências passadas, a escalabilidade é ótima, além de ser uma estrutura simples de ser lida. <br/>
Por se tratar de uma aplicação simples, foram resumidos em duas rotas GET, uma de busca dos livros por filtros e outra para buscar as informações detalhadas do livro. <br/>
No começo de casa iniciação, o banco é resetado e introduzido os dados presentes no JSON da pasta **dataset**