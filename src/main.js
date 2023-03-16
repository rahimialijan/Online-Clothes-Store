const shop=document.getElementById('shop');

const basket=JSON.parse(localStorage.getItem('data')) || [];




let addItems=()=>{

    return (shop.innerHTML=arrayItems.map((x)=>{
        let {id,name,desc,price,img}=x;
        let search=basket.find((x)=>x.id===id) || [];
        return `
        <div  id="product-id-${id}" class="item">
            <img src="${img}" alt="">
            <div class="details">
                <h3>${name}</h3>
            <p>${desc}</p>
            <div class="star">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
            </div>
            <div class="amount-quintity">
                <h3>$${price}</h3>
                <div class="quintity">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity-count">
                    ${search.count===undefined? 0: search.count}
                    </div>
                    <i onclick="increment(${id})"  class="bi bi-plus-lg"></i>
                </div>
            </div>
            </div>
        </div>
        `
    }).join(""))
}
addItems()




let decrement=(id)=>{
    let selectedItem=id;
   let search=basket.find((x)=>x.id===selectedItem.id);

    if (search===undefined)return

   else if (search.count===0) return
   else{
    search.count -=1
   }
   
    //console.log(basket)   
  
   
   update(selectedItem.id)
   
   localStorage.setItem("data", JSON.stringify(basket.filter((x)=>x.count!==0)))
}
let increment=(id)=>{
    let selectedItem=id;
   let search=basket.find((x)=>x.id===selectedItem.id)
   if (search===undefined){
    basket.push({
        id:selectedItem.id,
        count:1,
    })
   }else{
    search.count +=1
   }
    
   localStorage.setItem("data", JSON.stringify(basket))
   // console.log(basket)
    update(selectedItem.id)
}

let update=(id)=>{
    let search = basket.find((x)=>x.id===id)
   console.log(search.count)
   document.getElementById(id).innerHTML = search.count;
   calculation()
}

let calculation=(id)=>{
    const CartIcon= document.getElementById('cart-amount');
    CartIcon.innerHTML=basket.map((x)=>x.count).reduce((x,y)=>x+y ,0);
}
calculation()