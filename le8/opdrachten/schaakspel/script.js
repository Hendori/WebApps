var columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var rows = [8, 7, 6, 5, 4, 3, 2, 1];


function divWithClass(css) {
  return $(document.createElement("div")).addClass(css);
}
function createHeaderRow() {
  var headerRow = divWithClass("row").append(divWithClass("number"));
  columns.forEach(function(col) {
    headerRow.append(divWithClass("number").html(col));
  });
  $("#chessboard").append(headerRow);
}

/*
@function isEven
@desc     Geeft aan of een getal even is

@param    Integer een getal
@returns  Boolean true als het getal even is, anders false
 */
function isEven(value) {
  return (value%2 == 0);
}
/*
@function blackOrWhite
@desc     Geeft aan of een vakje wit of zwart moet worden

@param    rij: een getal uit [1..8]
@param    kolom:  een letter uit ['A'..'H']
@returns  "white" of "black"
 */
function blackOrWhite(row, column) {
  if (isEven(row) && (['A', 'C', 'E', 'G'].indexOf(column) > -1)) {
    return "white";
  }
  else if (!isEven(row) && (['A', 'C', 'E', 'G'].indexOf(column) == -1)) {
    return "white";
  }
  return "black";
}

function createRows() {
  rows.forEach(function(row) {
    var newRow = divWithClass("row").append(divWithClass("number").html(row));
    columns.forEach(function(column) {
      var square = divWithClass("square").attr("id", "row" + row + "col" + column).addClass(blackOrWhite(row, column));
      newRow.append(square);
    });
    $("#chessboard").append(newRow);
  });
  
}
function createPiece(piece) {
  return $(document.createElement("img")).attr("src", piece).attr("width", 50).attr("height", 50).attr("alt", piece);
}
function placePieces() {

}
function generateChessboard() {
  createHeaderRow();
  createRows();
  placePieces();
}

$(document).ready(function() {
	generateChessboard();
});
