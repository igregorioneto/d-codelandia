let i = setInterval(function () {
  clearInterval(i)

  document.getElementById('loading').style.display = 'none'
  document.getElementById('conteudo').style.display = 'block'

}, 2000)

let postagem = [
  {
    "data": "02 de julho, 2021",
    "titulo": "Agora é oficial: O Windows 11 está vindo",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien neque, pretium quis molestie at,tincidunt et velit. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
  {
    "data": "05 de agosto, 2021",
    "titulo": "Estilos com CSS",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien neque, pretium quis molestie at,tincidunt et velit."
  },
  {
    "data": "18 de agosto, 2021",
    "titulo": "Construindo site com HTML, CSS e Javascript",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien neque, pretium quis molestie at,tincidunt et velit. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  }
]

// Carregando elementos na tela do card das postagens
window.addEventListener('load', () => {

  let barraPesquisa = document.getElementById('barra-pesquisa')
  barraPesquisa.addEventListener('change', item => {
    postagem.forEach(itens => {
      if (item.data == itens.titulo) {
        console.log(itens)
      }
    })
  })

  postagem.forEach(itens => {

    let article = document.querySelector('.article-post')

    let cardPost = document.createElement('div')
    cardPost.classList.add('card-post')

    article.appendChild(cardPost)

    // criando div do cabeçalho da postagem
    let divPostHead = document.createElement('div')
    divPostHead.classList.add('post-head')

    // filhos da divPostHead
    let spanDate = document.createElement('span')
    spanDate.classList.add('date')
    // input e label divPostHead
    let spanLike = document.createElement('span')
    spanLike.classList.add('like')

    divPostHead.appendChild(spanDate)
    divPostHead.appendChild(spanLike)


    let inputLike = document.createElement('input')
    inputLike.setAttribute('type', 'checkbox')
    inputLike.setAttribute('id', 'like')
    let labelLike = document.createElement('label')
    labelLike.setAttribute('id', 'heart')

    spanLike.appendChild(inputLike)
    spanLike.appendChild(labelLike)


    let containerPost = document.createElement('div')
    containerPost.classList.add('container-post')
    let containerPostH2 = document.createElement('h2')
    let containerPostP = document.createElement('p')

    containerPost.appendChild(containerPostH2)
    containerPost.appendChild(containerPostP)

    cardPost.appendChild(divPostHead)
    cardPost.appendChild(containerPost)

    // Atribuindo valores a cada elemento
    spanDate.innerHTML = itens.data
    containerPostH2.innerHTML = itens.titulo
    containerPostP.innerHTML = itens.descricao
  })
})