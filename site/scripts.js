// ============== Header ==============

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active')  
}
btnMobile.addEventListener('click', toggleMenu)
document.querySelector('#menu ul')
  .addEventListener('click', function(){
    document
    .getElementById('nav')
    .classList.remove('active')
  })

// ============== Dom ==============

const cardsList = [
  {
    srcImg: "img/cssbank.png",
    alt: "Imagem CSS Bank",
    tag: "Design ui/ux",
    title: "CssBank",
    paragrath: "Landing page do CSS bank, um objeto de estudo de UI Design e CSS.",
    linkToBehance: "https://www.behance.net/gallery/121085303/CssBank"
  },
  {
    srcImg: "img/surfssa.png",
    alt: "Imagem SurfSSA",
    tag: "Design ui/ux",
    title: "SurfSsa",
    paragrath: "Projeto construído para a SurfSsa, empresa de surf na capital Baiana.",
    linkToBehance: "https://www.behance.net/gallery/119621147/Surf-Salvador"
  },
  {
    srcImg: "img/site-info.png",
    alt: "site Info Jr",
    tag: "Design ui/ux",
    title: "Info Jr UFBA",
    paragrath: "Projeto Construído para a Empresa Júnior de Informática da UFBA.",
    linkToBehance: "https://www.behance.net/gallery/119461079/Home-Info-Jr-UFBA"
  },
  {
    srcImg: "img/site-alfa.png",
    alt: "imagem site alfa",
    tag: "Design ui/ux",
    title: "Alfa Consultoria",
    paragrath: "Projeto construído para a Alfa de Consultoria Jurídica Júnior.",
    linkToBehance: "https://www.behance.net/gallery/119463801/Alfa-Consultoria-Jr"
  },
  {
    srcImg: "img/intranet-saltur.png",
    alt: "Imagem Intranet",
    tag: "html - css - js",
    title: "Intranet Saltur",
    paragrath: "Intranet construída para a SALTUR, estatal da Prefeitura de Salvador.",
    linkToBehance: "https://www.behance.net/gallery/119465505/Intranet-Saltur"
  },
  {
    srcImg: "img/rifar.png",
    alt: "Imagem Rifar",
    tag: "Design ui/ux",
    title: "Rifar.io",
    paragrath: "Plataforma de criação de rifas e de cadastro de clientes.",
    linkToBehance: "https://www.behance.net/gallery/121085019/Rifario"
  }
]

const DOM = {
  cardsContainer: document.querySelector('.cards'),

  addCardsToList(cardsList, index){
    const li = document.createElement('li')
    li.classList.add('cardPortfolio')
    li.innerHTML = DOM.innerHTMLCards(cardsList)    
    DOM.cardsContainer.appendChild(li)
  },
  innerHTMLCards(cardsList){
    const html = `
      <div class="img"><img src="${cardsList.srcImg}" alt="${cardsList.alt}"></div>
      <div class="text">
        <p class="tag">${cardsList.tag}</p>
        <h3>${cardsList.title}</h3>
        <p>${cardsList.paragrath}</p>
        <button><a href="${cardsList.linkToBehance}" target="_blank">Ver no behance</a><img src="img/arow.svg" alt=""></button>
      </div>
    `
    return html
  },
  domCleaner(){
    DOM.cardsContainer.innerHTML = ""
  },
  loudCards(){
    for(let i = 0; i < 3; i++){
      DOM.addCardsToList(cardsList[i])
    }
  },
  loudMoreCards(){
    let showAllCards = false
    const btnShowMore = document.querySelector('#my-portifolio .container button.full')
    btnShowMore.addEventListener('click', function(){
      if(showAllCards == false){
        DOM.domCleaner()
        cardsList.forEach(DOM.addCardsToList)
        btnShowMore.innerHTML = "Exibir menos projetos"
        showAllCards = true        
      }else{
        DOM.domCleaner()
        DOM.loudCards()
        btnShowMore.innerHTML = "Ver todos os projetos"
        showAllCards = false
      }
    })
  }

}

const App = {
  init(){
    DOM.loudCards()
    DOM.loudMoreCards()
  }
}

App.init()