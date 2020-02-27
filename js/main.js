var nlist = document.getElementById("nlist");
var btnlist = document.getElementById("btn-list");
var navb = document.getElementById("navb");

$(window).scroll(function() {
  const $scrollTop = $(window).scrollTop();
  const $height = $(".header").height();
  if ($scrollTop >= $height - 60) {
    $("#navb").show();
  } else {
    $("#navb").hide();
  }
});

$("#btn-list").click(function() {
  $("#nlist").toggle();
  if (nlist.style.display === "block") {
    btnlist.innerHTML = "<i class='fas fa-times'></i>";
    $("body").css("overflow", "hidden");
  } else if (nlist.style.display === "none") {
    btnlist.innerHTML = "<i class='fas fa-bars'>";
    $("body").css("overflow", "auto");
  }
});

$(".nav-el").click(function() {
  $("#nlist").hide();
  btnlist.innerHTML = "<i class='fas fa-bars'>";
  $("body").css("overflow", "auto");
});

// // dialog
// $("#close-alertbox").click(function() {
//   $("#alertbox").hide();
//   $("body").css("overflow", "auto");
// });
// // email
// $("#email-form").submit(function(event) {
//   event.preventDefault();
//   $.post(
//     "http://saysu.washandrenov.com/email/index.php",
//     $("#email-form").serialize()
//   )
//     .done(function(data) {
//       if (data === "success") {
//         $("#alertbox").toggle();
//         $("#alertbox").css("background", "#CEFDBA");
//         $("body").css("overflow", "hidden");
//         $("#message-zone").text("Your message was sent successfuly");
//         $(":input", "#email-form")
//           .not(":button, :submit, :reset, :hidden")
//           .val("")
//           .prop("checked", false)
//           .prop("selected", false);
//       } else if (data === "fail") {
//         $("#alertbox").toggle();
//         $("#alertbox").css("background", "#FAE9E6");
//         $("body").css("overflow", "hidden");
//         $("#message-zone").text(
//           "Message cannot be sent, please verify your entries"
//         );
//       }
//     })
//     .fail(function() {
//       alert("Cannot connect to the server !");
//     });
// });
