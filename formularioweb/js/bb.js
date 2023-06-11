function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  function validarFormulario(event) {
    event.preventDefault();
  
    try {
      var nome = document.getElementById('nome').value;
      var id = document.getElementById('id').value;
      var tipoCliente = document.getElementById('tipoCliente').value;
      var endereco = document.getElementById('endereco').value;
      var cep = document.getElementById('cep').value;
      var dataNascimento = document.getElementById('dataNascimento').value;
      var vendedor = document.getElementById('vendedor').value;
      var limiteCredito = document.getElementById('limiteCredito').value;
  
      if (nome === '') {
        throw new Error('Nome é obrigatório');
      }

      if (nome === "<3"){
        throw new Error('Nome deve ter no mínimo 3 letras')
      }
  
      if (id === '') {
        throw new Error('ID é obrigatório');
      }
  
      if (tipoCliente === '') {
        throw new Error('Selecione um tipo de cliente');
      }
  
      if (endereco === '') {
        throw new Error('Endereço é obrigatório');
      }
  
      if (cep === '') {
        throw new Error('CEP é obrigatório');
      }
  
      if (dataNascimento === '') {
        throw new Error('Data de Nascimento é obrigatória');
      }
  
      if (vendedor === '') {
        throw new Error('Vendedor é obrigatório');
      }
  
      if (limiteCredito === '') {
        throw new Error('Limite de Crédito é obrigatório');
      }
  
      // Armazenar nome e ID em cookies
      setCookie('nome', nome, 7);
      setCookie('id', id, 7);
  
      alert('Cadastro realizado com sucesso!');
      document.getElementById('formulario').reset();
    } catch (error) {
      alert(error.message);
    }
  }
  
  document.getElementById('formulario').addEventListener('submit', validarFormulario);
  