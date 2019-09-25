function eliminarCategoria(idForm, destino) {

    confirma = confirm("Deseja eliminar esta categoria?");

    if (confirma) {

        dadosForm = $('#' + idForm).serialize();

        $.ajax({

            method: 'post',
            url: destino,
            data: dadosForm,
            dataType: 'html',
            success: function (data) {
                //Ação de sucesso
                if (data == 'true') {
                    //$('#linha'+idForm).remove();
                    $('#linha' + idForm).fadeOut(1000);
                } else {
                    alert('Não foi possível eliminar a categoria!');
                }
            },
            error: function (argument) {
                alert('Erro ao eliminar categoria!');
            }

        });

    }

    return false;
}

/**
 * Mostra e esconde o título
 * */
function mostrarEsconderTitulo() {
    $('#titulo').fadeToggle(1000);
}

/**
 * Rotina para adicionar categorias
 * */
function adicionarCategoria(destino) {
    
        dadosForm = $('#formAdd').serialize();
        
        nomcat = $('#nomcat').val();
        
        $('#btnSalvar').attr('disabled','true');
        
        if (nomcat.trim() != "") {
        $.ajax({

            method: 'post',
            url: destino,
            data: dadosForm,
            dataType: 'html',
            success: function (data) {
               if (data == "true") {
                  
                    msg = 'Categoria adicionada com sucesso !';
                    $('#status').hide();
                    $('#status').html('<h4 class="sucesso">'+msg+'</h4>');
                    $('#status').fadeIn(800);
                    
                  
                   //Redireciona o usuário
                   //location.href='https://google.com';
                   
                   
                   
                   $('#nomcat').val('');
                   $('#nomcat').focus();
                   
                   //Destrava o botão 
                   $('#btnSalvar').removeAttr('disabled');
                   
               } else {
                   alert('Falha ao adicionar categoria !');
               }
            },
            error: function (argument) {
                alert('Erro ao eliminar categoria!');
                
                    msg = 'Erro ao eliminiar categoria !';
                    $('#status').hide();
                    $('#status').html('<h4 class="erro">'+msg+'</h4>');
                    $('#status').fadeIn(800);
                    
                     $('#btnSalvar').removeAttr('disabled');
            }

        });
        
    } else {
        alert("Preencha todos os campos!");
        
          $('#btnSalvar').removeAttr('disabled');
    }

    return false;
    
}

    
    function editarCategoria(destino) {


    dadosForm = $('#formEdit').serialize();
    nomcat = $('#nomcat').val();
    // $('#btnSalvar').attr('disabled', 'true');

        $.ajax({

            method: 'post',
            url: destino,
            data: dadosForm,
            dataType: 'html',
            success: function (data) {
                if (data == 'true') {
                    
                    msg = 'Categoria editada com sucesso!'
                    $('#status').hide();
                    $('#status').html('<h4 class="sucesso">'+msg+'</h4>');
                    $('#status').fadeIn(800);
                    
                    $('#nomcat').val('');
                    $('#nomcat').focus();
                    
                    $('#btnEditar').removeAttr('disabled', 'true');
                    //$('#caixa-status').addClass('sucesso');
                   // $('#caixa-status').fadeIn(300);
                   
                } else {
                    msg = 'Erro a editar categoria!'
                    $('#status').hide();
                    $('#status').html('<h4>'+msg+'</h4>');
                    $('#status').fadeIn(800);
                   // $('#caixa-status').addClass('falha').fadeIn(800);
                }

            },
            error: function (argument) {
                msg = 'Erro a editar categoria!'
                    $('#status').hide();
                    $('#status').html('<h4 class="erro">'+msg+'</h4>');
                    $('#status').fadeIn(800);
                     //$('#caixa-status').addClass('falha');
            }
        });
    $('#btnSalvar').attr('disabled', 'true');
    return false;
}
    
