//  Name of the variables being used



const upArrow = document.querySelector(".itm2");

const downArrow = document.querySelector(".itm2-down")

const itemMsg = document.querySelector(".item2-msg");


// This is eventlistener trigger the up arrow
upArrow.addEventListener("click", ()=> {
  upArrow.style.display = "none"
  downArrow.style.display = "block"
  itemMsg.style.display = "none"

})


// This is eventlistener trigger the down arrow
downArrow.addEventListener("click", ()=> {
  upArrow.style.display = "block"
  downArrow.style.display = "none"
  itemMsg.style.display = "block"

})