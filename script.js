//mudando conteúdo do portifólio
document.querySelector('.portifolio-todos').addEventListener('click', ()=>{
    if (document.querySelector('.portifolio-todos').classList.contains('selectioned') == false){
        //adicionando class selectioned
        document.querySelector('.portifolio-todos').classList.add('selectioned')
        document.querySelector('.portifolio-javascript').classList.remove('selectioned')
        document.querySelector('.portifolio-bootstrap').classList.remove('selectioned')
        document.querySelector('.portifolio-html').classList.remove('selectioned')

        document.querySelector('#javascript').style.display = 'block'
        document.querySelector('#javascript1').style.display = 'block'
        document.querySelector('#javascript2').style.display = 'block'
        document.querySelector('#bootstrap').style.display = 'block'
        document.querySelector('#html').style.display = 'block'
        document.querySelector('#html1').style.display = 'block'
    }
})

document.querySelector('.portifolio-html').addEventListener('click', ()=>{
    if (document.querySelector('.portifolio-html').classList.contains('selectioned') == false){
        //adicionando class selectioned
        document.querySelector('.portifolio-html').classList.add('selectioned')
        document.querySelector('.portifolio-javascript').classList.remove('selectioned')
        document.querySelector('.portifolio-bootstrap').classList.remove('selectioned')
        document.querySelector('.portifolio-todos').classList.remove('selectioned')

        document.querySelector('#javascript').style.display = 'none'
        document.querySelector('#javascript1').style.display = 'none'
        document.querySelector('#javascript2').style.display = 'none'
        document.querySelector('#bootstrap').style.display = 'none'
        document.querySelector('#html').style.display = 'block'
        document.querySelector('#html1').style.display = 'block'
    }
})

document.querySelector('.portifolio-bootstrap').addEventListener('click', ()=>{
    if (document.querySelector('.portifolio-bootstrap').classList.contains('selectioned') == false){
        //adicionando class selectioned
        document.querySelector('.portifolio-bootstrap').classList.add('selectioned')
        document.querySelector('.portifolio-javascript').classList.remove('selectioned')
        document.querySelector('.portifolio-html').classList.remove('selectioned')
        document.querySelector('.portifolio-todos').classList.remove('selectioned')

        document.querySelector('#javascript').style.display = 'none'
        document.querySelector('#javascript1').style.display = 'none'
        document.querySelector('#javascript2').style.display = 'none'
        document.querySelector('#bootstrap').style.display = 'block'
        document.querySelector('#html').style.display = 'none'
        document.querySelector('#html1').style.display = 'none'
    }
})

document.querySelector('.portifolio-javascript').addEventListener('click', ()=>{
    if (document.querySelector('.portifolio-javascript').classList.contains('selectioned') == false){
        //adicionando class selectioned
        document.querySelector('.portifolio-javascript').classList.add('selectioned')
        document.querySelector('.portifolio-bootstrap').classList.remove('selectioned')
        document.querySelector('.portifolio-html').classList.remove('selectioned')
        document.querySelector('.portifolio-todos').classList.remove('selectioned')

        document.querySelector('#javascript').style.display = 'block'
        document.querySelector('#javascript1').style.display = 'block'
        document.querySelector('#javascript2').style.display = 'block'
        document.querySelector('#bootstrap').style.display = 'none'
        document.querySelector('#html').style.display = 'none'
        document.querySelector('#html1').style.display = 'none'
    }
})