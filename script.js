function validarIdade() {
    var idade = parseInt(document.getElementById("idade").value);

    if (isNaN(idade) || idade < 0) {
            document.getElementById("faixaEtaria").innerHTML = "Por favor, insira uma idade válida.";
    }

    if (idade >= 0 && idade < 15) {
        document.getElementById("faixaEtaria").innerHTML = "Você é uma Criança!";
        console.log("a")
    } else if(idade >= 15 && idade < 30){
        document.getElementById("faixaEtaria").innerHTML = "Você é Jovem!";

    } else if(idade >= 30 && idade < 60){
        document.getElementById("faixaEtaria").innerHTML = "Você é Adulto!";

    } else if(idade >= 60){
        document.getElementById("faixaEtaria").innerHTML = "Você é Idoso!";
    }
}