// $(document).ready(function () {
//   $(".contact-form").each(function () {
//     var formInstance = $(this);
//     formInstance.submit(function (event) {
//       event.preventDefault(); // Prevent the default form submission

//       var action = formInstance.attr("action");

//       $("#message").slideUp(750, function () {
//         $("#message").hide();

//         $("#submit")
//           .after("<h4>The form was submitted successfully.</h4>")
//           .attr("disabled", "disabled");

//         $.post(
//           action,
//           {
//             name: $("#name").val(),
//             email: $("#email").val(),
//             phone: $("#phone").val(),
//             comments: $("#comments").val(),
//           },
//           function (data) {
//             document.getElementById("message").innerHTML = data;
//             $("#message").slideDown("slow");
//             $(".contact-form img.loader").fadeOut("slow", function () {
//               $(this).remove();
//             });
//             $("#submit").removeAttr("disabled");
//           }
//         );

//         // Reset the form fields after successful submission
//         formInstance[0].reset();
//       });

//       return false;
//     });
//   });
// });

// $(document).ready(function () {
//   $(".contact-form").each(function () {
//     var formInstance = $(this);
//     formInstance.submit(function (event) {
//       event.preventDefault(); // Prevent the default form submission

//       var action = formInstance.attr("action");

//       $("#message").slideUp(750, function () {
//         $("#message").hide();

//         $("#submit")
//           .after("<h4>The form was submitted successfully. Thank you!</h4>")
//           .attr("disabled", "disabled");

//         $.post(
//           action,
//           {
//             name: $("#name").val(),
//             email: $("#email").val(),
//             phone: $("#phone").val(),
//             comments: $("#comments").val(),
//           },
//           function (data) {
//             document.getElementById("message").innerHTML = data;
//             $("#message").slideDown("slow");
//             $(".contact-form img.loader").fadeOut("slow", function () {
//               $(this).remove();
//             });
//             $("#submit").removeAttr("disabled");

//             // Reset the form fields after successful submission
//             formInstance[0].reset();
//           }
//         );

//         // Reload the page after 5 seconds
//         setTimeout(function () {
//           location.reload();
//         }, 800);
//       });

//       return false;
//     });
//   });
// });

// {
/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
  $(document).ready(function () {
    $(".contact-form").submit(function (event) {
      event.preventDefault(); // Prevent the default form submission

      var formInstance = $(this);
      var action = formInstance.attr("action");

      $("#message").slideUp(750, function () {
        $("#message").hide();

        $.post(
          action,
          {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            comments: $("#comments").val(),
          },
          function (data) {
            $("#message").html(data);
            $("#message").slideDown("slow");
            $(".contact-form img.loader").fadeOut("slow", function () {
              $(this).remove();
            });

            // Reset the form fields after successful submission
            resetFormFields();
          }
        );

        $("#submit")
          .after("<h4 class='thank-you-msg'>The form was submitted successfully. Thank you!</h4>")
          .attr("disabled", "disabled");
      });
    });

    // Function to reset the form fields and remove the "Thank you" message
    function resetFormFields() {
      $(".contact-form")[0].reset();
      var thankYouMsg = $(".thank-you-msg");
      if (thankYouMsg) {
        thankYouMsg.remove();

        // Remove the "Thank you" message after 5 seconds
        setTimeout(function () {
          var thankYouMsg = $(".thank-you-msg");
          if (thankYouMsg) {
            thankYouMsg.remove();
          }
        }, 5000);
      }
      $("#submit").removeAttr("disabled");
    }
  });
</script> */
// }
