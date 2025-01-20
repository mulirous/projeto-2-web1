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
            { img: "https://burst.shopifycdn.com/photos/smirking-young-man.jpg?width=1000&format=pjpg&exif=0&iptc=0", h1: "Alexandre Couto", id: 1, route: "/professor/1" },
            { img: "https://assets.jus.com.br/system/profile_image/59119/c42497976a1b83756db23c4f035bcab2.jpeg", h1: "Nivaldo Rocha", id: 2, route: "/professor/2" },
            { img: "https://i.pinimg.com/236x/95/81/86/958186ae505ad61600685063abf8d27a.jpg", h1: "Roberta Menezes", id: 3, route: "/professor/3" },
            ],
            [
            { img: "https://static.vecteezy.com/ti/fotos-gratis/t2/5889815-atraente-jovem-com-cabelo-escuro-e-moderno-penteado-vestindo-roupas-casuais-ao-ar-livre-foto.jpg", h1: "Gabriel Oliveira", id: 4, route: "/professor/4" },
            { img: "https://m.leiaja.com/sites/default/files/imagens/2021/doutora-usar-essa.jpg", h1: "Natália Cabral", id: 5, route: "/professor/5" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcRtISw1vDmD6TqH4W_CHLZdR0tytPHLKfw&s", h1: "José Filho", id: 6, route: "/professor/6" },
            ],
        ],
    },
    2 : {
        title : "Data Science",
        group: [
            [
            { img: "https://www.inpev.org.br/wp-content/uploads/2024/03/ec0db4e5-e9ae-4bb6-a132-8f2441a8beda.jpeg", h1: "Bruno Moura", id: 7, route: "/professor/7" },
            { img: "https://avatars.githubusercontent.com/u/22248342?v=4", h1: "Pedro Falcão", id: 8, route: "/professor/8" },
            { img: "https://static.imasters.com.br/wp-content/uploads/2019/02/20112325/person05-300x300.jpg", h1: "Arthur Henrique", id: 9, route: "/professor/9" },
            ],
            [
            { img: "https://conteudo.imguol.com.br/c/entretenimento/88/2023/09/14/cleydijane-lopes-1-1694695606403_v2_450x450.jpg", h1: "Livian Queiroz", id: 10, route: "/professor/10" },
            { img: "https://revistalivemarketing.com.br/wp-content/uploads/2022/06/Paixao-nacional-os-memes-tambem-podem-desrespeitar-direitos-autorais.jpeg.webp", h1: "Fernanda Macedo", id: 11, route: "/professor/11" },
            { img: "https://static.vecteezy.com/ti/fotos-gratis/t2/5346410-close-up-retrato-de-sorrindo-bonito-jovem-caucasiano-cara-olhando-para-camera-em-fundo-de-estudio-cinza-claro-isolado-foto.jpg", h1: "Jacob Cullen", id: 12, route: "/professor/12" },
            ],
        ],
    },
    3 : {
        title : "DevOps",
        group: [
            [
            { img: "https://nickcell.com.br/wp-content/uploads/2024/02/1696622997012.jpg", h1: "Francisco Machado", id: 13, route: "/professor/13" },
            { img: "https://www.itausocial.org.br/wp-content/uploads/2023/06/Carlos-Abicalil-1024x553.png", h1: "Guilherme Kaio", id: 14, route: "/professor/14" },
            { img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqplzzqloz0GQ0VJtgmbLXrXOw0oOqML94ea-9omqVdqcP9wWkcVaXP6N5qyXzmXKHqGdWZV50YoowDLYZEXUsudlrsC03KnxaPozIOd_EIpfCcMQZNu29mY2n_fX6AfD8QCn3D7jJUok/s749/como-ficar-com-o-rosto-mais-bonito+%25284%2529.jpg", h1: "Breno Souza", id: 15, route: "/professor/15" },
            ],
            [
            { img: "https://assets.jus.com.br/system/profile_image/26208/a8705a33439b68ad974010e0551e2d19.jpg", h1: "Fernando Silva", id: 16, route: "/professor/16" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5o7BQCVjkH-bVOuECGeHfL9dxZqLZ9wTbj3jEAQ9pGYfWPvhXdLalTsOLAUQz7SRakEY&usqp=CAU", h1: "Gustavo Henrique", id: 17, route: "/professor/17" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDxld0ma5ERrBzSbOSq1T89-EjPhLWplQJkS209n32x3OsXvh5A2Sj-Mrffe0OkkYcFQ&usqp=CAU", h1: "Leticia Cortês", id: 18, route: "/professor/18" },
            ],
        ],
    },
    4 : {
        title : "Backend",
        group: [
            [
            { img: "https://img2.migalhas.com.br/_MEDPROC_/author.jpg._PROC_AC334551AT1AP11.jpg", h1: "Silvana Medeiros", id: 19, route: "/professor/19" },
            { img: "https://static.vecteezy.com/ti/fotos-gratis/t2/3752445-homem-negro-inclinado-no-corrimao-assistindo-o-celular-celular-virando-se-para-a-camera-sorrisos-foto.jpg", h1: "Yuri Pinheiro", id: 20, route: "/professor/20" },
            { img: "https://static.vecteezy.com/ti/fotos-gratis/t2/3492221-retrato-de-alegre-bonito-homem-de-camisa-branca-olhando-para-camera-sentindo-alegre-como-se-tendo-uma-ideia-interessante-estudio-isolada-no-fundo-bege-gratis-foto.JPG", h1: "Pedro Junior", id: 21, route: "/professor/21" },
            ],
            [
            { img: "https://i.pinimg.com/474x/28/42/c5/2842c52d6ea675991dd4f1df2448327e.jpg", h1: "Giovanna Lima", id: 22, route: "/professor/22" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbREpgg-1BPuH69xzuGakBG-ihVDkCmoGmOPDw11wNA92O5jAW1BA88yEoAWmS19PZ6g&usqp=CAU", h1: "Natan Silveira", id: 23, route: "/professor/23" },
            { img: "https://files.tecnoblog.net/wp-content/uploads/2019/02/thispersondoesnotexist.jpg", h1: "João Melo", id: 24, route: "/professor/24" },
            ],
        ],
    },
    5 : {
        title : "UI/UX Design",
        group: [
            [
            { img: "https://www.colegiocognos.com.br/wp-content/uploads/2020/08/essa-pessoa-nao-existe2.jpeg", h1: "Hildefran Fontes", id: 25, route: "/professor/25" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaleUVPoj8CsMOkjB9qp60IDG0bLpCb2xn-bQl8ysJI7Fml5CJwF71X3sL-I02E0TELTw&usqp=CAU", h1: "Josué Santoz", id: 26, route: "/professor/26" },
            { img: "https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/ULBLSUYTUBJKJDD6LWYKCLLJAI.jpg?auth=6a31d59dc3e4b40f45d3da37623eefe4f5e811f94132e9fa5a106965cb2bae59&width=1024&height=1024", h1: "Isabella Soares", id: 27, route: "/professor/27" },
            ],
            [
            { img: "https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/ZVZDZNC3OZO53LGDQ5PGI537UA.jpg?auth=7dd70ca49702d2c1c667781a8635d728994029ccdf29fb263b50d86d504f0c60&width=1024&height=1024", h1: "Lucimara Agnez", id: 28, route: "/professor/28" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDMcshKfvQLRzHXgStbQRS4tJVg9y-zxqqMicdwI94bEEH5xrUlKhkZ3ss_ct3EFtprE&usqp=CAU", h1: "Luisa Lemos", id: 29, route: "/professor/29" },
            { img: "https://i.pinimg.com/736x/65/a8/cf/65a8cf24085791bbdb1d307a58ec2b6a.jpg", h1: "Valter Brito", id: 30, route: "/professor/30" },
            ],
        ],
    },
    6 : {
        title : "Soft Skill",
        group: [
            [
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgh4icKiWX52T9RrRkmUaJjkSX9eFOTet8tA&s", h1: "John Doe", id: 31, route: "/professor/31" },
            { img: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/professora-lu-renascer.jpg?w=1200&h=900&crop=1", h1: "Juliana Santos", id: 32, route: "/professor/32" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBklu4EOhkC4iTwMCgytDgmBtYjb6Q2U03mappWHAkeeOQ0GAuiko0MuZ1DT3qf61E250&usqp=CAU", h1: "Suzana Vieira", id: 33, route: "/professor/33" },
            ],
            [
            { img: "https://static.vecteezy.com/ti/fotos-gratis/t2/51354465-retrato-do-sorridente-feliz-latim-homem-olhando-as-camera-posando-isolado-em-bege-fundo-foto.jpg", h1: "Danilo Medeiros", id: 34, route: "/professor/34" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLk0LFAsVDyFZMrJSniTiYbeGy1UJG7xeXEEGU7AmJOjuwO6jKPe_qqBNtzQMHstUq5os&usqp=CAU", h1: "Luiz Albuquerque", id: 35, route: "/professor/35" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxo5M2UNQHIAL85qTAlA5g5QLtIndY1J4hqOlSI4Uhc4muZB70RbXKiYVz1rHA0wQ9J90&usqp=CAU", h1: "Felipe Barbosa", id: 36, route: "/professor/36" },
            ],
        ],
    },

};