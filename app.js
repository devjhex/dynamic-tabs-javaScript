let tabs = document.querySelectorAll(".tab");
let tabsContainer = document.querySelector(".tabsContainer");
const viewArea = document.querySelector(".viewArea");
let inputs = document.querySelectorAll('label');


window.addEventListener("DOMContentLoaded",moveIndicator);


function moveIndicator(){

//Add the data attributes first
for (let index = 0; index < inputs.length; index++) {
    inputs[index].setAttribute('data-num', index); 
 }

//Immediately put the indicator in position of the first element.
tabsContainer.style.setProperty('--_left', tabs[0].parentElement.offsetLeft + "px");

tabs.forEach(btn=>{
    btn.addEventListener("click",(event)=>{
        let newTabPos = event.currentTarget.parentElement.offsetLeft;
        let setId = parseInt(event.currentTarget.querySelector('label').dataset.num);

        //Add margin to the viewArea so as to view current Page.
        addMargin(viewArea, setId);

        tabsContainer.style.setProperty('--_left', newTabPos + "px");
    })
 })
}


function addMargin(element, setId){
    element.style.setProperty('margin-left', setId * -100 + "%" );
}