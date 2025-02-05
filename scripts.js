const div = document.getElementById("container");
const button = document.querySelector(".button-container")

function askSquareAmount() {
    answer = prompt("How many squares you want in your grid? (Limit is 64x64)")
    return answer
}

button.addEventListener("click", askSquareAmount);

// Represents in pixels the width of the div#container + padding + border
const containerWidthFull = div.offsetWidth;

// Both containerPadding and containingBorder are integer numbers
const containerCompPadding = window.getComputedStyle(div);
const containerPadding = parseInt(containerCompPadding.getPropertyValue("padding").slice(0,2));

const containerCompBorder = window.getComputedStyle(div);
const containerBorder = parseInt(containerCompPadding.getPropertyValue("border"));

// It gets multiplied by "both sides" of the width of a square. 
const containerWidth = containerWidthFull - (containerPadding * 2) - (containerBorder * 2);

let squaresPerSide = 30;

for (let totalSquares = 0; totalSquares < (squaresPerSide * squaresPerSide); totalSquares++){

    // Creates and adds the squares
    const gridDiv = document.createElement("div")
    gridDiv.classList.add('grid_square')
    div.appendChild(gridDiv)
    
    // Calculates and sets the width of each square
    gridDivWidth = containerWidth/squaresPerSide
    gridDiv.setAttribute("style", `width:${gridDivWidth}px`)

    // Lets the mouse "paint" the square
    gridDiv.addEventListener("mouseover", () => {
        gridDiv.style.backgroundColor = "lightblue";
    })    
}