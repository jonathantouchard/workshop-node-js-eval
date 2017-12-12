exports.run = function(input) {

  nb = 0;

  for(var i = 0; i < input.length; i++){

    if(input[i].operator === 'add'){
      nb += input[i].value;
    }
    else if(input[i].operator === 'substract'){
      nb -= input[i].value;
    }
  }

  return nb;

};
