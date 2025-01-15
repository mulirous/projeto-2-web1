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
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "6 semanas", p: "Fundamentos de DevOps", to: "/curso/37" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Controle de Versão com Git", to: "/curso/38" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "7 semanas", p: "Introdução ao Docker", to: "/curso/39" },
        ],
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "10 semanas", p: "Automatização de Deploy com Jenkins", to: "/curso/40" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "6 semanas", p: "Monitoramento de Infraestrutura com Prometheus", to: "/curso/41" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "9 semanas", p: "Gerenciamento de Containers com Kubernetes", to: "/curso/42" },
        ],
      ],
      title2: "Curso de Infraestrutura e Automação",
      group2: [
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Configuração de Servidores Linux", to: "/curso/43" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "9 semanas", p: "Infraestrutura como Código com Terraform", to: "/curso/44" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "6 semanas", p: "Gerenciamento de Redes e Segurança", to: "/curso/45" },
        ],
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "12 semanas", p: "Automação de Infraestrutura com Ansible", to: "/curso/46" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "10 semanas", p: "Gerenciamento de Configuração com Puppet", to: "/curso/47" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "11 semanas", p: "Infraestrutura Escalável com AWS", to: "/curso/48" },
        ],
      ],
      title3: "Curso de DevOps para Profissionais",
      group3: [
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "10 semanas", p: "Desenvolvimento de Pipelines CI/CD", to: "/curso/49" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "12 semanas", p: "DevOps e Arquitetura de Microsserviços", to: "/curso/50" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "9 semanas", p: "Implementação de Backup e Recuperação de Desastres", to: "/curso/51" },
        ],
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Monitoramento e Logging com ELK Stack", to: "/curso/52" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "10 semanas", p: "Escalabilidade e Performance de Infraestrutura", to: "/curso/53" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "12 semanas", p: "Gestão de Cloud com Google Cloud Platform", to: "/curso54" },
        ],
      ],
    },
    4: {
      title1: "Curso de Fundamentos de Back-end",
      group1: [
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Fundamentos de Node.js", to: "/curso/55" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "6 semanas", p: "Introdução a APIs RESTful", to: "/curso/56" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "10 semanas", p: "Gerenciamento de Banco de Dados com MongoDB", to: "/curso/57" },
        ],
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "9 semanas", p: "Autenticação e Autorização com JWT", to: "/curso/58" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Introdução ao SQL e MySQL", to: "/curso/59" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "7 semanas", p: "Framework Express.js para Back-end", to: "/curso/60" },
        ],
      ],
      title2: "Curso de Desenvolvimento Avançado de Back-end",
      group2: [
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Microserviços com Node.js", to: "/curso/61" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "12 semanas", p: "Construção de APIs GraphQL", to: "/curso/62" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "10 semanas", p: "Gerenciamento de Banco de Dados Relacional com PostgreSQL", to: "/curso/63" },
        ],
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "9 semanas", p: "Desenvolvimento de API com NestJS", to: "/curso/64" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "6 semanas", p: "Autenticação com OAuth2", to: "/curso/65" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "10 semanas", p: "Integração Contínua e Deploy com Docker", to: "/curso/66" },
        ],
      ],
      title3: "Curso de Arquitetura de Sistemas Back-end",
      group3: [
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "12 semanas", p: "Desenvolvimento de Sistemas Escaláveis com Node.js", to: "/curso/67" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "10 semanas", p: "Gerenciamento de Cache com Redis", to: "/curso/68" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Arquitetura de Microserviços com Docker", to: "/curso/69" },
        ],
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "11 semanas", p: "Escalabilidade e Balanceamento de Carga", to: "/curso/70" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "9 semanas", p: "Segurança em APIs e Web Services", to: "/curso/71" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "12 semanas", p: "Deploy e Monitoramento de Aplicações Back-end", to: "/curso/72" },
        ],
      ],
    },
    5 : {
      title1 : "Curso de Design Gráfico para Iniciantes",
      group1 : [
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "6 semanas", p: "Introdução ao Adobe Photoshop", to: "/curso/73" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Fundamentos de Design Gráfico", to: "/curso/74" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "7 semanas", p: "Criação de Logos e Identidade Visual", to: "/curso/75" },
        ],
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "10 semanas", p: "Design para Mídias Sociais", to: "/curso/76" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "6 semanas", p: "Introdução ao Illustrator", to: "/curso/77" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "9 semanas", p: "Design de Cartazes e Materiais Impressos", to: "/curso/78" },
        ],
      ],
      title2 : "Curso de Design Gráfico Avançado",
      group2 : [
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "12 semanas", p: "Design Digital e Web Design", to: "/curso/79" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "10 semanas", p: "Criação de Animações com After Effects", to: "/curso/80" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Design Editorial e Layout de Revistas", to: "/curso/81" },
        ],
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "9 semanas", p: "Design para Branding e Marketing Visual", to: "/curso/82  " },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "11 semanas", p: "Design UX/UI para Web e Móvel", to: "/curso/83" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "12 semanas", p: "Design de Interfaces e Prototipagem", to: "/curso/84" },
        ],
      ],
      title3 : "Curso de Design Gráfico para Profissionais",
      group3 : [
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "10 semanas", p: "Criação de Propostas Visuais para Clientes", to: "/curso/85" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Fotografia e Tratamento de Imagens para Designers", to: "/curso/86" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "7 semanas", p: "Design para E-commerce e Lojas Virtuais", to: "/curso/87" },
        ],
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "12 semanas", p: "Técnicas Avançadas de Ilustração Digital", to: "/curso/88" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "9 semanas", p: "Gestão de Projetos de Design Gráfico", to: "/curso/89" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "10 semanas", p: "Design Gráfico para Impressos e Mídias Digitais", to: "/curso/90" },
        ],
      ]
    },
    6: {
      title1: "Curso de Comunicação e Colaboração",
      group1: [
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "6 semanas", p: "Habilidades de Comunicação Interpessoal", to: "/curso/91" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Comunicação Eficaz no Ambiente de Trabalho", to: "/curso/92" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "7 semanas", p: "Gestão de Conflitos no Trabalho", to: "/curso/93" },
        ],
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "5 semanas", p: "Escuta Ativa e Feedback Construtivo", to: "/curso/94" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "6 semanas", p: "Empatia e Inteligência Emocional", to: "/curso/95" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "9 semanas", p: "Trabalho em Equipe de Alta Performance", to: "/curso/96" },
        ],
      ],
      title2: "Curso de Liderança e Gestão de Pessoas",
      group2: [
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Liderança Transformacional", to: "/curso/97" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "6 semanas", p: "Gestão de Equipes Remotas", to: "/curso/98" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "7 semanas", p: "Mentoria e Coaching de Desenvolvimento", to: "/curso/99" },
        ],
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "5 semanas", p: "Gestão de Performance e Resultados", to: "/curso/100" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "9 semanas", p: "Desenvolvimento de Liderança Inclusiva", to: "/curso/101" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Estratégias de Motivação e Engajamento", to: "/curso/102" },
        ],
      ],
      title3: "Curso de Mindset e Desenvolvimento Pessoal",
      group3: [
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "7 semanas", p: "Mentalidade de Crescimento e Superação", to: "/curso/103" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "6 semanas", p: "Autoconhecimento e Planejamento Pessoal", to: "/curso/104" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "9 semanas", p: "Gestão do Tempo e Produtividade", to: "/curso/105" },
        ],
        [
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "8 semanas", p: "Resiliência e Adaptabilidade no Ambiente Profissional", to: "/curso/106" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "7 semanas", p: "Autodisciplina e Conquista de Objetivos", to: "/curso/107" },
          { img: "https://srzd.com/dashboard/wp-content/uploads/2024/04/calm.png", h1: "6 semanas", p: "Mindfulness e Gestão do Estresse", to: "/curso/108" },
        ],
      ],
    },    
  }

export { categoriesCards };
export type { Card, CardGroup };
