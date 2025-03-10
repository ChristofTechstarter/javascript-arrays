// my_list soll auf der Website dargestellt werden
let my_list = []

// createHTMLList nimmt ein Javascript Array und gibt einen String für eine
// ungeordnete HTML Liste zurück
function createHTMLList(liste){

    let htmlElements = liste.map((listItem, listIndex) => `<li>${listItem}</li><button onclick="deleteItem(${listIndex})">Eintrag Löschen</button>`)
    //console.log(htmlElements)
    let flattenedList = htmlElements.join("")
    //console.log(flattenedList)
    let ergebnis = `<ul>${flattenedList}</ul>`
    return ergebnis
}

// setListContent setzt den Inhalt des "liste"-div auf das Ergebnis eines createHTMLList(my_list) Aufrufs
function setListContent(){
    let listDiv = document.getElementById("liste")
    let content = createHTMLList(my_list)
    listDiv.innerHTML = content
}

// setUserInputList liest das eingabefeld und rendered die liste daraus
// text = "Lukas, Christof, Mete, Wojciech"
function setUserInputList(){
    //Erstmal Text und div aus dem Dokument holen
    let userInput = document.getElementById("userInput")
    let text = userInput.value
    let textList = text.split(",")
    my_list = my_list.concat(textList)
    setListContent()
}

// Fügt den Beitrag aus dem 2. Textfeld der Liste hinzu
function setUserInputListSingle() {
    let userInput = document.getElementById("userInput2").value
    my_list.push(userInput)
    setListContent()
}

// löscht den Letzten Eintrag der Liste!

function deleteLastItem() {
    my_list.pop()
    setListContent()
}

// Löscht den erstellten Eintrag!

function deleteItem(index) {
    my_list.splice(index, 1)
    setListContent()
}


// Fügt allen <button> tags die klasse "deleteButton" hinzu

function changeButtonLayout() {
        document.querySelectorAll("button").forEach(button => {
        button.classList.add("deleteButton")})
}

// Entfernt die Klasse von allen Buttons

function changeButtonstoDefault() {
    document.querySelectorAll("button").forEach(button => {
        button.classList.remove("deleteButton")})
}