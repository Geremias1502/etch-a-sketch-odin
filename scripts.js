const div = document.getElementById("container");
const button = document.querySelector(".button-container");

let squaresPerSide; // Definirla fuera para que sea accesible

function askSquareAmount() {
    let input = prompt("How many squares you want in your grid? (Limit is 64x64)");
    let parsedInput = parseInt(input);

    if (!isNaN(parsedInput) && parsedInput > 0 && parsedInput <= 64) {
        squaresPerSide = parsedInput; // Asignar el valor a la variable global
    } else {
        alert("Please enter a valid number between 1 and 64.");
    }

    console.log(squaresPerSide);
    generateGrid(); // Llamamos a la función para actualizar la cuadrícula
}

button.addEventListener("click", askSquareAmount);

// Representa en píxeles el ancho del div#container + padding + border
const containerWidthFull = div.offsetWidth;
const containerCompPadding = window.getComputedStyle(div);
const containerPadding = parseInt(containerCompPadding.getPropertyValue("padding").slice(0, 2));
const containerBorder = parseInt(containerCompPadding.getPropertyValue("border"));

const containerWidth = containerWidthFull - (containerPadding * 2) - (containerBorder * 2);

function generateGrid() {
    div.innerHTML = ""; // Limpiar la cuadrícula antes de generar una nueva

    for (let totalSquares = 0; totalSquares < (squaresPerSide * squaresPerSide); totalSquares++) {
        // Crea y añade los cuadrados
        const gridDiv = document.createElement("div");
        gridDiv.classList.add('grid_square');
        div.appendChild(gridDiv);
        
        // Calcula y establece el ancho de cada cuadrado
        let gridDivWidth = containerWidth / squaresPerSide;
        gridDiv.setAttribute("style", `width:${gridDivWidth}px; height:${gridDivWidth}px`);

        // Permite que el mouse "pinte" el cuadrado
        gridDiv.addEventListener("mouseover", () => {
            gridDiv.style.backgroundColor = "lightblue";
        });
    }
}

// Llamar a generateGrid() inicialmente con el valor predeterminado
generateGrid();
