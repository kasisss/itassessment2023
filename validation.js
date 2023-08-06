$(document).ready(() => {
  $("#form").submit((e) => {
    e.preventDefault();
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var messages = $("#messages").val();

    $(".error").remove();

    if (first_name.length < 1) {
      $("#first_name").after(
        '<span class="error">This field is required</span>'
      );
    }

    if (last_name.length < 1) {
      $("#last_name").after(
        '<span class="error">This field is required</span>'
      );
    }

    if (email.length < 1) {
      $("#email").after('<span class="error">This field is required</span>');
    } else {
      var regEx = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $("#email").after('<span class="error">Enter a valid email</span>');
      }
    }

    if (phone.length < 8) {
      $("#phone").after(
        '<span class="error">phone must be at least 8 characters long</span>'
      );
    }
    if (messages.length < 1) {
      $("#messages").after(
        '<span class="error">message must be at least 1 characters long</span>'
      );
    }

    if (!$(".error").length) {
      alert("Hurray you are validated");
      $("#form").trigger("reset");
    }
  });
});
