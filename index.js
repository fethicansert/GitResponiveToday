const button = document.querySelector('button');
const navResponsive = document.getElementById('nav-responsive');
const ulResponsive = document.getElementById('ulResponsive')
const toogledClass = document.getElementsByClassName('.nav-responsive.active');
let mediaQuery = window.matchMedia("(max-width: 800px)");
let isClose = true;




button.onclick = () => {
    navResponsive.classList.toggle('active');
    ulResponsive.classList.toggle('active');
   

 
// Kapanirken ve acilirken farki stylelar devreye girmeli....
// Acilirken
}

// if (mediaQuery.matches) {
//     navResponsive.style.transition = '400ms ease'
// }else{
//     navResponsive.style.transition = 'none';     
// }

mediaQuery.addEventListener('change', () => {
    // if (mediaQuery.matches) {
    //      setTimeout(() => {
    //         navResponsive.style.transition = '400ms ease';
    //      }, 50);
    // }else{
    //     navResponsive.style.transition = 'none';     
    // }
})