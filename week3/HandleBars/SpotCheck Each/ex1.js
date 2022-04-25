const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

let sourceONE = $("#animal-template").html()
let templateONE = Handlebars.compile(sourceONE);

let newHTML = templateONE({ animals: animals })
$(".menuONE").append(newHTML)

let sourceTWO = $("#languges-template").html()
let templateTWO = Handlebars.compile(sourceTWO);

let newHTMLT = templateTWO({ languages: languages })
$(".menuTWO").append(newHTMLT)



// Write a for loop here that loops through
// the items array, creates a template for each
// item, and appends it to the items div.
