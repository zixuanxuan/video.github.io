$(function () {
    var contentHeight = $(window).height();
    // console.log(contentHeight);
    $(".list").height(contentHeight);
    $(".content").height(contentHeight);
    $(".list li").click(function () {
        $(".list li").css({
            background: "#f0f0f0"
        })
        $(this).css({
            background: "#36bac8"
        })
    });

    $("video").click(function () {

    })
})
