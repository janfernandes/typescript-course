// var, let e const
// var
// function iniciarTime(iniciaJogo: boolean) {
//     var nome: string = 'Messi e amigos';
//     //HOISTING
//     if (iniciaJogo) {
//         var cidade = 'em Uberlândia';
//     }
//     console.log(`${nome} vão jogar ${cidade}`);
// }
// var
// function iniciarTime(iniciaJogo: boolean) {
//     let nome: string = 'Messi e amigos';
//     let cidade: string;
//     //HOISTING
//     if (iniciaJogo) {
//         cidade = 'em Uberlândia';
//     }
//     console.log(`${nome} vão jogar ${cidade}`);
// }
// const
function iniciarTime(iniciaJogoEmUberlandia) {
    var nome = 'Messi e amigos';
    var cidade = 'em São Paulo';
    if (iniciaJogoEmUberlandia) {
        cidade = 'em Uberlândia';
    }
    // nome = 'Ronaldo e amigos';
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(false);
