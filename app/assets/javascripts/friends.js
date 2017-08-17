var initFriendLookup = function () {
  $('#friend-lookup-form').on('ajax:success', function (event, data, status) {
    $('#friend-lookup').replaceWith(data);

    initFriendLookup();
  });

  $('#friend-lookup-form').on('ajax:error', function (event, xhr, status, error) {
    $('#friend-lookup-results').replaceWith('');
    $('#friend-lookup-errors').replaceWith('Person was not found');
    hideSpinner();
  });

  $('#friend-lookup-form').on('ajax:before', showSpinner);
  $('#friend-lookup-form').on('ajax:after', hideSpinner);
}


$(document).on('ready', function () {
  initFriendLookup();
})
