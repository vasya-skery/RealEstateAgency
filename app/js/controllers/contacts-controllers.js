var contactsController = function(){
  function all(context) {
      templates.get('contacts')
      .then(function(template) {
          context.$element().html(template());
      })
  }
  
  return {
      all: all
  };
}();