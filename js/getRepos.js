var apiKey = require('./../.env').apiKey;

exports.getRepos = function(accountName){
  $.get('https://api.github.com/users/' + accountName + '/repos?access_token=' + apiKey).then(function(response){
    for (i = 0; i < response.length; i++) {
      $('.repoList').append("<br>" + "<li> Repository Name:  " + response[i].name + "<br> " + "   Repository Description  : " + response[i].description + "<br>" + "Created at: " + response[i].created_at + " </li>");
    }
    }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
