interface CursoData {
    id: number;
    detalhes: string;
    imagem1: string;
    imagem2: string;
    tecnologias: string[];
    preco: number;
    semanas: string;
    aulas: number;
    horas: number;
}


// Terminar de adicionar para os demais cursos
// NOTA: LEMBRE QUE O ID DO CURSO DEVE SER O SEU MESMO NÚMERO QUANTO A OBJETO. EX:
// 2: {
//   id: 2,
//   ...
// },
// 3: {
//   id: 3,
//   ...
// }
export const cursoData: Record<number, CursoData> = {
  1: {
    id: 1,
    detalhes: "Curso incrivel para você iniciar sue aprendizado no mundo da programação, aqui você iá consolidar sua lógica e se preparar para seu primeiros passos",
    imagem1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjkxWqfdk45dqAiVJUmpWwf1zPtWq__JwGA&s",
    imagem2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjkxWqfdk45dqAiVJUmpWwf1zPtWq__JwGA&s",
    tecnologias: ["HTML5", "CSS3"],
    preco: 39.9,
    semanas: "6",
    aulas: 40,
    horas: 50,
  }
}