$("#colors").on("click","span",function(){
    const color = $(this).data().color
    $(".box").css("background-color",color)
})