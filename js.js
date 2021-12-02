"use strict";

const settings ={
    rowsCount: 10,
    colsCount: 10,
    startX: 0,
    startY: 0,
    blackCellColor: 'black',
    nameCellY: ['1', '2', '3', '4', '5', '6', '7', '8'],
    nameCellX: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
}
const createChessDesk = () =>{
    const chessDesk = document.getElementById('chessDesk');
    console.log(chessDesk);
    this.cellElements = [];
    for (let row = 0; row < settings.rowsCount; row++){
    const trElem = document.createElement('tr');
    console.log(trElem);
    chessDesk.appendChild(trElem);
      for(let col = 0; col < settings.colsCount; col++){
          const cell = document.createElement('td');
          cellElements.push(cell);
          trElem.appendChild(cell);
      };
    };
};
createChessDesk();

for (let x = 1; x < settings.rowsCount; x++) {
    const cellX = document.querySelectorAll('td');
    cellX[x].textContent = settings.nameCellX[x - 1];
    cellX[x + settings.rowsCount * settings.colsCount - settings.rowsCount].textContent = settings.nameCellX[x - 1];
    for (let y = 1; y < settings.colsCount; y++) {
    const cellY = document.querySelectorAll('tr > td:first-child');
    cellY[y].textContent = settings.nameCellY[y - 1];
    const cellYend = document.querySelectorAll('tr > td:last-child');
    cellYend[y].textContent = settings.nameCellY[y - 1];
    };   
};
