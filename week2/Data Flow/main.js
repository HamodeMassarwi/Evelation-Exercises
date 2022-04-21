const posts =[
    {
        Name:"Hamode",
        text:"I Love Parties"
    },
    {
        Name:"Merry",
        text:"I Love Pizzaaas"
    }
]
let render = function(){
    for(let post of posts){
        const elem = `<div class=box>
                            <div>${post.Name} - ${post.text}</div>
                      </div>`
        $(".posts").append(elem)
    }
}
$("button").on("click",function(){
    const name =  $("#name").val()
    const text = $("#text").val()
    posts.push({Name:name, text:text})
    $(".posts").empty()
    render()
})
render()