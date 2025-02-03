const div = document.getElementById("container")
const boxes = document.querySelectorAll("div#container > div")

for (let i = 0; i < 256; i++){
    const grid_div = document.createElement("div")
    // grid_div.textContent = 'DIV'
    div.appendChild(grid_div)
}


div.addEventListener("mouseover", () => {
    alert('You made it!')
})