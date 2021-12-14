//EFEITO MAQUINA DE ESCREVER
const texto = document.querySelector('.apresentation-content span h2')
function textoAnimado(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    
    textoArray.forEach((letra, i) => {
        setTimeout(()=> elemento.innerHTML += letra, 120 * i)})
}
textoAnimado(texto)

