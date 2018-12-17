var objectController = function(){
    function all(context) {
        this.item = this.items.object[this.params["id"]];
        if (!this.item) {
            console.log('error');
        }
        this.partial('templates/object-detail.template');
        // templates.get('object-detail')
        // .then(function(template) {
        //     context.$element().html(template());
        // })

        
    }

    // window.addEventListener('load',function(){

    //     var script = document.createElement('script');
    //     script.type = 'text/javascript';
    //     script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAuaGsp71upWRMpecOhVTrMRNxXrrE9kBI&callback=initMap';
    //     document.body.appendChild(script);
    //   });
    
    return {
        all: all
    };
  }();