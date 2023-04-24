
const categories = [...new Set(product.map((item)=>
    {return item}))]

    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(

            `<div class='box'>
                 <div class='img-box'>
                    <img class='images' src=${image}></img>
                 </div>
                <div class='bottm'
                    <p>${title}</p>
                    <h2>${price}.00</h2>`+
                    "<button onclick='addtocat("+(i++)+ ")'>Adicionar</button>"+
            `   </div>
            </div>`
        )
    }).join('')

    var cart = [];

    function addtocat(a){
        cart.push({...categories[a]});
        displeycart();
    }

    function displeycart(a){
        let j = 0;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Carrinho vazio"
        } else{
            document.getElementById('cartIte').innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                return(
                    `<div class='cart-item'>
                        <div class='row-img'>
                            <img class='rowimg' src=${image}></img>
                        </div>
                        <p style='font-size:12px;'>${title}</p>
                        <h2 style='font-size:15px;'>${price}.00</h2>`+
                        "<i class='fa-solid fa-trash' onclik='delElement("+(j++) +")'></i></div>"
                );
                  
            }).join('');
        }
    }