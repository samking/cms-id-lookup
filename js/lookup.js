var idsAndNames = {};


function lookup() {
  var search = $('#name-or-id').val().toLowerCase();
  var matches = [];
  for (var idAndName in idsAndNames) {
    if (idAndName.indexOf(search) !== -1) {
      matches.push(idsAndNames[idAndName]);
    }
  }
  var output = $('#output');
  output.empty();
  matches.forEach(function(match) {
    output.append('<li>' + match + '</li>');
  });
}


function initIds() {
  $.get('/data/ids.txt', function(response) {
    var rawIdsAndNames = response.split('\n');
    rawIdsAndNames.forEach(function(rawIdAndName) {
      if (rawIdAndName.length) {
        var lowercase = rawIdAndName.toLowerCase();
        idsAndNames[lowercase] = rawIdAndName;
      }
    });
  });
}


$(document).ready(function() {
  initIds();
  $('#name-or-id').on('input', lookup);
});
