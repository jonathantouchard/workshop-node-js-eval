exports.run = function(inputs) {
    var chaine = input.split();
    var sortie = "";
    for(var i = 0; i < chaine.length; i++){
      if(parseInt(chaine[i]) < 6){
        sortie += chaine[i];
      }
    }

    return sortie;
};

