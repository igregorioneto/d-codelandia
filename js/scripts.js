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

let post = document.querySelector('.card-post')
let data = document.querySelector('.date')
let informacao_post = document.querySelector('.container-post')

for (let p of postagem) {
  console.log(p)
}