//EFEITO MAQUINA DE ESCREVER
const texto = queryS('.apresentation-content span h2')
function textoAnimado(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    
    textoArray.forEach((letra, i) => {
        setTimeout(()=> elemento.innerHTML += letra, 120 * i)})
}

//MUDANDO COR DO MENU NA ROLAGEM
const navbar = queryS('.top-content')
document.addEventListener("scroll", ()=> {
    const posicaoy = window.pageYOffset
    if (posicaoy > 0) {
        navbar.style.backgroundColor = "#000"
    }else{
        navbar.style.backgroundColor = ""
    }
    showCourseTop()
    animeteScroll()
})

//MOSTRANDO CURSOR TOPO
function showCourseTop(){
    const posicaoy = window.pageYOffset
    const courseTop = queryS('#course-move2')
    if(posicaoy < 650){
        courseTop.style.display = 'none'
    }else{
        courseTop.style.display = 'flex'
    }
}

//ANIMAÇÃO NO SCROLL
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animated'

function animeteScroll(){
    const posicaoy = window.pageYOffset + (window.innerHeight * 3) / 4
    target.forEach((e)=>{
        if (posicaoy > e.offsetTop){
            e.classList.add(animationClass)
        }
    })
}

//FUNÇÕES ATIVAS NO LOAD
textoAnimado(texto)
showCourseTop()