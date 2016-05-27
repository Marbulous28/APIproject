var getRepos = require('./../js/getRepos.js').getRepos;

$(document).ready(function() {
  $('#button').click(function() {
    var accountName = $('#name').val();
    $('#name').val("");
    $('.showAccounts').text("We found this account: " + accountName + ".");
    getRepos(accountName);
  });
});
