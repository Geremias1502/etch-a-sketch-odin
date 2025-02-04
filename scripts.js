const div = document.getElementById("container")
const boxes = [document.querySelectorAll(".grid_square")]

for (let i = 0; i < 256; i++){
    const grid_div = document.createElement("div")
    grid_div.classList.add('grid_square')
    // grid_div.textContent = 'DIV'
    div.appendChild(grid_div)
    grid_div.addEventListener("mouseover", () => {
        alert('you made it!')
    })    
}