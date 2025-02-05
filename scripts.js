const div = document.getElementById("container")
let containerWidth = 256

let squaresPerSide = 30

for (let totalSquares = 0; totalSquares < 900; totalSquares++){

    const gridDiv = document.createElement("div")
    gridDiv.classList.add('grid_square')
    div.appendChild(gridDiv)
    
    gridDiv_width = containerWidth/squaresPerSide
    console.log(gridDiv_width)
    gridDiv.setAttribute("style", `width:${gridDiv_width}px`)

    gridDiv.addEventListener("mouseover", () => {
        gridDiv.style.backgroundColor = "lightblue";
    })    
}