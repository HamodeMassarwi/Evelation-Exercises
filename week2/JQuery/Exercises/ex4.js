$("#items").on("click",".item",function(){
    const text = $(this).text()
    const data = $(this).data().instock
    if(data){
    const elem = `<div class=cart-item>${text}</div>`
    $("#items").append(elem)
    }
})
$("#items").on("click",".cart-item",function(){
    $(this).remove()
})