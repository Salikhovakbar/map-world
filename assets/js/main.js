const  closeBtn = document.getElementById("close-icon");
const boxEl = document.querySelector(".box");
const openBtn = document.getElementById("circle")
closeBtn.addEventListener("click", () => {
boxEl.classList.remove("second-style")
})
openBtn.addEventListener('click' , () => {
    boxEl.classList.add("second-style")  
})
const boxElTwo = document.querySelector(".light-circle-box")

const mainLightBox = document.querySelector(".light-box");
boxElTwo.addEventListener('click', () => {
    
    if(document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black"
    }
    else{
        document.body.style.backgroundColor = "white"
    }
    if(mainLightBox.style.backgroundColor === "white"){
        mainLightBox.style.backgroundColor = "green"
    }
    else{
        mainLightBox.style.backgroundColor = "white"
    }
    localStorage.setItem("backgroundColor", boxElTwo.classList.toggle("move-style") )
})