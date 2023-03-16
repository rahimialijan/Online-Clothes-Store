const label=document.getElementById('label');
const shoppingCart=document.getElementById("shoping-cart");

console.log(arrayItems)
const basket=JSON.parse(localStorage.getItem('data')) || [];

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
         <img width="100" src="${search.img}" alt="">
         <div class="details">
            <div class="title-price-x">
            <h4><p>${search.name}</p></h4>
            <h4 class="cart-item-price">$ ${search.price}</h4>
            <i class="bi bi-x-lg"></i>
            
            </div>
            <div class="cart-button"></div>
            <h3></h3>
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