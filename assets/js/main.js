const  closeBtn = document.getElementById("close-icon");
const boxEl = document.querySelector(".box");
const openBtn = document.getElementById("circle")
closeBtn.addEventListener("click", () => {
boxEl.classList.remove("second-style")
})
openBtn.addEventListener('click' , () => {
    boxEl.classList.add("second-style")  
})