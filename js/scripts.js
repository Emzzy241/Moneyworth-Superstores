let searchForm = document.querySelector('.search-form');

// showing the search window when we click on search

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active'); 
}


let shoppingCart = document.querySelector('.shopping-cart');

// showing the shopping cart window when we click on search

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active'); 
} 


// showing the login window when we click on search


let loginForm = document.querySelector('.login-form');


document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active'); 
} 