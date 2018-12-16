var profileController = function(){
    function all(context) {
        templates.get('profile')
        .then(function(template) {
            context.$element().html(template());
        })
    }
    
    return {
        all: all
    };
  }();