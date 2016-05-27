var apiKey = require('./../.env').apiKey;

exports.getRepos = function(accountName){
  $.get('https://api.github.com/users/' + accountName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for (i = 0; i < 29; i++) {
      $('.repoList').prepend("<br><br>" + "<li> Repository Name:  " + response[i].name + "<br> " + "   Repository Description  : " + response[i].description + " </li>");
    }
    }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
