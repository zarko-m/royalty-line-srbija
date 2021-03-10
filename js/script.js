"use strict";

document.querySelector('.m-search').addEventListener("click", () => {
    document.querySelector('.mobile-search-active').style.display = 'block';
});

document.querySelector('.exit-search').addEventListener("click", () => {
    document.querySelector('.mobile-search-active').style.display = 'none';
});
