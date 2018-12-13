var  data = function() {

    function register(user) {
        var promise = new Promise(function(resolve, reject){
            var url = 'data/users.json';
            var data = JSON.stringify(user);
            var fs = require('fs');
            fs.writeFile(url, data, function(err) {
                if (err) throw err;
                console.log('Saved!');
            });

            // $.ajax({
            //     method: 'POST',
            //     contentType: 'aplication/json',
            //     data: JSON.stringify(user),
            //     success: function(res) {
            //         resolve(res);
            //     }
            // });
        });
        return promise;
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