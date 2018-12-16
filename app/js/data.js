var  data = function() {

    function register(user) {
        // var fs = require('fs');
        // fs.readFile('data/data.json', 'utf8', function readFileCallback(err, data){
        //     if (err){
        //         console.log(err);
        //     } else {
        //     obj = JSON.parse(data); //now it an object
        //     obj.table.push(user); //add some data
        //     json = JSON.stringify(obj); //convert it back to json
        //     fs.writeFile('data/data.json', json, 'utf8', callback); // write it back 
        //     console.log('Saved!');
        // }});

        // var promise = new Promise(function(resolve, reject){
        //     // var xhr = new XMLHttpRequest();
        //     // xhr.send(user);
        //     var url = 'data/data.json';
        //     var data = JSON.stringify(user);
        //     var fs = require('fs');
        //     fs.writeFile(url, data, function(err) {
        //         if (err){
        //             console.log(err);
        //         } else {
        //             console.log('Saved!');
        //         }
        //     });

            // $.ajax({
            //     type: 'POST',
            //     url: 'data/data.json',
            //     dataType: 'text/json',
            //     data: JSON.stringify(user)
            //     // success: function(res) {
            //     //     resolve(res);
            //     // }
            // })
            // .done(function(){
            //     console.log('Saved!');
            // });
        // });
        // return promise;
            // get Data Services
    }

    function login(user) {

    }
    




    return {
        users: {
            register: register,
            login: login,
        }
    };
}();