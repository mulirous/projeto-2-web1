interface Card {
    img: string;
    h1: string;
    p: string;
    to: string;
  }
  
  interface CardGroup {
    title1: string,
    title2: string,
    title3: string,
    group1: Card[][];
    group2: Card[][];
    group3: Card[][];
  }
  
  const categoriesCards: Record<number, CardGroup> = {
    1: {
      title1: "Curso de Desenvolvimento Web",
      group1: [
        [
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjkxWqfdk45dqAiVJUmpWwf1zPtWq__JwGA&s", h1: "6 semanas", p: "Aprenda o básico de HTML 5 e CSS 3", to: "/curso/1" },
          { img: "https://miro.medium.com/v2/resize:fit:1400/1*xwAIUbfad95lsuGf2n9nnA.jpeg", h1: "12 semanas", p: "Aprendendo de uma vez por todas Bootstrap 5 e Tailwind CSS", to: "/curso/2" },
          { img: "https://www.infoworld.com/wp-content/uploads/2024/06/shutterstock_1361674454-100939444-orig.jpg?quality=50&strip=all", h1: "8 semanas", p: "Meus primeiros 8 projetos usando JavaScript", to: "/curso/3" },
        ],
        [
          { img: "https://hermes.dio.me/articles/cover/98dcfc09-a5dc-4ab2-b6ad-7641578f625e.jpg", h1: "6 semanas", p: "Curso intensivo de CSS avançado", to: "/curso/4" },
          { img: "https://compraco.com.br/cdn/shop/articles/Para-que-e-usado-o-JavaScript.jpg?v=1717267239", h1: "10 semanas", p: "JavaScript do básico ao avançado", to: "/curso/5" },
          { img: "https://programadoresdepre.com.br/wp-content/uploads/2022/07/8-melhores-frameworks-de-desenvolvimento-web-em-2022.jpg", h1: "4 semanas", p: "Web design responsivo com frameworks", to: "/curso/6" },
        ],
      ],
      title2: "Curso de React.js e Next.js",
      group2: [
        [
          { img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230202143636/NEXT-js-tutorial-1.png", h1: "3 semanas", p: "Saindo do React para o Next.js em pouco tempo", to: "/curso/7" },
          { img: "https://res.cloudinary.com/appmasters-io/image/upload/v1634211184/1wwdyw5de8avrdkgtz5n_d3dcbffa3d.png", h1: "4 semanas", p: "Introdução prática ao React", to: "/curso/8" },
          { img: "https://itgolabs.com/blog/pt-br/wp-content/uploads/2022/09/capa-1.jpeg", h1: "2 semanas", p: "React Router e navegação dinâmica", to: "/curso/9" },
        ],
        [
          { img: "https://media.licdn.com/dms/image/v2/D5612AQFIU5GMwkYKkA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1705040984639?e=2147483647&v=beta&t=HmFCJYHZOencJpyBVQadiofgeDpZGS6a-j8ou1Uftoo", h1: "5 semanas", p: "Next.js: Server-side rendering e APIs", to: "/curso/10" },
          { img: "https://www.oneclickitsolution.com/blog/wp-content/uploads/2023/02/context-api-vs-redux.png", h1: "6 semanas", p: "Gerenciando estados com Redux e Context API", to: "/curso/11" },
          { img: "https://miro.medium.com/v2/resize:fit:1400/1*W_L46q9V8huH6qRS47uxdA.png", h1: "8 semanas", p: "Construindo projetos completos com Next.js", to: "/curso/12" },
        ],
      ],
      title3: "Curso de Vue.js e Nuxt.js",
      group3: [
        [
          { img: "https://camo.githubusercontent.com/eda3eb94bf6bd643835b8b116280874acfccf4eba6af29d2f1a67a88a0a8ab54/68747470733a2f2f7675657363686f6f6c2e696f2f6d656469612f33396562633736306436343461613436323537343364666337323766663733372f70696e69612d7468652d656e6a6f7961626c652d7675652d73746f72652e6a7067", h1: "2 semanas", p: "Utilizando o Pinia.js para gerenciamento de estados", to: "/curso/13" },
          { img: "https://blog.geekhunter.com.br/wp-content/uploads/2019/12/vue-js.png", h1: "5 semanas", p: "Aprendendo o ciclo de vida do Vue.js", to: "/curso/14" },
          { img: "https://www.pc-koubou.jp/magazine/wp-content/uploads/2019/08/vue_webapp_mainf.png", h1: "2 semanas", p: "Conhecendo os fundamentos do Vue.js", to: "/curso/15" },
        ],
        [
          { img: "https://kinsta.com/wp-content/uploads/2022/05/nuxt-js-logo.jpeg", h1: "6 semanas", p: "Nuxt.js: Server-side rendering simplificado", to: "/curso/16" },
          { img: "https://i.ytimg.com/vi/gttZmeehAVk/maxresdefault.jpg", h1: "4 semanas", p: "Gerenciamento de rotas no Vue.js", to: "/curso/17" },
          { img: "https://i.ytimg.com/vi/44aP7GNE2cU/sddefault.jpg", h1: "5 semanas", p: "Criando SPA com Vue.js e Nuxt.js", to: "/curso/18" },
        ],
      ],
    },
    2 : {
      title1 : "Curso de Python para Iniciantes",
      group1 : [
        [
          { img: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1", h1: "8 semanas", p: "Aprenda Python do zero", to: "/curso/19" },
          { img: "https://cdn.activestate.com/wp-content/uploads/2021/12/python-coding-mistakes-1024x512.jpg", h1: "10 semanas", p: "Introdução ao Python para Análise de Dados", to: "/curso/20" },
          { img: "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg", h1: "6 semanas", p: "Desenvolvimento de Scripts em Python", to: "/curso/21" },
        ],
        [
          { img: "https://media.licdn.com/dms/image/D4D12AQFd5XHCkBiLcA/article-cover_image-shrink_720_1280/0/1688614931527?e=2147483647&v=beta&t=trJIibdVEs_vwMdRPLJToK6VQQ2kWul2zAQv4FTkqnw", h1: "10 semanas", p: "Automação com Python", to: "/curso/22" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbhwzNrngWxm7FE7Q__Dd3jEEeuYeyewgxXA&s", h1: "12 semanas", p: "Python para Web com Django", to: "/curso/23" },
          { img: "https://dropsdeprogramacao.wordpress.com/wp-content/uploads/2024/04/1dku4ubsnjcs4jzkkuialoq.webp", h1: "8 semanas", p: "Desenvolvimento de APIs com Flask", to: "/curso/24" },
        ],
      ],
      title2 : "Curso de Data Science com Python",
      group2 : [
        [
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2BZjva9NYl02hl6E06w4C-UCbmqVXMUfcfQ&s", h1: "8 semanas", p: "Fundamentos de Data Science com Python", to: "/curso/25" },
          { img: "https://apibrasil.blog/wp-content/uploads/2024/09/1679188251592.png", h1: "12 semanas", p: "Análise de Dados com Pandas e Numpy", to: "/curso/26" },
          { img: "https://asimov.academy/wp-content/uploads/2023/07/ThumCursoMatplotlib.webp", h1: "10 semanas", p: "Visualização de Dados com Matplotlib", to: "/curso/27" },
        ],
        [
          { img: "https://miro.medium.com/v2/resize:fit:693/0*e2q0LJtzlmPgaD3X.png", h1: "6 semanas", p: "Machine Learning com Scikit-learn", to: "/curso/28" },
          { img: "https://blog.paperspace.com/content/images/size/w1050/2021/01/0_szgpfwmBY_CuZwP8-2.png", h1: "10 semanas", p: "Deep Learning com TensorFlow", to: "/curso/29" },
          { img: "https://analisemacro.com.br/wp-content/uploads/2023/07/stl_py.png", h1: "8 semanas", p: "Análise Preditiva com Python", to: "/curso/30" },
        ],
      ],
      title3 : "Curso de Python para Automação de Tarefas",
      group3 : [
        [
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAPjwQDjR8H9WbECdnl49cgNVurfkdvuUMw&s", h1: "4 semanas", p: "Automatizando Tarefas com Python e Selenium", to: "/curso/31" },
          { img: "https://i.ytimg.com/vi/_6wMd31OAeU/maxresdefault.jpg", h1: "6 semanas", p: "Automatizando Planilhas com OpenPyXL", to: "/curso/32" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDIIA8d9qfGbW7sL6LuygyAMPfOVX3hvjWg&s", h1: "5 semanas", p: "Scraping com BeautifulSoup", to: "/curso/33" },
        ],
        [
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaiGkw8xEs6ApS2Q55ucHtEtyMJ8uSw52xw&s", h1: "7 semanas", p: "Automatizando Emails com Python", to: "/curso/34" },
          { img: "https://www.flowup.me/blog/wp-content/uploads/2017/08/owup-imagens-2023-07-20t103842-415.webp", h1: "8 semanas", p: "Gerenciamento de Arquivos com Python", to: "/curso/35" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0y0i8j2LyO7VUgZH4BtEBqp1JUgs8ZjaUg&s", h1: "9 semanas", p: "Automatizando Banco de Dados com Python", to: "/curso/36" },
        ],
      ]
    },
    3: {
      title1: "Curso de Introdução ao DevOps",
      group1: [
        [
          { img: "https://blog.estacio.br/wp-content/uploads/2022/09/o-que-faz-um-devops.jpeg", h1: "6 semanas", p: "Fundamentos de DevOps", to: "/curso/37" },
          { img: "https://www.freecodecamp.org/portuguese/news/content/images/2024/07/git-github.png", h1: "8 semanas", p: "Controle de Versão com Git", to: "/curso/38" },
          { img: "https://miro.medium.com/v2/resize:fit:1400/1*0ya3HrsY9LHjx9WccliMGg.png", h1: "7 semanas", p: "Introdução ao Docker", to: "/curso/39" },
        ],
        [
          { img: "https://miro.medium.com/v2/resize:fit:760/1*eDejddzWsBEq6KXGnJ4phw.png", h1: "10 semanas", p: "Automatização de Deploy com Jenkins", to: "/curso/40" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafY2zK9JCm-7aTILQddAJrjDySJdYybYpmw&s", h1: "6 semanas", p: "Monitoramento de Infraestrutura com Prometheus", to: "/curso/41" },
          { img: "https://cdn.prod.website-files.com/5ff66329429d880392f6cba2/610b9adacae35f5f6bcfc782_kubernetes%20preview.png", h1: "9 semanas", p: "Gerenciamento de Containers com Kubernetes", to: "/curso/42" },
        ],
      ],
      title2: "Curso de Infraestrutura e Automação",
      group2: [
        [
          { img: "https://t2.tudocdn.net/606607?w=1920&h=1080", h1: "8 semanas", p: "Configuração de Servidores Linux", to: "/curso/43" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSGf6ae7gIpphxoa0rfLs67NCoi4kTl3Yqw&s", h1: "9 semanas", p: "Infraestrutura como Código com Terraform", to: "/curso/44" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTHWtsXCchzaIPlw-y8Bhk_-Vw7x5_cHTtg&s", h1: "6 semanas", p: "Gerenciamento de Redes e Segurança", to: "/curso/45" },
        ],
        [
          { img: "https://www.targetso.com/wp-content/uploads/2023/10/ansble-7.png", h1: "12 semanas", p: "Automação de Infraestrutura com Ansible", to: "/curso/46" },
          { img: "https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575226247.jpg", h1: "10 semanas", p: "Gerenciamento de Configuração com Puppet", to: "/curso/47" },
          { img: "https://miro.medium.com/v2/resize:fit:1200/0*BSD4FjuuWApgvNzb.png", h1: "11 semanas", p: "Infraestrutura Escalável com AWS", to: "/curso/48" },
        ],
      ],
      title3: "Curso de DevOps para Profissionais",
      group3: [
        [
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALw1PuWzIsfQ2ee4ClcvMtpmWlZ5TCUwMYA&s", h1: "10 semanas", p: "Desenvolvimento de Pipelines CI/CD", to: "/curso/49" },
          { img: "https://www.targetso.com/wp-content/uploads/2024/02/service-oriented-architecture-vs-microservices.webp", h1: "12 semanas", p: "DevOps e Arquitetura de Microsserviços", to: "/curso/50" },
          { img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/benefit-11-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=960&hei=540&qlt=100&fmt=png-alpha&fit=constrain", h1: "9 semanas", p: "Implementação de Backup e Recuperação de Desastres", to: "/curso/51" },
        ],
        [
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuPhRtABozI2PgXUAu4u5NN0YnVOD19XS3w&s", h1: "8 semanas", p: "Monitoramento e Logging com ELK Stack", to: "/curso/52" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREGm7-3wA8Ep43-g7aevREHJSPxOxNVhjv8A&s", h1: "10 semanas", p: "Escalabilidade e Performance de Infraestrutura", to: "/curso/53" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZ3_PQ1ZcEBtG4F8jaAtG3twoNPYjAYW6Ug&s", h1: "12 semanas", p: "Gestão de Cloud com Google Cloud Platform", to: "/curso54" },
        ],
      ],
    },
    4: {
      title1: "Curso de Fundamentos de Back-end",
      group1: [
        [
          { img: "https://diogomatheus.com.br/assets/images/posts/shared-image/2018-01-15-getting-started-with-nodejs.jpg", h1: "8 semanas", p: "Fundamentos de Node.js", to: "/curso/55" },
          { img: "https://blog.postman.com/wp-content/uploads/2020/07/API-101-What-Is-a-REST-API-scaled.jpg", h1: "6 semanas", p: "Introdução a APIs RESTful", to: "/curso/56" },
          { img: "https://images.prismic.io/voitto-blog/4cc30be8-e54f-46cd-9c01-b4535c186a73_mongoDB.jpg?auto=compress,format?w=3840&q=75", h1: "10 semanas", p: "Gerenciamento de Banco de Dados com MongoDB", to: "/curso/57" },
        ],
        [
          { img: "https://miro.medium.com/v2/resize:fit:700/0*qKCmM71NLqgGt1DH.jpeg", h1: "9 semanas", p: "Autenticação e Autorização com JWT", to: "/curso/58" },
          { img: "https://cdn.prod.website-files.com/60f5b6738a95b57fe76faba5/650b516fdc1cc6b14bbd6102_MySQL.png", h1: "8 semanas", p: "Introdução ao SQL e MySQL", to: "/curso/59" },
          { img: "https://kinsta.com/pt/wp-content/uploads/sites/3/2021/12/back-end-developer-1024x512.png", h1: "7 semanas", p: "Framework Express.js para Back-end", to: "/curso/60" },
        ],
      ],
      title2: "Curso de Desenvolvimento Avançado de Back-end",
      group2: [
        [
          { img: "https://diogomatheus.com.br/assets/images/posts/shared-image/2018-01-15-getting-started-with-nodejs.jpg", h1: "8 semanas", p: "Microserviços com Node.js", to: "/curso/61" },
          { img: "https://miro.medium.com/v2/resize:fit:1400/1*lAqtvZlPoGtn_bN43RHFzw.png", h1: "12 semanas", p: "Construção de APIs GraphQL", to: "/curso/62" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMv-UBF_4vFFV0cZy0AnQRO8CgFzFG3Q7-aA&s", h1: "10 semanas", p: "Gerenciamento de Banco de Dados Relacional com PostgreSQL", to: "/curso/63" },
        ],
        [
          { img: "https://media.licdn.com/dms/image/D4E12AQGx0SX8qUCp4g/article-cover_image-shrink_720_1280/0/1707822334241?e=2147483647&v=beta&t=1kcG16_B9JlCxYRHyvLsTux6HbJgILbMN0ZdxMMK0QI", h1: "9 semanas", p: "Desenvolvimento de API com NestJS", to: "/curso/64" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvr_eTHFONee96HoU9PCzyL8zPW1-JX_cufw&s", h1: "6 semanas", p: "Autenticação com OAuth2", to: "/curso/65" },
          { img: "https://miro.medium.com/v2/resize:fit:336/0*rmv6pZTW2hfP2XYd.png", h1: "10 semanas", p: "Integração Contínua e Deploy com Docker", to: "/curso/66" },
        ],
      ],
      title3: "Curso de Arquitetura de Sistemas Back-end",
      group3: [
        [
          { img: "https://diogomatheus.com.br/assets/images/posts/shared-image/2018-01-15-getting-started-with-nodejs.jpg", h1: "12 semanas", p: "Desenvolvimento de Sistemas Escaláveis com Node.js", to: "/curso/67" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvr_eTHFONee96HoU9PCzyL8zPW1-JX_cufw&s", h1: "10 semanas", p: "Gerenciamento de Cache com Redis", to: "/curso/68" },
          { img: "https://miro.medium.com/v2/resize:fit:336/0*rmv6pZTW2hfP2XYd.png", h1: "8 semanas", p: "Arquitetura de Microserviços com Docker", to: "/curso/69" },
        ],
        [
          { img: "https://kinsta.com/pt/wp-content/uploads/sites/3/2021/12/back-end-developer-1024x512.png", h1: "11 semanas", p: "Escalabilidade e Balanceamento de Carga", to: "/curso/70" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3TgjNwRS__zwAl_qCu3_TLNHltY4zQz4dg&s", h1: "9 semanas", p: "Segurança em APIs e Web Services", to: "/curso/71" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6ck8D-BJ_Ue8xskxra6v8mZ_N7gLgu6SmQ&s", h1: "12 semanas", p: "Deploy e Monitoramento de Aplicações Back-end", to: "/curso/72" },
        ],
      ],
    },
    5 : {
      title1 : "Curso de Design Gráfico para Iniciantes",
      group1 : [
        [
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVG1QOjNmRugy4Ea6IkFKeEYzoCZ23KUUkQ&s", h1: "6 semanas", p: "Introdução ao Adobe Photoshop", to: "/curso/73" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjRjD17n3JJ7dSEgmHufJHUgVU4xriX9JlQ&s", h1: "8 semanas", p: "Fundamentos de Design Gráfico", to: "/curso/74" },
          { img: "https://img.freepik.com/vetores-gratis/conjunto-de-vetor-de-ideias-de-design-de-logotipo-de-empresa_53876-64063.jpg", h1: "7 semanas", p: "Criação de Logos e Identidade Visual", to: "/curso/75" },
        ],
        [
          { img: "https://hermes.dio.me/articles/cover/ff7c2091-77fe-4b81-a7c5-3973aa36131b.png", h1: "10 semanas", p: "Design para Mídias Sociais", to: "/curso/76" },
          { img: "https://ouromoderno.com.br/wp-content/uploads/2021/08/254-thumb.png", h1: "6 semanas", p: "Introdução ao Illustrator", to: "/curso/77" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGbA69E0OmXzh6SFnQFsDdnyBhzTI_btXog&s", h1: "9 semanas", p: "Design de Cartazes e Materiais Impressos", to: "/curso/78" },
        ],
      ],
      title2 : "Curso de Design Gráfico Avançado",
      group2 : [
        [
          { img: "https://blog.cubos.academy/content/images/2023/02/UI-Ux-Designer.jpg", h1: "12 semanas", p: "Design Digital e Web Design", to: "/curso/79" },
          { img: "https://cdn.prod.website-files.com/6461dd519a5f8f48f550b20a/66221558c697c3183b70cea6_after%20effects%20api%20thumb.jpg", h1: "10 semanas", p: "Criação de Animações com After Effects", to: "/curso/80" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPIWFIgaKpZj6uD6xYWBhm9QFhlNyf3bzKw&s", h1: "8 semanas", p: "Design Editorial e Layout de Revistas", to: "/curso/81" },
        ],
        [
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVppfpZJeTtd_9_nNaDB0bIO9q9S4V682oKw&s", h1: "9 semanas", p: "Design para Branding e Marketing Visual", to: "/curso/82  " },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjRjD17n3JJ7dSEgmHufJHUgVU4xriX9JlQ&s", h1: "11 semanas", p: "Design UX/UI para Web e Móvel", to: "/curso/83" },
          { img: "https://cdn.prod.website-files.com/665858d6442988bba748fa67/66881be9a5c4f83a95a2c793_1_72572331e4a172f2679e26bafe7c6434_2000.png", h1: "12 semanas", p: "Design de Interfaces e Prototipagem", to: "/curso/84" },
        ],
      ],
      title3 : "Curso de Design Gráfico para Profissionais",
      group3 : [
        [
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGbA69E0OmXzh6SFnQFsDdnyBhzTI_btXog&s", h1: "10 semanas", p: "Criação de Propostas Visuais para Clientes", to: "/curso/85" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTuN17FU7GF-W4cBNBrqbciY2XKbKoQVnKA&s", h1: "8 semanas", p: "Fotografia e Tratamento de Imagens para Designers", to: "/curso/86" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6DABjaXzSuJTK6ezRNuyDmNf9b3AUtsh2w&s", h1: "7 semanas", p: "Design para E-commerce e Lojas Virtuais", to: "/curso/87" },
        ],
        [
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPIWFIgaKpZj6uD6xYWBhm9QFhlNyf3bzKw&s", h1: "12 semanas", p: "Técnicas Avançadas de Ilustração Digital", to: "/curso/88" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4O4atBWXNKF7B_iscIc9-8dUhRpo3RodPkg&s", h1: "9 semanas", p: "Gestão de Projetos de Design Gráfico", to: "/curso/89" },
          { img: "https://cdn.prod.website-files.com/665858d6442988bba748fa67/66881be9a5c4f83a95a2c793_1_72572331e4a172f2679e26bafe7c6434_2000.png", h1: "10 semanas", p: "Design Gráfico para Impressos e Mídias Digitais", to: "/curso/90" },
        ],
      ]
    },
    6: {
      title1: "Curso de Comunicação e Colaboração",
      group1: [
        [
          { img: "https://www.contabeis.com.br/assets/img/news/a_5474_270b632137b56a48dd05c091225634ba.jpg", h1: "6 semanas", p: "Habilidades de Comunicação Interpessoal", to: "/curso/91" },
          { img: "https://www.contabeis.com.br/assets/img/news/n_45568_ef8ca39387015a7eeac2a0391b08294e.jpg", h1: "8 semanas", p: "Comunicação Eficaz no Ambiente de Trabalho", to: "/curso/92" },
          { img: "https://targetteal.com/wp-content/uploads/leadership.jpg", h1: "7 semanas", p: "Gestão de Conflitos no Trabalho", to: "/curso/93" },
        ],
        [
          { img: "https://www.catho.com.br/carreira-sucesso/wp-content/uploads/sites/3/2023/04/lideranca.jpg", h1: "5 semanas", p: "Escuta Ativa e Feedback Construtivo", to: "/curso/94" },
          { img: "https://images.prismic.io/voitto-blog/f3f7070b-ec7d-4674-a367-2e1813d9814f_marketing+%285%29+%281%29.png?auto=compress,format?w=3840&q=75", h1: "6 semanas", p: "Empatia e Inteligência Emocional", to: "/curso/95" },
          { img: "https://holos.org.br/wp-content/uploads/2015/06/lideranca_1.jpg", h1: "9 semanas", p: "Trabalho em Equipe de Alta Performance", to: "/curso/96" },
        ],
      ],
      title2: "Curso de Liderança e Gestão de Pessoas",
      group2: [
        [
          { img: "https://agendor-blog-uploads.s3.sa-east-1.amazonaws.com/2016/02/12214233/liderancas-no-trabalho.jpg", h1: "8 semanas", p: "Liderança Transformacional", to: "/curso/97" },
          { img: "https://scopi.com.br/wp-content/uploads/2022/08/tipos-de-lideranca.jpeg", h1: "6 semanas", p: "Gestão de Equipes Remotas", to: "/curso/98" },
          { img: "https://online.pucrs.br/hubfs/tipos-de-liderança.jpg", h1: "7 semanas", p: "Mentoria e Coaching de Desenvolvimento", to: "/curso/99" },
        ],
        [
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpAdTTSSSB-bA3AobroBApQK9rOUydpfhsQ&s", h1: "5 semanas", p: "Gestão de Performance e Resultados", to: "/curso/100" },
          { img: "https://blog.runrun.it/wp-content/uploads/2013/10/Runrun.it-liderança-eficaz.jpg", h1: "9 semanas", p: "Desenvolvimento de Liderança Inclusiva", to: "/curso/101" },
          { img: "https://iprcbrasil.com.br/wp-content/uploads/2022/09/banners-blog-post-2.png", h1: "8 semanas", p: "Estratégias de Motivação e Engajamento", to: "/curso/102" },
        ],
      ],
      title3: "Curso de Mindset e Desenvolvimento Pessoal",
      group3: [
        [
          { img: "https://franklincovey.com.br/wp-content/uploads/2022/03/post_thumbnail-4c8c8a8cb45b42633abc8beeb581d5d0.jpeg", h1: "7 semanas", p: "Mentalidade de Crescimento e Superação", to: "/curso/103" },
          { img: "https://www.contabeis.com.br/assets/img/news/a_5474_270b632137b56a48dd05c091225634ba.jpg", h1: "6 semanas", p: "Autoconhecimento e Planejamento Pessoal", to: "/curso/104" },
          { img: "https://blog.ipog.edu.br/wp-content/uploads/2017/08/Liderança-Positiva-920x368.jpg", h1: "9 semanas", p: "Gestão do Tempo e Produtividade", to: "/curso/105" },
        ],
        [
          { img: "https://s2-g1.glbimg.com/IDf53KO__Pk1N_KesKRKF54t_jc=/0x0:5184x3456/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/a/0/2uo2OxR8iVPtT2BokvKQ/shutterstock-735308308.jpg", h1: "8 semanas", p: "Resiliência e Adaptabilidade no Ambiente Profissional", to: "/curso/106" },
          { img: "https://www.contabeis.com.br/assets/img/news/a_5474_270b632137b56a48dd05c091225634ba.jpg", h1: "7 semanas", p: "Autodisciplina e Conquista de Objetivos", to: "/curso/107" },
          { img: "https://www.catho.com.br/carreira-sucesso/wp-content/uploads/sites/3/2023/04/lideranca.jpg", h1: "6 semanas", p: "Mindfulness e Gestão do Estresse", to: "/curso/108" },
        ],
      ],
    },    
  }

export { categoriesCards };
export type { Card, CardGroup };
