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

    $(".content li").click(function () {
        $(".container").hide();
        $(".video-page").show();
    })
    $(".return").click(function () {
        $(".container").show();
        $(".video-page").hide();
    })
    $(".video-list li").click(function () {
        $(".video-list li").children().css({
            color: "#000"
        })
        $(".video-list li").children("span").css({
            "background": 'url("image/videoListPlay@2x.png")',
            "background-size": "100% 100%"
        })
        $(this).children().css({
            color: "#36bac8"
        })
        $(this).children("span").css({
            "background": 'url("image/videoListStop@2x.png")',
            "background-size": "100% 100%"
        })
    })
})
