var apiKey = require('./../.env').apiKey;

exports.getRepos = function(accountName){
  $.get('https://api.github.com/users/' + accountName + '/repos?access_token=' + apiKey).then(function(response){
    for (i = 0; i < response.length; i++) {
      if (response[i].description === "") {
        response[i].description = "No Description";
      }
      if (response[i].created_at.length > 10) {
        response[i].created_at = (response[i].created_at).substring(0,10)
      }
      $('.repoList').append("<br>" + "<li> Repository Name:  " + response[i].name + "<br> " + "   Repository Description  : " + response[i].description + "<br>" + "Created on: " + response[i].created_at + " </li>");
    }
    }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
