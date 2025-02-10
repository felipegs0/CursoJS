function calc() {
    var txta = document.getElementById('num-a')
    var txtb = document.getElementById('num-b')
    var txtc = document.getElementById('num-c')
    var na = Number(txta.value)
    var nb = Number(txtb.value)
    var nc = Number(txtc.value)
    var c1 = nb**2
    var c2 = - 4*na*nc
    var delta = c1 + c2
    var rdelta = Number(Math.sqrt(delta)).toFixed(1)

    res.innerHTML = `
    Resultado: <br> <br>
    B² - 4.a.c <br>  <br>
    ${nb}² - 4.${na}.${nc} <br> <br>
    ${c1} - 4.${na}.${nc} <br> <br>
    ${c1} + ${c2} <br> <br>
    ${delta} <br> <br>

    Delta = ${delta} <br> <br>
    Raiz de Delta = ${rdelta}

    `            

    if (delta < 0) {
        res.innerHTML += `<br> <br> <span style="color: #d64242;">Seu Delta é menor, ou igual a zero, seu cálculo acaba aqui.</span>`
    }
    else {
        res.innerHTML += `<br> <br> <span style="color: #2e8b57;">Seu Delta é maior que zero, seu cálculo continuará.</span> 
        ` 
        
    }
}

