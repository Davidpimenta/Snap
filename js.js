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

var ctd = 0
const deskopt = document.querySelector('.deskopt')
deskopt.addEventListener('click', ()=>{
    const optdesk = document.querySelector('.menu-desk-opts')
    optdesk.classList.toggle('deskon')
    const imgdesk = document.querySelector('.imgdesk')
    const optdeskf = document.querySelectorAll('.f')
    optdeskf.forEach((e)=>{
        e.classList.toggle('opt-desk-active')
    })

    if(ctd == 0){
        ctd = 1
        imgdesk.src = 'Images/intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg'
    } else {
        ctd = 0
        imgdesk.src = 'Images/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg'
    }
})


var ctdc = 0
const cdesk = document.getElementById('deskcompany')
const imgdeskC = document.getElementById('imgCD')
cdesk.addEventListener('click', ()=>{
    const optdeskC = document.getElementById('companydesk')
    optdeskC.classList.toggle('deskon')
    const optdeskc = document.querySelectorAll('.c')
    optdeskc.forEach((e)=>{
        e.classList.toggle('opt-desk-active')
    })
    if(ctdc == 0){
        ctdc = 1
        imgdeskC.src = 'Images/intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg'
    } else {
        ctdc = 0
        imgdeskC.src = 'Images/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg'
    }
})