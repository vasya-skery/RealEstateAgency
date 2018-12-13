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

    this.get("#/about/", function(context) {
      var str = location.href.toLowerCase();
      context.app.swap("");
      context
        .render("templates/about.handlebars", {})
        .appendTo(context.$element());
    });

    this.get("#/contacts/", function(context) {
      var str = location.href.toLowerCase();
      context.app.swap("");
      context
        .render("templates/contacts.handlebars", {})
        .appendTo(context.$element());
    });

    this.get("#/services/", function(context) {
      var str = location.href.toLowerCase();
      context.app.swap("");
      context
        .render("templates/services.handlebars", {})
        .appendTo(context.$element());
    });

    this.get("#/catalog/", function(context) {
      var str = location.href.toLowerCase();
      context.app.swap("");
      context
        .render("templates/catalog.handlebars", {})
        .appendTo(context.$element());
    });

    this.get("#/reviews/", function(context) {
      var str = location.href.toLowerCase();
      context.app.swap("");
      context
        .render("templates/reviews.handlebars", {})
        .appendTo(context.$element());
    });

    this.get("#/pre-order/", function(context) {
      var str = location.href.toLowerCase();
      context.app.swap("");
      context
        .render("templates/pre-order.handlebars", {})
        .appendTo(context.$element());
    });

    this.get("#/article/:id", function(context) {
      this.item = this.items[this.params["id"]];
      if (!this.item) {
        return this.notFound();
      }
      this.partial("templates/article-detail.handlebars");
    });

    this.get("#/services/", function(context) {
      var str = location.href.toLowerCase();
      context.app.swap("");
      context
        .render("templates/services.handlebars", {})
        .appendTo(context.$element());
    });

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

    // get Data slider
    $.ajax({
      url: "data/data.json"
    }).done(function(data) {
      // var json = JSON.parse(data);
      console.log(data);
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


