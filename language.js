$('#Change').click(function() {
  var url = window.location.href.replace('en-US', 'nb-NO');
  document.location.href = url;
  alert('Button works'); //Alert to verify button click works
})