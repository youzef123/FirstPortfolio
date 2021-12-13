
// My name typing
let textType = document.querySelector('.typeing')
let textArray = textType.dataset.typeingtext.split("")
let typeCount = 0;

const cards = document.querySelectorAll('.card');

let autoTypeText = () => {
    if(typeCount < textType.dataset.typeingtext.length){
        textType.innerHTML += textType.dataset.typeingtext.charAt(typeCount)
        typeCount++
        textArray = textType.dataset.typeingtext.split("")
    }
}

setInterval(() => {
    autoTypeText()
},150)

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.navbar').addClass('sticky')
    } else{
        $('.navbar').removeClass('sticky')
    }
});

const ref = [...document.querySelectorAll(".scroll-footer")];
ref.map(link => {
    if (!link) return;
    link.addEventListener("click", e => {
      e.preventDefault();  
      window.scrollTo(0, 650);
    });
  });