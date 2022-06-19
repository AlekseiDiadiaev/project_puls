// Реализация табов
const elTab = document.querySelectorAll(".catalog__tab");
const elCatContent = document.querySelectorAll('.catalog__content');

elTab.forEach((item,i) =>{
    item.addEventListener('click', () =>{
        elTab.forEach(item =>{
            item.className =  "catalog__tab";
        });
        item.className =  "catalog__tab catalog__tab_active";
        
        elCatContent.forEach(item =>{
            item.className =  "catalog__content ";           
        });
        elCatContent[i].className ="catalog__content catalog__content_active";
    });
});


//Переключение вида карточки
const elMain = document.querySelectorAll(".catalog-item__link-main");
const elSecond = document.querySelectorAll(".catalog-item__link-second");

function main(i){
    elSecond[i].className = "catalog-item__second";
    elMain[i].className = "catalog-item__main";
}
function second(){
    elSecond[0].className = "catalog-item__second catalog-item__second_active";
    elMain[0].className = "catalog-item__main catalog-item__main_active";
}
elMain.forEach((item, i ) => {
    item.addEventListener('click', () => {
       const mainDivCard = item.parentElement;
       mainDivCard.className = "catalog-item__main catalog-item__main_active";
       mainDivCard.nextSibling.nextSibling.className = "catalog-item__second catalog-item__second_active"; 
    });
});

elSecond.forEach((item, i ) => {
    item.addEventListener('click', () => {
        const secondDivCard = item.parentElement;
        secondDivCard.className = "catalog-item__second";
        secondDivCard.previousSibling.previousSibling.className = "catalog-item__main"; 
     });
 });

// Модальные окна
 //Вызов окна консультаций
 document.querySelector('.button_header').onclick = getModalConsult;  
 document.querySelector('.button_main').onclick = getModalConsult; 

function getModalConsult () {
    document.querySelector('.overlay').className ="overlay overlay_active";
    document.querySelector('.modal_consult-hidden').className = "modal";
}
//Закрытие
document.querySelectorAll(".modal__close").forEach(item => {    
    item.addEventListener("click", () => {
        document.querySelector('.overlay').className ="overlay";
        document.querySelectorAll('.modal').forEach((item,i) =>{
            switch (i){
                case 0: 
                item.className = "modal modal_consult-hidden";
                break; 
                case 1: 
                item.className = "modal modal_buy-hidden";
                break; 
                case 2: 
                item.className = "modal modal_mini-hidden";
                break; 
            } 
        });
    }); 
});
//Купить
document.querySelectorAll(".button_catalog-item").forEach(item => {
    item.addEventListener('click', () => {
        const nameProduct  = item.parentNode.parentNode.querySelector('.catalog-item__subtitle').textContent;
        document.getElementById('modal__buy').querySelector('.modal__descr').textContent = nameProduct;
        document.querySelector('.overlay').className ="overlay overlay_active";
        document.querySelector('.modal_buy-hidden').className = "modal";
    });
}); 
//Вызов окна спасибо
document.querySelectorAll('.consultation__form').forEach(item =>{
    item.addEventListener('submit', () => {
        document.querySelector('.overlay').className ="overlay overlay_active";
        document.querySelector('.modal_consult-hidden').className = "modal modal_buy-hidden";
        document.querySelector('.modal_buy-hidden').className = "modal modal_buy-hidden";
        document.querySelector('.modal_mini-hidden').className = "modal";
    });
});