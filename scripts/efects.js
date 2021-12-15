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
    if (posicaoy > 0) {
        navbar.style.backgroundColor = "#000"
    }else{
        navbar.style.backgroundColor = "transparent"
    }
    showCourseTop()
});

  //MOSTRANDO CURSOR TOPO
function showCourseTop(){
    const posicaoy = window.pageYOffset
    const courseTop = document.getElementById('#course-move2')
    if(posicaoy > 800){
        courseTop.style.display = 'flex'
    }else{
        courseTop.style.display = 'none'
    }
}