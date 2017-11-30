$("document").ready(function() {
  $("#form1").submit(function(event) {
    var name = $("input#name").val();
    var tel = $("input#tel").val();
    var email = $("input#email").val();

    $(".contacts").prepend("<p id='cName'>" + name + "</p>");
    $(".contacts").prepend("<p id='cTel'>" + tel + "</p>");
    $(".contacts").prepend("<p id='cEmail'>" + email + "</p>");
    $(".contacts").prepend("<hr>");

    $("#cTel").hide();
    $("#cEmail").hide();

    $("#cName").click(function() {
      $(this).prev().toggle();
      $(this).prev().prev().toggle();

    });

    event.preventDefault();
  });

});
