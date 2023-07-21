$(document).ready(function () {
  $(".contact-form").each(function () {
    var formInstance = $(this);
    formInstance.submit(function (event) {
      event.preventDefault(); // Prevent the default form submission

      var action = formInstance.attr("action");

      $("#message").slideUp(750, function () {
        $("#message").hide();

        $("#submit")
          .after("<h4>The form was submitted successfully.</h4>")
          .attr("disabled", "disabled");

        $.post(
          action,
          {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            comments: $("#comments").val(),
          },
          function (data) {
            document.getElementById("message").innerHTML = data;
            $("#message").slideDown("slow");
            $(".contact-form img.loader").fadeOut("slow", function () {
              $(this).remove();
            });
            $("#submit").removeAttr("disabled");
          }
        );

        // Reset the form fields after successful submission
        formInstance[0].reset();
      });

      return false;
    });
  });
});
