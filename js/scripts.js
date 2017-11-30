$("document").ready(function() {
  $("#form1").submit(function(event) {
    var name = $("input#name").val();
    var tel = $("input#tel").val();
    var email = $("input#email").val();

    $(".contacts").append("<p id='cName'>" + name + "</p>");
    $(".contacts").append("<p id='cTel'>" + tel + "</p>");
    $(".contacts").append("<p id='cEmail'>" + email + "</p>");
    $(".contacts").append("<hr>");

    $("p#cTel").hide();
    $("p#cEmail").hide();

    $("p#cName").click(function() {
      $(this).next().toggle();
      $(this).next().next().toggle();

    });

    event.preventDefault();
  });

});
