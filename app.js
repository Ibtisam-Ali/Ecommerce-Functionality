const phones = [
    {
        Image:  src="./images/s20.jpg",
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000,
       
    },
    {
        Image:  src="./images/note 10.jpg",
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        Image:  src="./images/z10.jpg",
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        Image:  src="./images/spark 10.jpg",
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        Image:  src="./images/14.avif",
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        Image:  src="./images/f11.jpg",
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        Image:  src="./images/y20.jpg",
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        Image:  src="./images/a52.jpg",
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },
    {
        Image: src="./images/s3.webp",
        brand: 'Samsung',
        model: 's8',
        ram: 8,
        rom: 256,
        camera: '60 megapixel',
        price: 70000
    },

];

const arr = [];

const div = document.querySelector('#div2')


function  phoneRender() {
    for(let i = 0; i < phones.length; i++){
    
        div.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src="${phones[i].Image}">
      <h5 class="card-title">${phones[i].brand+' '+phones[i].model}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">RAM: ${phones[i].ram}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">ROM: ${phones[i].rom}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">Camera: ${phones[i].camera}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">Price: ${phones[i].price}</h6>
      
      <button onclick="addToCart(${i})" 
      class="btn btn-primary">Add to Cart</button>
    </div>
  </div>`
    }
    
};
phoneRender();


function addToCart(index) {
    // console.log('hello');
    if (arr.includes(phones[index])) {
        phones[index].quantity += 1;
        
    }else{
        phones[index].quantity = 1;
        arr.push(phones[index]);
    }
    console.log(arr);

};

function goToCart(){
    console.log('cart');
 localStorage.setItem('cartItems' , JSON.stringify(arr));
    window.location = 'cart.html';
}
console.log(localStorage.setItem);


{/* <div></div> */}
