// Contador
const formatarDigito = (digito) => `0${digito}`.slice(-2);
const atualizar = (tempo) => {

    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
};
const contagemRegressiva = (tempo) => {

    const pararContagem = () => clearInterval(id);

    const contar = () => {

        if (tempo <= 0) {
            atualizar(0);
            pararContagem();
            return;
        }

        atualizar(tempo);
        tempo--;
    };

    const id = setInterval(contar, 1000);
};
const tempoRestante = () => {

    const dataEvento = new Date('2026-10-09 12:00:00');
    const hoje = Date.now();

    return Math.floor((dataEvento - hoje) / 1000);
};

// Só executa o contador se os elementos existirem
const elementoContador = document.getElementById('dias');

if (elementoContador) {
    contagemRegressiva(tempoRestante());
}

// Preview song
let song = document.getElementById('care-less')
let button = document.getElementById('previewBtn')
let vinyl = document.getElementById('spinning-vinyl')

button.addEventListener("click", previewSong)

async function playSong(){
try {
    await song.play();
  } catch (err) {

  }
}

function previewSong(){
    if(song.paused){
        playSong()
        vinyl.classList.add('spin')

    } else if (!song.paused){
        song.pause()
        vinyl.classList.remove('spin')
    }

}

// Popups
entirepopup = document.getElementById("popup-structure")
popup_body = document.getElementById("popup-body")
popup_title = document.getElementById("popup-title")


function openPopup(type){
    // Parâmetro type: Pega qual popup irá ser aberto.
    entirepopup.classList.add("shown")
    entirepopup.classList.remove("hidden")

    if(type == "more"){
        popup_title.innerText = "Mais informações sobre o evento"
        popup_body.innerHTML = `
            <p id="popup-title">Descrição do evento.</p>
            <p id="popup-p">Esse evento se trata sobre o lançamento do meu mais novo álbum <span style="font-style: italic;">"life's a mess" (a vida é uma bagunça)</span>, que conta com mais de 5 músicas, uma delas já revelada, <span style="font-style: italic;">"wish i could care less" (queria me importar menos)</span>.</p>
            <p id="popup-p">O álbum lança oficialmente 09 de outubro de 2026, ao 12:00, nas plataformas Spotify, Deezer e no YouTube com visualizadores de áudio; conta com 3 músicas feitas em colaboração com nicopatty. É o meu maior álbum já feito, espero que goste!</p>
            <div id="popup-flexdiv-left">
                <img id="popup-image" src="assets/album.jpg">
                <div>
                    <p id="popup-p">Nome do álbum: life's a mess</p>
                    <p id="popup-p">Total de músicas: 10</p>
                    <p id="popup-p">Tempo de álbum: 25 minutos</p>
                    <p id="popup-p">Gênero: Lo-fi, Sillycore, Breakcore.
                    <p id="popup-p">Capa do álbum feita por migmated</p>
                </div>
            </div>
        `;
    } else if(type == "contact"){
        popup_title.innerText = "Entre em contato comigo"
        popup_body.innerHTML = `
            <p id="popup-title">Minhas redes sociais</p>
            <div id="popup-flexdiv-left">
                <img id="popup-image" src="assets/socials/gmail.png">
                <div>
                    <p id="popup-title">E-mail</p>
                    <p id="popup-p">migmated.contato@gmail.com</p>
                    <p id="popup-p-i">Use apenas para fins profissionais.</p>
                </div>
            </div>
            <div id="popup-flexdiv-left">
                <img id="popup-image" src="assets/socials/github.png">
                <div>
                    <p id="popup-title">GitHub</p>
                    <p id="popup-p">ProgrammerMig</p>
                    <p id="popup-p-i">Lá podem sem encontrados todos os meus outros projetos, assim como esse!</p>
                </div>
            </div>
            <div id="popup-flexdiv-left">
                <img id="popup-image" src="assets/socials/instagram.png">
                <div>
                    <p id="popup-title">Instagram</p>
                    <p id="popup-p">Migmated</p>
                    <p id="popup-p-i">Lá podem ser encontrados projetos mais pessoais e cortes populares de minhas músicas.</p>
                </div>
            </div>
        `;
    } else {
        popup_title.innerText = "Placeholder"
        popup_body.innerHTML = `
            <div id="popup-flexdiv-left">
                <img id="popup-image" src="assets/album.jpg">
                <div>
                    <p id="popup-title">Essa div é alinhada para a esquerda!</p>
                    <p id="popup-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eius saepe omnis odio, esse recusandae officiis, odit corporis repellat totam consequatur autem neque? Laudantium minima, impedit blanditiis beatae cupiditate earum.</p>
                    <p id="popup-p-i">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis unde doloremque sequi quam ipsa neque praesentium, beatae optio, molestias accusamus veritatis rem sapiente non assumenda quae vitae illo architecto iure.</p>
                </div>
                </div>
                <hr>
                <div id="popup-flexdiv-right">
                <img id="popup-image" src="assets/album.jpg">
                <div>
                    <p id="popup-title">Essa div é alinhada para a direita!</p>
                    <p id="popup-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eius saepe omnis odio, esse recusandae officiis, odit corporis repellat totam consequatur autem neque? Laudantium minima, impedit blanditiis beatae cupiditate earum.</p>
                    <p id="popup-p-i">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis unde doloremque sequi quam ipsa neque praesentium, beatae optio, molestias accusamus veritatis rem sapiente non assumenda quae vitae illo architecto iure.</p>
                </div>
            </div>
        `;
    }

}

function closePopup(){
    entirepopup.classList.add("hidden")
    entirepopup.classList.remove("shown")
}