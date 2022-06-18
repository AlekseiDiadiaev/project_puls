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
