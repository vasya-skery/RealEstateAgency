var sliderController = function(){
    function all(context) {
        templates.get('slider')
        .then(function(template) {
            context.$element().html(template());
        });
        // $.get('templates/slider.handlebars', function(html){
        //     context.$element().html(html)
        // });

        // var source   = document.getElementById("entry-template").innerHTML;
        // var template = Handlebars.compile(source);
    }
    
    return {
        all: all
    };
}();