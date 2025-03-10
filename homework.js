// Array splice

let my_list = [1, 2, 3, 4, 5]

let spliced_list = my_list.splice(1) // Lösche ab index 1 zwei Elemente

//console.log(my_list)
//console.log(spliced_list)


// Filter & Map -> Funktionen, die Funktionen als Parameter annehmen
my_list = [1, 2, 3, 4, 5, 6, 7, 8]
// Filter lässt nur jene Elemente im Array, die eine Bedingung (Prädikat/predicate)
// erfüllen (Bedingung == Funktion mit boolean return)

let filtered_list = my_list.filter((elem) => elem > 4)
let mapped_list = my_list.map((elem) => `<p>${elem}</p>`)

console.log(filtered_list)
console.log(mapped_list)

let stringMappedList = mapped_list.toString().replaceAll(",","")
console.log(stringMappedList)

// Aufgabe: 
// Schreibe eine Funktion createHTMLList(liste)
// Sie soll eine Javascript Liste annehmen und daraus einen HTML String für eine ungeordnete Liste (<ul>)basteln
// Bspw createHTMLList(["eins", "zwei"]) ==> "<ul> <li>eins</li> <li>zwei</li> </ul>"
function createHTMLList(liste){

    let htmlElements = liste.map((listItem) => `<li>${listItem}</li>`)
    //console.log(htmlElements)
    let flattenedList = htmlElements.join("")
    //console.log(flattenedList)
    let ergebnis = `<ul>${flattenedList}</ul>`
    return ergebnis
}

my_list = ["lukas", "Tom", "Kevin", "Suheib"]
console.log(createHTMLList(my_list))


let array1 = [1,2,3]
let array2 = ["Ich", "Du", "Wir"]

console.log(array1.concat(array2))