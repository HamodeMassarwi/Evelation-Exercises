$("#items").on("click", ".item", function () {
    const text = $(this).text()
    const data = $(this).data().instock
    if (data) {
        const elem = `<div class=cart-item>${text}</div>`
        $("#cart").append(elem)
    }
})
$("#cart").on("click", ".cart-item", function () {
    $(this).remove()
})