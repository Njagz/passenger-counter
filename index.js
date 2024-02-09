
// THE ONCLICK EVENT LISTENER
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById('save-el')

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let saveVar = count + " - ";
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += saveVar;
    // NB: Make sure to not delete the existing content of the paragraph
    
    //To ensure count resets after saving
    countEl.textContent = 0;
    count = 0;

}

