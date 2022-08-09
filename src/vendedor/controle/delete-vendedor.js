$(document).ready(function() {

    $('#table-vendedor').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title: 'Rifadástico',
            text: "Deseja realmente excluir esse registro?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: ID,
                    url: 'src/vendedor/modelo/delete-vendedor.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Rifadástico',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-vendedor').DataTable().ajax.reload()
                    }
                })


            }
        })
    })
})