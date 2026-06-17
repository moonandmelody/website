window.addEventListener('scroll',()=>{
const nav=document.querySelector('.navbar');
nav.style.boxShadow = window.scrollY>50 ? '0 4px 20px rgba(0,0,0,.08)' : 'none';
});