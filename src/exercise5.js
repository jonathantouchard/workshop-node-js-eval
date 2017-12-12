var fs = require('fs');

exports.run = function(input) {

  var sortie = 0;

  fs.readFile(input, 'utf8', function(err, data) {
    for(var i = 0; i < data.length; i++){
          sortie += parseInt(data[i]);
          console.log(parseInt(data[i]));

    }

      console.log(sortie);
  })
};
