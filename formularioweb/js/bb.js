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
      var tipoCliente = document.getElementById('tipocliente').value;
      var endereco = document.getElementById('endereco').value;
      var cep = document.getElementById('cep').value;
      var dataNascimento = document.getElementById('datanascimento').value;
      var vendedor = document.getElementById('vendedor').value;
      var limitecredito = document.getElementById('limitecredito').value;
  
      if (nome === '' || nome.length < 3 || !/^[a-zA-Z]+$/.test(nome)) {
        throw new Error('Nome inválido!');
      }
        
      if (id === '' || id.length < 8) {
        throw new Error('ID inválido!');
      }
  
      if (tipoCliente === '') {
        throw new Error('Selecione um tipo de cliente!');
      }
  
      if (endereco === '') {
        throw new Error('Endereço é obrigatório!');
      }
  
      if (cep === ''|| cep.length < 8) {
        throw new Error('CEP inválido!');
      }
  
      if (dataNascimento === '') {
        throw new Error('Data de Nascimento é obrigatória!');
      }
  
      if (vendedor === '' || vendedor.length < 3 || !/^[a-zA-Z]+$/.test(vendedor)) {
        throw new Error('Nome de vendedor inválido!');
      }
  
      if (limitecredito === '') {
        throw new Error('Limite de crédito obrigatório!');
      }
  
      setCookie('nome', nome, 7);
      setCookie('id', id, 7);
  
      alert('Cadastro realizado com sucesso!');
      document.getElementById('formulario').reset();
    } catch (error) {
      alert(error.message);
    }
  }
  
  document.getElementById('formulario').addEventListener('submit', validarFormulario);
  