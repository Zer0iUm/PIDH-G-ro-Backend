window.addEventListener('load', function() {
    let btSacola = document.querySelectorAll('.sacola');
  
    for (i = 0; i < btSacola.length; i++) {
      btSacola[i].addEventListener('click', function() {
        alert('Item adicionado com sucesso!');
      }); 
    }
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', filterItems)
    })

    const filterItems = () => {
      const items = document.querySelectorAll('.item')
      const filters = document.querySelectorAll('input[type="checkbox"]:checked');

      items.forEach(item => {
        let shouldShow = true;

        filters.forEach(filter => {
          if(!item.classList.contains(filter.value)){
            shouldShow = false;
          }
        })
        if(shouldShow){
          item.style.display = 'block'
        }else{
          item.style.display = 'none'
        }
      })
    }


  });
