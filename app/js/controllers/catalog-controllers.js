var catalogController = function(){
    function all(context) {
        templates.get('catalog')
        .then(function(template) {
            context.$element().html(template());
        });
    }
    
    return {
        all: all
    };
  }();