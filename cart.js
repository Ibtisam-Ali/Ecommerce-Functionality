console.log('cart items');

const cartItems = JSON.parse(localStorage.getItem('cartItems'));
// console.log(cartItems)

const div = document.querySelector('div');
let totalAmount = document.querySelector('#totalAmount')

function renderItems (){
    if(cartItems != null && cartItems.length > 0){
        for(let i = 0; i < cartItems.length; i++){
            console.log(cartItems[i]);
            div.innerHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
             <img src="${cartItems[i].Image}">
              <h5 class="card-title">${cartItems[i].brand+' '+cartItems[i].model}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">RAM: ${cartItems[i].ram}</h6>
              <h6 class="card-subtitle mb-2 text-body-secondary">ROM: ${cartItems[i].rom}</h6>
              <h6 class="card-subtitle mb-2 text-body-secondary">Camera: ${cartItems[i].camera}</h6>
              <h6 class="card-subtitle mb-2 text-body-secondary">Price: ${cartItems[i].price}</h6>
              <p class="card-text mt-2">Quantity : <button class='btn btn-danger' onclick='lessQuantity(${i})'>-</button>${cartItems[i].quantity} <button class='btn btn-danger' onclick='addQuantity(${i})'>+</button></p><br />
              
              <button onclick="reset(${i})" 
              class="btn btn-primary">Delete</button>

        
            </div>
          </div>`
        }
    }else{
        console.log('cart item empty ha maalik'




        


        )
        div.innerHTML = `
        <h3 class="text-center">No Item Found...</h3>
        `
    }
}

renderItems()




function reset(i) {
     cartItems.splice(i ,1)
     localStorage.setItem('cartItems', JSON.stringify(cartItems))
     location.reload()
     
   
};


function updatePrice() {
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++)
    totalPrice = totalPrice +(cartItems[i].price * cartItems[i].quantity)
   totalAmount.innerHTML = `Total Amount ${totalPrice}`
};
updatePrice()


function addQuantity(i) {
  cartItems[i].quantity += 1
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
  location.reload()
  updatePrice()
}



function lessQuantity(i) {
  if (cartItems[i].quantity === 1) {
      cartItems.splice(i, 1)
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      location.reload()
  } else {
      cartItems[i].quantity -= 1
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      location.reload()
      updatePrice()
  }
}

// localStorage.setItem('kis naam sa krwana ha' , 'value stringify wali');

// localStorage.getItem('kis item sa save krwaya ha');

// JSON.stringify()
// JSON.parse()