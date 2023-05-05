var palavra = document.getElementById('palavra');
var significado = document.getElementById('significado');
var etimologia = document.getElementById('etimologia');
var erro = document.getElementById('erro');
var url = "https://api.dicionario-aberto.net/random";
/*API de palavra aleatória*/
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        a = data.word;
        /*Código para deixar apenas a primeira letra maiúscula*/
        palavra.innerText = a.charAt(0).toUpperCase() + a.slice(1);
        var url2 = `https://dicio-api-ten.vercel.app/v2/${a}`;
        console.log(url2);
        console.log(a);
        /*API de significados*/
        fetch(url2)
            .then(response2 => {
                if (!response2.ok) {
                    throw new Error("Erro " + response.status + ": " + response.statusText);
                }
                return response2.json();
            })
            .then((data2) => {
                console.log(data2);
                for (item in data2) {
                    etimologia.innerHTML = data2[item].etymology + "\n";
                    significado.innerHTML = data2[item].meanings;
                }
            })
            .catch(error => {
                location.reload()
            });
    });