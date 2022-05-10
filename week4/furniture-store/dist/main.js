let money = 500
const fetchItemData = function () {
    let input = $("#item-input").val()

    $.get(`items/${input}`, function (itemData) {
        $("body").append(`<div>${itemData.name} - ${itemData.price} - ${itemData.inventory}`)
    })
}
const buyItem = function () {
    let input = $('#buy-input').val()
    let price = 0
    $.get(`pricecheck/${input}`, function (item) {
        price = item.price
    })
    $.get(`buy/${input}`, function (item) {
        if (price <= money) {
            if (item.name != undefined) {
                $("body").append(`<div>Congratulations,
                You've Just Bought ${item.name} for ${item.price}
                There are ${item.inventory} left now in store</div>`)
                money -= price
                $("#money").text(`Money:${money}`)
            } else {
                $("body").append(`<div>Out Of Stock</div>`)
            }
        } else {
            $("body").append(`<div>Go Get A Job ! </div>`)
            $("#money").text(`Money:${money}`)
        }
    })

}
$("#money").text(`Money:${money}`)