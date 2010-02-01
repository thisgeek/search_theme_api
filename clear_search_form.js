// Based on http://drupal.org/node/367468

$(document).ready(function() {
  $('#edit-search-theme-form-1').click(function () {
    $(this).attr('value', '');
    $(this).unbind('click');
  });
  $('#edit-search-theme-form-1').focus(function () {
    $(this).attr('value', '');
  });
});
