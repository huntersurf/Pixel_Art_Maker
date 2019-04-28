function makeGrid(evt) {
  var canvas = document.getElementById("pixelCanvas");
  var gHeight = document.getElementById("inputHeight").value;
  var gWidth = document.getElementById("inputWidth").value;

  for (i = 0; i < gWidth; i++) {
    row = canvas.insertRow();
    for (x = 0; x < gHeight; x++) {
      row.insertCell();
    } /* Make a row to the user's choice, every row then makes all columns. */
  }
  colorCells();
};


function colorCells() {
  var table = document.querySelector('#pixelCanvas');
  var cells = table.getElementsByClassName('colored');

  table.addEventListener('click', function(et) {
    var t = et.target;

    if (t.tagName !== 'TD') {
      return
    }
    if (cells.length) {
      cells.className = '';
    }
    t.className = 'selected'
    t.style.backgroundColor = document.getElementById('colorPicker').value;
  }) // this adds an event listener to the table. If a cell is not under the
} // class 'selected', once it is clicked, it's delegated as the cell of the
// event target, and its class is changed to 'selected'. Anything in that
// class has a background-color of the users choice.
function pixelArt() {
  document.addEventListener('submit', function(evt) {
    event.preventDefault();
    makeGrid(evt);
  })
}


pixelArt();
// runs makeGrid() function, and adds an event listener to 'submit',
// which runs a loop after 'submit' is clicked, after the loop it runs the
// colorCells() function, which marks the table for event listener that
// changes background-color.
