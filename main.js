const shop=document.getElementById('shop');

const basket=[];

const arrayItems=[{
    id:'sdkjaskl',
    name:'Adidas',
    desc:'Jockey Mens 2 Pack Soft Knit Classic T-Shirt T Shirt, Black Space Dye',
    price:45,
    img:'products/f1.jpg'
},{
    id:'dsadflajklds',
    name:'Men T-shirt',
    desc:'Jockey Mens 2 Pack Soft Knit Classic T-Shirt T Shirt, Black Space Dye',
    price:100,
    img:"products/f2.jpg"
},{id:'cmkle',
    name:'sport shirt',
    desc:'Jockey Mens 2 Pack Soft Knit Classic T-Shirt T Shirt, Black Space Dye',
    price:55,
    img:"products/f3.jpg"},{
    id:'ej4llkmdkk',
    name:'Jockets',
    desc:'Jockey Mens 2 Pack Soft Knit Classic T-Shirt T Shirt, Black Space Dye',
    price:130,
    img:'products/f5.jpg'
    },
    {
        id:'dk3kl3l',
        name:'Adidas',
        desc:'Jockey Mens 2 Pack Soft Knit Classic T-Shirt T Shirt, Black Space Dye',
        price:45,
        img:'products/n1.jpg'
    },{
        id:'kdl3l3l',
        name:'Men T-shirt',
        desc:'Jockey Mens 2 Pack Soft Knit Classic T-Shirt T Shirt, Black Space Dye',
        price:100,
        img:"products/n2.jpg"
    },{id:'dkkel3',
        name:'sport shirt',
        desc:'Jockey Mens 2 Pack Soft Knit Classic T-Shirt T Shirt, Black Space Dye',
        price:55,
        img:"products/n3.jpg"},{
        id:'kdll23',
        name:'Jockets',
        desc:'Jockey Mens 2 Pack Soft Knit Classic T-Shirt T Shirt, Black Space Dye',
        price:130,
        img:'products/n4.jpg'
        }
]


let addItems=()=>{

    return (shop.innerHTML=arrayItems.map((x)=>{
        let {id,name,desc,price,img}=x;
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
                    0
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
    
   // console.log(basket)
    update(selectedItem.id)
}



let decrement=(id)=>{
    let selectedItem=id;
   let search=basket.find((x)=>x.id===selectedItem.id)
   if (search.count===0) return
   else{
    search.count -=1
   }
    
    //console.log(basket)    
   update(selectedItem.id)
}

let update=(id)=>{
    let search = basket.find((x)=>x.id===id)
   console.log(search.count)
   document.getElementById(id).innerHTML = search.count;
}

