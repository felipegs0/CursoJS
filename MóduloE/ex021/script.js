

function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
        
    } else if (num.value > 100) {
        window.alert('Digite um número menor, ou igual, a 100!')
    } else {
        let n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado!`
        tab.appendChild(item)
        n++
    }
}

/*
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
            */