const colorBtn = document.getElementById('btn');
const bodyBcg = document.querySelector('body');
const container = document.getElementById('container');
const span = document.getElementById('rgb');




// colorBtn.addEventListener('click', changeColor);

// function changeColor() {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     bodyBcg.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b +')'; 
// }



colorBtn.addEventListener('click', getRgb);


function getRgb() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);


   bodyBcg.style.backgroundColor = 'rgb(' + r + ', ' + g + ',' + b + ')';
   span.textContent = 'rgb(' + r + ', ' + g + ',' + b + ')';
   

}