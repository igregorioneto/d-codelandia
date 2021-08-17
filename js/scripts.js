let i = setInterval(function () {
  clearInterval(i)

  document.getElementById('loading').style.display = 'none'
  document.getElementById('conteudo').style.display = 'block'

}, 2000)