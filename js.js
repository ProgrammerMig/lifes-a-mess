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

// Prever música
let song = document.getElementById('care-less')
let button = document.getElementById('previewBtn')
let vinyl = document.getElementById('spinning-vinyl')
let tocando = false

function stopVinyl(){
    vinyl.classList.remove('spin')
    vinyl.style.transform = `rotate(0deg)`
    button.value = 'Prever música'
}

button.addEventListener('click', () => {
    if(!tocando){
        song.play()
        vinyl.classList.add('spin')
        button.value = 'Pausar prévia'
        
    } else {
        song.pause()
        vinyl.classList.remove('spin')
        button.value = 'Prever música'
    }
    tocando = !tocando;
})

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
                <div style="width: 80%;">
                    <p id="popup-p-i">Apresentando a vocês, meu mais novo álbum: <span style="font-style:italic;">life's a mess</span>, que conta com mais de 10 músicas com estilos variados. A página conta com um teaser do álbum, com a música <span style="font-style:italic;">wish i could care less</span>.</p>
                    <p id="popup-p-i">O álbum completo ficará disponível na data 09 de outubro de 2026 ao meio dia, nas plataformas Spotify e YouTube (você pode clicar diretamente nos icones abaixo para ser redirecionado até seus respectivos links).</p>
                </div>

            <hr style="margin-bottom: 15px; margin-top: 15px;">

            <p id="popup-title">Informações do álbum.</p>
                <div id="popup-flexdiv-left">
                    <img id="popup-image" src="assets/album.jpg">
                    <div>
                        <p id="popup-p">Nome do álbum: life's a mess</p>
                        <p id="popup-p">Total de músicas: 15</p>
                        <p id="popup-p">Tempo de álbum: 34 minutos</p>
                        <p id="popup-p">Gênero: Lo-fi, Sillycore, Breakcore.
                        <p id="popup-p">Capa do álbum feita por migmated</p>
                        <div id="popup-align-icons">
                            <a href="#">
                                <img src="assets/socials/spotify.webp" id="popup-icon">
                            </a>
                            <a href="#">
                                <img src="assets/socials/youtube.png" id="popup-icon">
                            </a>
                        </div>
                    </div>

                </div>
        `;
    } else if(type == "contact"){
        popup_title.innerText = "Entre em contato comigo"
        popup_body.innerHTML = `
        <p id="popup-title">Minhas redes sociais</p>
        <div style="display:flex; flex-direction:row; gap: 15px;">
            <div id="popup-card">
                <img id="popup-image" src="assets/socials/gmail.png">
                <div>
                    <p id="popup-title">E-mail</p>
                    <p id="popup-p">migmated.contato@gmail.com</p>
                    <p id="popup-p-i">Entre em contato comigo pelo e-mail acima, use apenas para fins profissionais.</p>
                </div>
            </div>
            <div id="popup-card">
                <img id="popup-image" src="assets/socials/spotify.webp">
                <div>
                    <p id="popup-title">Spotify</p>
                    <p id="popup-p">Migmated</p>
                    <p id="popup-p-i">Para ouvir os meus mais recentes lançamentos diretamente pelo Spotify!</p>
                </div>
            </div>
            <div id="popup-card">
                <img id="popup-image" src="assets/socials/youtube.png" style="margin-top: 15px;">
                <div>
                    <p id="popup-title">YouTube</p>
                    <p id="popup-p">MigmatedMusic</p>
                    <p id="popup-p-i">Para ouvir os meus mais recentes lançamentos diretamente pelo YouTube (com visualizadores de áudio incríveis também).</p>
                </div>
            </div>
        </div>
        <div>
            <a href="#" style="text-decoration: none; color:#fff;">
            <div id="popup-kofi-btn">
                    <img src="assets/socials/ko-fi.gif" id="popup-kofi-icon">
                    <p>Suporte-me no Ko-fi!</p>
            </div>
            </a>
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

// Visualizador de áudio
// Ví tutorial de como fazer.
canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')
const context = new AudioContext()
const analyser =  context.createAnalyser()
const source = context.createMediaElementSource(song)

const fbc_array = new Uint8Array(analyser.frequencyBinCount)

window.addEventListener("load", () => {
    source.connect(analyser)
    analyser.connect(context.destination)

    loop()
}, false)

function loop () {
    window.requestAnimationFrame(loop)
    analyser.getByteFrequencyData(fbc_array)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = `#ffffff60`

    let bar_x
    let bar_width
    let bar_height
    let bars = 25

    for (let i=0; i<bars; i++){
        bar_x = i * 6
        bar_width = 4
        bar_height = -(fbc_array[i] / 2)
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
    }
}