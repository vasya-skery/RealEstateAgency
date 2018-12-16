var aboutController = function(){
  function all(context) {
      templates.get('about')
      .then(function(template) {
          context.$element().html(template());
      })
  }
  
  return {
      all: all
  };
}();