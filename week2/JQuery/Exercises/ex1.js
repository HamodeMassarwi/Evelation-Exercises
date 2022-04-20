$("button").click(function(){
    const content = $("#my-input").val()
    const elem = `<li>${content}</li>`
    $("ul").append(elem)
})
$("ul").on("click","li",function(){
    $(this).remove()
})