function fazerRequisicao(){

            var url = "https://dicasdejavascript.com.br/exemplo.txt";

            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, false);

            xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

            document.getElementById("resposta").innerHTML = xhttp.responseText;

}



function RetornaText () {
    return () {
        xhttp.responseText;
    }
    
}