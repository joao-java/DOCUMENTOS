const modalViews = document.querySelectorAll('.service__modal'), modalBtns = document.querySelectorAll('.documento__descricao'), modalCloses = document.querySelectorAll('.services__modal-close'); 

let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener("click", ()=>{
        modal(i)
    })
})

console.log(modalBtns);
console.log(modalViews);