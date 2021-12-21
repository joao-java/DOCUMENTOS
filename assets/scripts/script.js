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

//===================== ALERT =====================
let alerta = document.querySelector('.index__main .Armario_primeiro a'); 

console.log(alerta)

alerta.addEventListener('click', ()=>{
    alert("ESSE LADO NÃO TEM ARQUIVOS \nVOU DISPONIBILIZAR O CONTEUDO DE UMA FORMA DIFERENTE \n😀😉");
})



let h3 = document.querySelectorAll("h3").length, spanT = document.querySelector('.section__descricao span');
console.log(h3);
spanT.innerText= h3;