let wisdom = JSON.parse(localStorage.data) || []
let wisdomID = 1
$("#click").on("click", function () {
    let text = $("#my-input").val()
    $(".words").append("<p class=item id=" + wisdomID + ">(X)        " + text + "</p>")
    wisdom.push({ id: wisdomID, text: text })
    localStorage.data = JSON.stringify(wisdom)
    wisdomID++
})
let helperWisdom = []
for (let wis of wisdom) {
    $(".words").append("<p class=item id=" + wisdomID + ">(X)        " + wis.text + "</p>")
    helperWisdom.push({ id: wisdomID, text: wis.text })
    wisdomID++
}
wisdom = helperWisdom

$(document).ready(function () {
    $(".item").click(function (event) {
        let numOfID = event.target.id;
        console.log(numOfID)
        wisdom = wisdom.filter((item) => item.id !== parseInt(numOfID))
        console.log(wisdom)
        localStorage.data = JSON.stringify(wisdom)
    });
});
$(".words").on("click", ".item", function () {
    $(this).remove()
})
$("#clear").on("click", function () { localStorage.removeItem("data") })