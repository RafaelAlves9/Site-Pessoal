//mudando conteúdo do portifólio

const queryS = (e) => document.querySelector(e)
queryS('.portifolio-todos').addEventListener('click', ()=>{
    if (queryS('.portifolio-todos').classList.contains('selectioned') == false){
        //adicionando class selectioned
        queryS('.portifolio-todos').classList.add('selectioned')
        queryS('.portifolio-javascript').classList.remove('selectioned')
        queryS('.portifolio-bootstrap').classList.remove('selectioned')
        queryS('.portifolio-html').classList.remove('selectioned')

        queryS('#javascript').style.display = 'block'
        queryS('#javascript1').style.display = 'block'
        queryS('#javascript2').style.display = 'block'
        queryS('#bootstrap').style.display = 'block'
        queryS('#html').style.display = 'block'
        queryS('#html1').style.display = 'block'
    }
})

queryS('.portifolio-html').addEventListener('click', ()=>{
    if (queryS('.portifolio-html').classList.contains('selectioned') == false){
        //adicionando class selectioned
        queryS('.portifolio-html').classList.add('selectioned')
        queryS('.portifolio-javascript').classList.remove('selectioned')
        queryS('.portifolio-bootstrap').classList.remove('selectioned')
        queryS('.portifolio-todos').classList.remove('selectioned')

        queryS('#javascript').style.display = 'none'
        queryS('#javascript1').style.display = 'none'
        queryS('#javascript2').style.display = 'none'
        queryS('#bootstrap').style.display = 'none'
        queryS('#html').style.display = 'block'
        queryS('#html1').style.display = 'block'
    }
})

queryS('.portifolio-bootstrap').addEventListener('click', ()=>{
    if (queryS('.portifolio-bootstrap').classList.contains('selectioned') == false){
        //adicionando class selectioned
        queryS('.portifolio-bootstrap').classList.add('selectioned')
        queryS('.portifolio-javascript').classList.remove('selectioned')
        queryS('.portifolio-html').classList.remove('selectioned')
        queryS('.portifolio-todos').classList.remove('selectioned')

        queryS('#javascript').style.display = 'none'
        queryS('#javascript1').style.display = 'none'
        queryS('#javascript2').style.display = 'none'
        queryS('#bootstrap').style.display = 'block'
        queryS('#html').style.display = 'none'
        queryS('#html1').style.display = 'none'
    }
})

queryS('.portifolio-javascript').addEventListener('click', ()=>{
    if (queryS('.portifolio-javascript').classList.contains('selectioned') == false){
        //adicionando class selectioned
        queryS('.portifolio-javascript').classList.add('selectioned')
        queryS('.portifolio-bootstrap').classList.remove('selectioned')
        queryS('.portifolio-html').classList.remove('selectioned')
        queryS('.portifolio-todos').classList.remove('selectioned')

        queryS('#javascript').style.display = 'block'
        queryS('#javascript1').style.display = 'block'
        queryS('#javascript2').style.display = 'block'
        queryS('#bootstrap').style.display = 'none'
        queryS('#html').style.display = 'none'
        queryS('#html1').style.display = 'none'
    }
})