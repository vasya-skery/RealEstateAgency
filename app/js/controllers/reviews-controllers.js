var reviewsController = function(){
    function all(context) {
        templates.get('reviews')
        .then(function(template) {
            context.$element().html(template());
        })
    }
    
    return {
        all: all
    };
  }();