$(".emailz").hide();
$(".introduction").hide();
$(".experient").hide();
$(".hlome").hide();

$(".about").click(function() {
    $(".introduction").show();
    $(".hlome").show();
    $(".emailz").hide();
});

$(".home").click(function() {
    $(".introduction").hide();
    $(".hlome").hide();
    $(".emailz").hide();
    });

$(".contact").click(function() {
    $(".introduction").hide();
    $(".emailz").show();
    $(".hlome").show();
});

$(".aboute").click(function() {
  $(".hlome").show();
  $(".introduction").hide();
   $(".emailz").hide();
  $(".resumett").show();