var clickHandler = function (event) {
    console.log("Клик! " + event.pageX + " " + event.pageY);
};
$("body").click(clickHandler);
