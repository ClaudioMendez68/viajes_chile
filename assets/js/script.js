$(document).ready(function () {
  // Hover en el navbar
  $(".nav-link").hover(
    function () {
      $(this).addClass("text-info");
    },
    function () {
      $(this).removeClass("text-info");
    }
  );

  // Click en el navbar
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("text-black");
    $(this).addClass("text-black");
  });

  $(".navbar-brand").click(function () {
    $(".nav-link").removeClass("text-black");
  });

  // Smooth Scroll
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        100,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
