var popup = document.querySelector('div.pop-up')
var play = document.querySelector('div.play')

function abrirFilme(idfilme){
    let linkPlay

    popup.style.display = 'block'

    /*Banco de links*/
    switch (idfilme) {
        case 'c1':
            linkPlay = `https://www.youtube.com/embed/g6ng8iy-l0U`
            break;
        case 'c2':
            linkPlay = `https://www.youtube.com/embed/zP6nE1nEfeI`
            break;
        case 'c3':
            linkPlay = `https://www.youtube.com/embed/76CslX-q5C4`
            break;
        case 'c4':
            linkPlay = `https://www.youtube.com/embed/W0squnw6Jp8`
            break;
        case 'c5':
            linkPlay = `https://www.youtube.com/embed/TTIbWKEUPnc`
            break;
        case 'm1':
            linkPlay = `https://www.youtube.com/embed/aOC8E8z_ifw`
            break;
        case 'm2':
            linkPlay = `https://www.youtube.com/embed/odFM3ecQaPE`
            break;
        case 'm3':
            linkPlay = `https://www.youtube.com/embed/6pRqU87HBuI`
            break;
        case 'm4':
            linkPlay = `https://www.youtube.com/embed/NZxfnJt9vKo`
            break;
        case 'm5':
            linkPlay = `https://www.youtube.com/embed/VzCwtXq5sN0`
            break;
        case 'm6':
            linkPlay = `https://www.youtube.com/embed/RnEWqPc5EhI`
            break;
        case 'm7':
            linkPlay = `https://www.youtube.com/embed/N_vBWpngrsM`
            break;
        case 'm8':
            linkPlay = `https://www.youtube.com/embed/jJlMIyY6HDQ`
            break;
        case 'm9':
            linkPlay = `https://www.youtube.com/embed/AD5cvVk-4Ps`
            break;
        case 'm10':
            linkPlay = `https://www.youtube.com/embed/5FD1x-biuWQ`
            break;
        default:
            alert('ERRO! O Arquivo não está diponível no momento')
            fecharPop()
            break;
    }
    
    play.innerHTML = `<iframe width="100%" height="80%" src="${linkPlay}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    
}

function fecharPop(){
    popup.style.display = 'none'
    play.innerHTML = ``
}