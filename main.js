"use strict";

const WOOL = "⬜️";
const FLAG = "🚩";
const BOOMS = "💣";
var gBoard;



const gLevel = {
  SIZE: 4,
  MINES: 2,
};

const gGame = {
  isOn: false,
  revealedCount: 0,
  markedCount: 0,
  secsPassed: 0,
};

function onInit() {
   
 gBoard = buildBoard(gBoard);
  renderBoard(gBoard);
}

function buildBoard() {
  var board =[];
  for (var i = 0; i < gLevel.SIZE; i++) {
    board.push([]) 
    for (var j = 0; j < gLevel.SIZE; j++) {
      board[i][j] = {
        minesAroundCount: 0,
        isRevealed: false,
        isMine: false,
        isMarked: false,
      };
   
    }
  }
  return board;

}

function renderBoard(board) {
  console.log(board);
  var strHTML = "<table><tbody>";

  for (var i = 0; i < board.length; i++) {
    strHTML += "<tr>";
    for (var j = 0; j < board[0].length; j++) {
      strHTML += `<td class="cell cell-${i}-${j}">${WOOL}</td>`;
    }
    strHTML += "</tr>";
  }
  strHTML += "</tbody></table>";

  document.querySelector(".board-container").innerHTML = strHTML;
  console.log(strHTML);
}
