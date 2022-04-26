const appendGifs = function (gifs) {

    const shortGifs = []

    for (let i = 0; i < 5; i++) {
        shortGifs.push(gifs.data[i])
    }

    const urls = shortGifs.map(sg => sg.embed_url)

    const source = $("#gif-template").html()
    const template = Handlebars.compile(source)

    const newHTML = template({ urls })
    $(".gif").append(newHTML)
}


$(".gif").on("click", ".add", function () {

    $(".favorite-gifs").append(`<iframe src="${$(this).data().id}"></iframe>`)

})



const fetch = function (input) {
    $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`,
        success: appendGifs
    })
}



$("#submit").on("click", function () {


    let input = $("#yourgif").val()
    console.log(input)
    fetch(input)
})
let neruoscienceComputerBooks = []


const fetch = function (startIndex) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=intitle:neuroscience&startIndex=${startIndex}&maxResults=40`,
        success: function (data) {
            console.log(data)
            let book
            for (let j = 0; j < data.items.length; j++) {
                book = data.items[j]
                if (book.volumeInfo.categories) {
                    if (book.volumeInfo.categories.some(c => c === "Computers")) {
                        neruoscienceComputerBooks.push(book.volumeInfo.title)
                    }
                }


            }


            console.log(neruoscienceComputerBooks)
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
}


let startIndexArr = [0, 40, 120]
for (let i = 0; i < 3; i++) {
    console.log(i)
    fetch(startIndexArr[i])
}


console.log(neruoscienceComputerBooks)