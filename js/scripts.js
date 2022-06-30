let searchForm = document.querySelector('.search-form');

// showing the search window when we click on search

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}