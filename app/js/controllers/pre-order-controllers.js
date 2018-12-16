var preOrderController = function(){
    function all(context) {
        templates.get('pre-order')
        .then(function(template) {
            context.$element().html(template());
        })
    }
    
    return {
        all: all
    };
  }();