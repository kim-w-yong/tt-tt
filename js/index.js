$(document).ready(function () {



    for (var i = 0; i < 5; i++) {
        var ImgHtml = "<img src='img/img" + (i + 1) + ".png' style='width:100px;'>"
        $(".img-container").append(ImgHtml);
    }


})



$(function () {

    var $typing = $("#typing");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1000;

    var speed = 250;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});


$(function () {

    var $typing = $("#typing1");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1500;

    var speed = 150;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});

$(function () {

    var $typing = $("#typing2");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1250;

    var speed = 200;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});

$(function () {

    var $typing = $("#typing3");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1500;

    var speed = 220;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});

$(function () {

    var $typing = $("#typing4");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1000;

    var speed = 300;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});

$(function () {

    var $typing = $("#typing5");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1250;

    var speed = 200;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});


//메인텍스트는 여기까지
//메인텍스트는 여기까지
//메인텍스트는 여기까지
//메인텍스트는 여기까지



$(function () {

    var $typing = $("#typingA");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1500;

    var speed = 50;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});

$(function () {

    var $typing = $("#typingB");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1500;

    var speed = 50;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});


$(function () {

    var $typing = $("#typingC");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1500;

    var speed = 30;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});



$(function () {

    var $typing = $("#typingD");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1500;

    var speed = 30;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});


//서브텍스트는 여기까지
//서브텍스트는 여기까지
//서브텍스트는 여기까지
//서브텍스트는 여기까지


$(function () {

    var $typing = $("#typingE");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1100;

    var speed = 3;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});



$(function () {

    var $typing = $("#typingF");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1200;

    var speed = 3;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});




$(function () {

    var $typing = $("#typingG");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1200;

    var speed = 10;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});



$(function () {

    var $typing = $("#typingH");

    var text = $typing.text();

    $typing.html("");


    var chars = text.split("");


    chars.forEach(function (item) {
        item = (item == " ") ? "&nbsp" : item;

        $("<span></span>").html(item).appendTo($typing);
    });

    var $caret = $("<span></span>").attr("id", "caret").css({
        width: "0.4em",
    }).appendTo($typing);

    var delayStart = 1200;

    var speed = 10;

    $typing.children(":not(#caret)").hide().each(function (index) {
        var delay = delayStart + speed * index;

        $(this).delay(delay).show(10);
    });
});