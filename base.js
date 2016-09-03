
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function checkEffect(item) {
  if (!item) {
    for (var i = 0; i < elems.length; i++) {
      elems[i].parentElement.setAttribute('class', 'NOFX grid__item');
    }
  }
  else {
    for (var i = 0; i < elems.length; i++) {
      elems[i].parentElement.setAttribute('class', item.value+" grid__item");
    }
  }
}
var elems = document.getElementsByClassName('grid__item__inside');
var perRow =15;
var rows = 10;
var elemSize = (document.getElementById("container").offsetWidth)/perRow;
for (var i = 0; i < rows; i++) {
  var row = document.createElement('div');
  row.setAttribute('class', 'row');
  document.getElementById("container").appendChild(row);
  row.style.height = elemSize+"px";
  for (var j = 0; j < perRow; j++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'grid__item');
    div.style.width = elemSize+"px";
    div.style.height = elemSize+"px";
    row.appendChild(div);
    var insideDiv = document.createElement('div');
    insideDiv.setAttribute('class', 'grid__item__inside');
    div.appendChild(insideDiv);
  }
}
checkEffect();
genGrid();

function genGrid() {
  for(var i = 0; i < elems.length; i++) {
      elems[i].style.backgroundColor = getRandomColor();
  }
  setTimeout(genGrid, 2000);
}
