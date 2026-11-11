const entrega = document.getElementById("status");
const carregando = document.getElementById("carregando");

entrega.addEventListener("click", function() {
    const promessa = new Promise ((resolve, reject) => {
        let delivering = true;

        setTimeout(() => {
            if(delivering) {
            resolve("Entrega realizada!");
        } else {
            reject("Entrega não realizada!");
        }
        }, 5000);

        carregando.innerText = "Aguardando resultado..."
    })

    promessa.then((resultado) => {
        alert(resultado);
    });
    promessa.catch((erro) => {
        alert(erro);
    });
})