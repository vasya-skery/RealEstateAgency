var servicesController = function(){
    function all(context) {
        templates.get('services')
        .then(function(template) {
            context.$element().html(template());
        })
    }
    
    return {
        all: all
    };
  }();