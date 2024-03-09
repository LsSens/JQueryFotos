$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const imgInput = $('#input-img')

        const novaLi = $(`<li style="display: none">`)
        conteudo =  `<img src="${imgInput.val()}">`
        conteudo += `<div class="overlay-imagem-link">`
        conteudo += `<a href="${imgInput.val()}" target="_blank">Clique para ver a imagem completa</a>`
        conteudo += `<button id="botao-excluir" onClick="excluirImagem(this)">Excluir</button>`
        conteudo += `</div>`
        conteudo += `</li>`

        $(conteudo).appendTo(novaLi)
        $(novaLi).appendTo('ul')
        $(novaLi).fadeIn()
        imgInput.val('')
    })
    
    $('form').on('reset', function(e){
        $('form').slideUp()
    })
})

function excluirImagem(e) {
    e.parentNode.parentNode.remove()
}