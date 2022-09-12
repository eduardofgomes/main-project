$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo premio')
        
        $('.modal-body').load('src/premio/visao/form-premio.html', function(){
            $.ajax({
            dataType: 'json',
            type: 'POST',
            assync: true,
            url: 'src/promocao/modelo/all-promocao.php',
            success: function(dados){
                for(const result of dados){
                    $('#PROMOCAO_ID').append(`<option value="${result.ID}">${result.TITULO}</option>`)
                }
            }  
        })
    })

        $('.btn-save').show()
        $('.btn-save').attr('data-operation', 'insert')
        $('#modal-premio').modal('show')
        
    })

    $('.close, #close').click(function(e){
        e.preventDefault()
        $('#modal-premio').modal('hide')
    })
})