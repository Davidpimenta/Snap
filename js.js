function ativar(){
    const btn = document.getElementById('btn-menu')
    btn.classList.toggle('ativar')
    const navatc = document.querySelector('menu')
    navatc.classList.toggle('navatc')
    const Main = document.getElementById('main')
    Main.classList.toggle('maindown')
}

var ct = 0

const fact = document.querySelectorAll('.fopt')
const fopen = document.getElementById('fopen')

fopen.addEventListener('click', () => {
    
    const menuop = document.querySelector('.menuop')
    menuop.classList.toggle('menuopen')
    
    fact.forEach((e) =>{
        e.classList.toggle('foact')
    })

    
    
    const img = document.getElementById('img-seta')

    if(ct == 0){
        ct = 1
        img.src = 'Images/intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg'
    } else {
        ct = 0
        img.src = 'Images/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg'
    }
})

var ctc = 0
const company = document.getElementById('company')
const imgc = document.getElementById('imgc')
company.addEventListener('click', ()=>{

    const menuopc = document.querySelector('.menuc')
    menuopc.classList.toggle('menucop')
    
    var fc = document.querySelectorAll('.copt')
    fc.forEach((e) =>{
        e.classList.toggle('foact')
    })


    if(ctc == 0){
        ctc = 1
        imgc.src = 'Images/intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg'
    } else {
        ctc = 0
        imgc.src = 'Images/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg'
    }
})


