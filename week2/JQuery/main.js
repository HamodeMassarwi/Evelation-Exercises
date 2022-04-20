$("button").click(function(){
    const elem = `<div class="blog">${text}</div>`
    $("#blogs").append(elem)
})
let text = "Click again for another element"
$("#blogs").on("click", ".blog", function(){
    $(this).text("nooo")
})