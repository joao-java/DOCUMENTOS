const modalViews = document.querySelectorAll('.service__modal'), modalBtns = document.querySelectorAll('.documento__descricao'), modalCloses = document.querySelectorAll('.services__modal-close'); 

let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener("click", ()=>{
        modal(i)
    }) 
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener("click", ()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove("active-modal")
        })
    })
})

// let section = document.querySelector("section")
// section.style="backdrop-filter: blur(2.5px);";


let h3 = document.querySelectorAll("h3").length, spanT = document.querySelector('.section__descricao span');
console.log(h3)
spanT.innerHTML= h3;