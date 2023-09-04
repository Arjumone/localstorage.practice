const addProduct=()=>{
    const productField = document.getElementById('product-name')
    const product =productField.value;
    productField.value='';
    const productQuantity = document.getElementById('product-quantity')
    const quantity=productQuantity.value;
    productQuantity.value='';
    console.log(product,quantity) 
    displayProduct(product,quantity)
    saveProductLocalStorage(product,quantity)
}
const displayProduct = (product,quantity)=>{
    const ul =document.getElementById('product-container')
    const li= document.createElement('li')
    li.innerText=`${product}:${quantity}`
    ul.appendChild(li)
}
const getStoreShoppingCart = ()=>{
    const storeCart = localStorage.getItem('cart');
    let cart = {}
    if(storeCart){
        cart= JSON.parse(storeCart)
    }
    return cart
}
const saveProductLocalStorage = (product,quantity)=>{
    const cart = getStoreShoppingCart()
    cart[product] =quantity;
    const carStringify  = JSON.stringify(cart)
    // console.log(carStringify);
    localStorage.setItem('cart',carStringify)
}
const displayProductFromLocalStorage = ()=>{
    const saveCart = getStoreShoppingCart()
    console.log(saveCart);
    for(const product of saveCart){
        const quantity = saveCart[product]
        console.log(product,quantity);
        displayProduct(product,quantity)
    }
}
displayProductFromLocalStorage()