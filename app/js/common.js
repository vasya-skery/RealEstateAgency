jQuery(function($) {
  var app = $.sammy("#app", function() {
    this.use("Template");
    // this.use('Session');

    this.around(function(callback) {
      var context = this;
      this.load("data/data.json")
        .then(function(items) {
          context.items = items;
        })
        .then(callback);
    });

    this.get("#/", homeController.all);

    this.get("#/login", usersController.login);
    this.get("#/register", usersController.register);

    this.get("#/about/", aboutController.all);

    this.get("#/contacts/", contactsController.all);

    this.get("#/services/", servicesController.all);

    this.get("#/catalog/", catalogController.all);

    this.get("#/reviews/", reviewsController.all);

    this.get("#/pre-order/", preOrderController.all);

    this.get("#/object/:id", objectController.all);


    this.get("#/profile/", profileController.all);

    this.before(".*", function() {
      var hash = document.location.hash;
      $("nav")
        .find("a")
        .removeClass("current");
      $("nav")
        .find("a[href='" + hash + "']")
        .addClass("current");
    });
  });

  $(function() {
    app.run("#/");
  });
});

$(function() {

  $(document).ready(function() {
    setTimeout(function() {


      // init slider
      $("#slider").slick();
    }, 1000);

    // mobile nav toggle
    $('.mob-nav-btn').click(function(){
      $(this).toggleClass('active');
      $('.nav').toggleClass('active');
    });
    $('.nav a').click(function(){
      $('.nav').removeClass('active');
      $('.mob-nav-btn').removeClass('active');
    });

    // get Data slider
    $.ajax({
      url: "data/data.json"
    }).done(function(data) {
      // var json = JSON.parse(data);
      // console.log(data);
      var source = document.getElementById("slider-template").innerHTML;
      var template = Handlebars.compile(source);
      var html = template(data);
      $("#slider").append(html);
    });
  });


  // search
  $('#submit').click(function(){
    $('#searchform .searchtext').toggleClass('active');
  });





// scroll
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();


  if (scroll >= 100) {
      $('.header-wrap').addClass('scroll');
  } else {
      $('.header-wrap').removeClass('scroll');
  }
});
});

window.addEventListener("DOMContentLoaded", function(e) {
  var myHilitor2 = new Hilitor("app");
  myHilitor2.setMatchType("left");
  document.getElementById("tags").addEventListener("keyup", function(e) {
    myHilitor2.apply(this.value);
  }, false);
}, false);


