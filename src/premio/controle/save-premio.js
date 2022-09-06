$(document).ready(function() {

    $('.btn-save').click(function(e) {

        e.preventDefault();

        let dados = $('#form-premio').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/premio/modelo/save-premio.php',
            success: function(dados) {
                Swal.fire({
                    title: 'e-rifa',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-premio').modal('hide')
                $('#table-premio').DataTable().ajax.reload()
            }
        })
    })

})