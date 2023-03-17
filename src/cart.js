const label=document.getElementById('label');
const shoppingCart=document.getElementById("shoping-cart");


let basket=JSON.parse(localStorage.getItem('data')) || [];

let calculation=(id)=>{
    const CartIcon= document.getElementById('cart-amount');
    CartIcon.innerHTML= basket.map((x)=>x.count).reduce((x,y)=>x+y, 0)
}
calculation()


let generatCartItem =()=>{

    if(basket.length!==0){
        return (shoppingCart.innerHTML=basket.map((x)=>{
            let {id, count}=x;
           let search=arrayItems.find((y)=>y.id===id) || []
         return ` <div class="cart-item">
         <img class="small-img" width="100" src="${search.img}" alt="">
         <div class="details">
            <div class="title-price-x">
                <h4><p>${search.name}</p></h4>
                <h4 class="cart-item-price">$ ${search.price}</h4>
                <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>
            
            <div id="cart-button" class="quintity">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity-count">${count}</div>
                <i onclick="increment(${id})"  class="bi bi-plus-lg"></i>
             </div>
            <h3 class="total-amount">${count * search.price}</h3>
         </div>
        
         </div>`;

        }).join(''))
    }
    else{
        shoppingCart.innerHTML=``  
        label.innerHTML=`
        <h2>Cart is Empty</h2>
        <a href="index.html">
        <button class="HomeBtn">Back to home</button>
        </a>
        
        `
    }
}
generatCartItem()

let decrement=(id)=>{
    let abc;
    let selectedItem=id;
   let search=basket.find((x)=>x.id===selectedItem.id);

    if (search===undefined)return
   
   else if (search.count===0) return
   else{
    search.count -=1
   }
   
    //console.log(basket)   
   
    update(selectedItem.id) 
    basket=basket.filter((x)=>x.count!==0) ;
    generatCartItem()
    localStorage.setItem("data", JSON.stringify(basket)); 
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
   generatCartItem()
    update(selectedItem.id)
   localStorage.setItem("data", JSON.stringify(basket))
  
}

let update=(id)=>{
    let search = basket.find((x)=>x.id===id)
   console.log(search.count)
   document.getElementById(id).innerHTML = search.count;
   calculation()
   TotalAmount()
}

let removeItem=(id)=>{
    let selectedItem=id;
    basket=basket.filter((x)=>x.id!==selectedItem.id)
    generatCartItem()
    TotalAmount()
    calculation()
    localStorage.setItem("data", JSON.stringify(basket))
}

let clearCart=()=>{
    basket=[];
    generatCartItem();
    calculation()
    localStorage.setItem("data", JSON.stringify(basket))
}

let TotalAmount=(id)=>{
    if (basket.length!==0){
        let Amount=basket.map((x)=>{
            let {count, id}=x;
            let search=arrayItems.find((y)=>y.id===id) || [];

            return count * search.price;
        }).reduce((x,y)=>x+y, 0);
        label.innerHTML=`
        <h2> Total Amount:$${Amount}</h2>
        <button class="checkout">Check Out</button>
        <button onclick="clearCart()" class="removeAll">Remove All</button>
        `;
    }
    else return;
}
TotalAmount()