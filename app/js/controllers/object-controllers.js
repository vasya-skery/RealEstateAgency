var objectController = function(){
    function all(context) {
        // this.item = this.items[this.params["id"]];
        // if (!this.item) {
        //     return this.notFound();
        // }
        templates.get('object-detail')
        .then(function(template) {
            context.$element().html(template());
        })
    }
    
    return {
        all: all
    };
  }();