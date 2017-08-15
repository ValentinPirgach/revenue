var initStockLookup = function () {
  $('#stock-lookup-form').on('ajax:success', function (event, data, status) {
    $('#stock-lookup').replaceWith(data);

    initStockLookup();
  });

  $('#stock-lookup-form').on('ajax:error', function (event, xhr, status, error) {
    $('#stock-lookup-results').replaceWith('');
    $('#stock-lookup-errors').replaceWith('Stock was not found');
    hideSpinner();
  });

  $('#stock-lookup-form').on('ajax:before', showSpinner);
  $('#stock-lookup-form').on('ajax:after', hideSpinner);
}


$(document).on('ready', function () {
  initStockLookup();
})
