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

  table.addEventListener('click', function(et) {
    const t = et.target;
    t.style.backgroundColor = document.getElementById('colorPicker').value;
  }) // this adds an event listener to the table. Then, if a cell is clicked,
} // it fills in the background color of the designated cell.


function pixelArt() {
  const submit = document.getElementsByTagName('input')[2];
  document.addEventListener('submit', function(evt) {
    event.preventDefault();
    makeGrid(evt);
    var timesClicked = 0;
    submit.addEventListener('click', function() {
      timesClicked++;
      if (timesClicked >= 1) {
        window.location.reload(true);
      } else {
        return
      }
    })
  })
}

pixelArt();
/* runs makeGrid() function, and adds an event listener to 'submit',
which runs a loop after 'submit' is clicked, after the loop it runs the
colorCells() function, which marks the table for event listener that
changes background-color. */
