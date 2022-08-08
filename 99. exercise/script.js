
//$("h2").text("Hello");

$(".panel").click(() => {
    console.log("clicked a div");
    console.log(this);
});

$("h2").click(function() {
    console.log(this);
  $(this).hide();
});

 console.log($(".panel")[0]);