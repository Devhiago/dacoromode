document.addEventListener('DOMContentLoaded', function () {
    const musicas = document.querySelectorAll('.musica');
    const imagemMusicaGrande = document.querySelector('.capa-musica-grande');
    const nomeMusica = document.getElementById('nome-musica');
    const descricaoMusica = document.getElementById('descricao-musica');
    const audioPlayer = document.getElementById('audio-player');

    musicas.forEach(musica => {
        musica.addEventListener('mouseenter', () => {
            if (window.innerWidth < 450) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            removerSelecaoDaMusica();

            musica.classList.add('selecionada');
            alterarImagemMusicaSelecionada(musica);
            alterarNomeMusicaSelecionada(musica);
            alterarDescricaoMusicaSelecionada(musica);

            // Adicione este trecho para tocar a música
            const nomeMusica = musica.getAttribute('data-nome');
            audioPlayer.src = `caminho_para_a_sua_musica/${nomeMusica}.mp3`;
            audioPlayer.play();
        });

        // Adicione este trecho para pausar a música quando o mouse sair da imagem
        musica.addEventListener('mouseleave', () => {
            audioPlayer.pause();
        });
    });

    function alterarDescricaoMusicaSelecionada(musica) {
        descricaoMusica.innerText = musica.getAttribute('data-descricao');
    }

    function alterarNomeMusicaSelecionada(musica) {
        nomeMusica.innerText = musica.getAttribute('data-nome');
    }

    function alterarImagemMusicaSelecionada(musica) {
        const nomeMusica = musica.getAttribute('data-nome');
        imagemMusicaGrande.src = `./img/card-${nomeMusica}.jpeg`;
    }

    function removerSelecaoDaMusica() {
        const musicaSelecionada = document.querySelector('.selecionada');
        if (musicaSelecionada) {
            musicaSelecionada.classList.remove('selecionada');
        }
    }
});
