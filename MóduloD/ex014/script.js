function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12)  {
        // Bom Dia
        img.src = 'imagens/Morning.jpg'
        document.body.style.background = '#BFB304'
        
    }
    else if (hora >= 12 && hora <= 18) {
        // Boa Tarde
        img.src = 'imagens/afternoon.jpg'
        document.body.style.background = '#F2B988'
    }
    else {
        // Boa Noite
        img.src = 'imagens/night2.jpg'
        document.body.style.background = '#142740'
    }
}

