var homeController = function(){
    function all(context) {
        templates.get('home')
        .then(function(template) {
            context.$element().html(template());
        })
        // $.get('templates/home.handlebars', function(html){
        //     context.$element().html(html)
        // });
    }
    
    return {
        all: all
    };
}();