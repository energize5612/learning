// variables for the functions
let sizeWidth = document.querySelector('#inputWidth').value;
let sizeHeight = document.querySelector('#inputHeight').value;
let removeButton = document.querySelector('#resetButton');

function makeGrid(sizeHeight, sizeWidth) {
    var grid = document.querySelector('#pixelCanvas');
    var sizePicker = document.querySelector('#sizePicker');
    // listen for the submit button and run function to set the sizeHeight and sizeWidth variable values according to the input values
    sizePicker.addEventListener('submit', function _submitEvent(submitEvent) {
        //get rid of the first cell
        grid.firstElementChild.remove();
        //stop the action error on page load
        submitEvent.preventDefault();
        makeGrid(document.querySelector('#inputHeight').value, document.querySelector('#inputWidth').value);
    },);
    // loop through cell insertions according to sizeWidth and sizeHeight variable values and insert colors on click
    for (let x = 0; x < sizeHeight; x++) {
        let row = grid.insertRow(x);
        for (let y = 0; y < sizeWidth; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener('click', function clickEvent() {
                cell.style.backgroundColor = document.getElementById('colorPicker').value;
                })
            }
        }
    }
// loop through the existing table and remove the color styling for the clear drawing button
removeButton.addEventListener('click', function _resetEvent(resetEvent){
    console.log('clear drawing click');
    var td = document.getElementsByTagName('td');
    for (var i = 0; i < td.length; i++) {
        var tdArray = [];
        tdArray.push(i);
        document.getElementsByTagName('td')[tdArray].removeAttribute('style');
}
    });
// execute the actual function 
makeGrid(sizeHeight, sizeWidth);



