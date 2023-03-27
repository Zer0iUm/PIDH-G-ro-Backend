window.addEventListener('load', function() {
    let btSacola = document.querySelectorAll('.sacola');
  
    for (i = 0; i < btSacola.length; i++) {
      btSacola[i].addEventListener('click', function() {
        alert('Item adicionado com sucesso!');
      }); 
 
    }
  });
