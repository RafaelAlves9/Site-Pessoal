//EFEITO MAQUINA DE ESCREVER
const texto = queryS('.apresentation-content span h2')
function textoAnimado(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    
    textoArray.forEach((letra, i) => {
        setTimeout(()=> elemento.innerHTML += letra, 120 * i)})
}
textoAnimado(texto)

//MUDANDO COR DO MENU NA ROLAGEM
const navbar = queryS('.top-content')
document.addEventListener("scroll", ()=> {
    const posicaoy = window.pageYOffset
    showCourseTop()
    if (posicaoy > 0) {
        navbar.style.backgroundColor = "#000"
    }else{
        navbar.style.backgroundColor = "transparent"
    }
});

//MOSTRANDO CURSOR TOPO
function showCourseTop(){
    const posicaoy = window.pageYOffset
    const courseTop = queryS('#course-move2')
    if(posicaoy < 900){
        courseTop.style.display = 'none'
    }else{
        courseTop.style.display = 'flex'
    }
}