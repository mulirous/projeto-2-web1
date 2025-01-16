interface BotaoData {
    img: string;
    h1: string;
    id: number;
    route: string;
}
  
interface BotaoImgGroup {
    title: string,
    group: BotaoData[][];
}


export const professores : Record<number, BotaoImgGroup>= {
    1 : {
        title : "Frontend",
        group: [
            [
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjkxWqfdk45dqAiVJUmpWwf1zPtWq__JwGA&s", h1: "Nome", id: 1, route: "/professor/1" },
            { img: "https://miro.medium.com/v2/resize:fit:1400/1*xwAIUbfad95lsuGf2n9nnA.jpeg", h1: "Nome", id: 2, route: "/professor/2" },
            { img: "https://www.infoworld.com/wp-content/uploads/2024/06/shutterstock_1361674454-100939444-orig.jpg?quality=50&strip=all", h1: "Nome", id: 3, route: "/professor/3" },
            ],
            [
            { img: "https://hermes.dio.me/articles/cover/98dcfc09-a5dc-4ab2-b6ad-7641578f625e.jpg", h1: "Nome", id: 4, route: "/professor/4" },
            { img: "https://compraco.com.br/cdn/shop/articles/Para-que-e-usado-o-JavaScript.jpg?v=1717267239", h1: "10 semanas", id: 5, route: "/professor/5" },
            { img: "https://programadoresdepre.com.br/wp-content/uploads/2022/07/8-melhores-frameworks-de-desenvolvimento-web-em-2022.jpg", h1: "Nome", id: 6, route: "/professor/6" },
            ],
        ],
    },
    2 : {
        title : "Data Science",
        group: [
            [
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjkxWqfdk45dqAiVJUmpWwf1zPtWq__JwGA&s", h1: "Nome", id: 1, route: "/professor/7" },
            { img: "https://miro.medium.com/v2/resize:fit:1400/1*xwAIUbfad95lsuGf2n9nnA.jpeg", h1: "Nome", id: 2, route: "/professor/8" },
            { img: "https://www.infoworld.com/wp-content/uploads/2024/06/shutterstock_1361674454-100939444-orig.jpg?quality=50&strip=all", h1: "Nome", id: 3, route: "/professor/9" },
            ],
            [
            { img: "https://hermes.dio.me/articles/cover/98dcfc09-a5dc-4ab2-b6ad-7641578f625e.jpg", h1: "Nome", id: 4, route: "/professor/10" },
            { img: "https://compraco.com.br/cdn/shop/articles/Para-que-e-usado-o-JavaScript.jpg?v=1717267239", h1: "10 semanas", id: 5, route: "/professor/11" },
            { img: "https://programadoresdepre.com.br/wp-content/uploads/2022/07/8-melhores-frameworks-de-desenvolvimento-web-em-2022.jpg", h1: "Nome", id: 6, route: "/professor/12" },
            ],
        ],
    },
    3 : {
        title : "DevOps",
        group: [
            [
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjkxWqfdk45dqAiVJUmpWwf1zPtWq__JwGA&s", h1: "Nome", id: 1, route: "/professor/13" },
            { img: "https://miro.medium.com/v2/resize:fit:1400/1*xwAIUbfad95lsuGf2n9nnA.jpeg", h1: "Nome", id: 2, route: "/professor/14" },
            { img: "https://www.infoworld.com/wp-content/uploads/2024/06/shutterstock_1361674454-100939444-orig.jpg?quality=50&strip=all", h1: "Nome", id: 3, route: "/professor/15" },
            ],
            [
            { img: "https://hermes.dio.me/articles/cover/98dcfc09-a5dc-4ab2-b6ad-7641578f625e.jpg", h1: "Nome", id: 4, route: "/professor/16" },
            { img: "https://compraco.com.br/cdn/shop/articles/Para-que-e-usado-o-JavaScript.jpg?v=1717267239", h1: "10 semanas", id: 5, route: "/professor/17" },
            { img: "https://programadoresdepre.com.br/wp-content/uploads/2022/07/8-melhores-frameworks-de-desenvolvimento-web-em-2022.jpg", h1: "Nome", id: 6, route: "/professor/18" },
            ],
        ],
    },
    4 : {
        title : "Backend",
        group: [
            [
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjkxWqfdk45dqAiVJUmpWwf1zPtWq__JwGA&s", h1: "Nome", id: 1, route: "/professor/19" },
            { img: "https://miro.medium.com/v2/resize:fit:1400/1*xwAIUbfad95lsuGf2n9nnA.jpeg", h1: "Nome", id: 2, route: "/professor/20" },
            { img: "https://www.infoworld.com/wp-content/uploads/2024/06/shutterstock_1361674454-100939444-orig.jpg?quality=50&strip=all", h1: "Nome", id: 3, route: "/professor/21" },
            ],
            [
            { img: "https://hermes.dio.me/articles/cover/98dcfc09-a5dc-4ab2-b6ad-7641578f625e.jpg", h1: "Nome", id: 4, route: "/professor/22" },
            { img: "https://compraco.com.br/cdn/shop/articles/Para-que-e-usado-o-JavaScript.jpg?v=1717267239", h1: "10 semanas", id: 5, route: "/professor/23" },
            { img: "https://programadoresdepre.com.br/wp-content/uploads/2022/07/8-melhores-frameworks-de-desenvolvimento-web-em-2022.jpg", h1: "Nome", id: 6, route: "/professor/24" },
            ],
        ],
    },
    5 : {
        title : "UI/UX Design",
        group: [
            [
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjkxWqfdk45dqAiVJUmpWwf1zPtWq__JwGA&s", h1: "Nome", id: 1, route: "/professor/25" },
            { img: "https://miro.medium.com/v2/resize:fit:1400/1*xwAIUbfad95lsuGf2n9nnA.jpeg", h1: "Nome", id: 2, route: "/professor/26" },
            { img: "https://www.infoworld.com/wp-content/uploads/2024/06/shutterstock_1361674454-100939444-orig.jpg?quality=50&strip=all", h1: "Nome", id: 3, route: "/professor/27" },
            ],
            [
            { img: "https://hermes.dio.me/articles/cover/98dcfc09-a5dc-4ab2-b6ad-7641578f625e.jpg", h1: "Nome", id: 4, route: "/professor/28" },
            { img: "https://compraco.com.br/cdn/shop/articles/Para-que-e-usado-o-JavaScript.jpg?v=1717267239", h1: "10 semanas", id: 5, route: "/professor/29" },
            { img: "https://programadoresdepre.com.br/wp-content/uploads/2022/07/8-melhores-frameworks-de-desenvolvimento-web-em-2022.jpg", h1: "Nome", id: 6, route: "/professor/30" },
            ],
        ],
    },
    6 : {
        title : "Soft Skill",
        group: [
            [
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjkxWqfdk45dqAiVJUmpWwf1zPtWq__JwGA&s", h1: "Nome", id: 1, route: "/professor/31" },
            { img: "https://miro.medium.com/v2/resize:fit:1400/1*xwAIUbfad95lsuGf2n9nnA.jpeg", h1: "Nome", id: 2, route: "/professor/32" },
            { img: "https://www.infoworld.com/wp-content/uploads/2024/06/shutterstock_1361674454-100939444-orig.jpg?quality=50&strip=all", h1: "Nome", id: 3, route: "/professor/33" },
            ],
            [
            { img: "https://hermes.dio.me/articles/cover/98dcfc09-a5dc-4ab2-b6ad-7641578f625e.jpg", h1: "Nome", id: 4, route: "/professor/34" },
            { img: "https://compraco.com.br/cdn/shop/articles/Para-que-e-usado-o-JavaScript.jpg?v=1717267239", h1: "10 semanas", id: 5, route: "/professor/35" },
            { img: "https://programadoresdepre.com.br/wp-content/uploads/2022/07/8-melhores-frameworks-de-desenvolvimento-web-em-2022.jpg", h1: "Nome", id: 6, route: "/professor/36" },
            ],
        ],
    },

};