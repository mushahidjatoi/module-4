


(function () {

var names = ["Mushahid", "saqib", "Obama", "Janice", "julie", "Miles", "peter", "john", "donald", "jeniffer"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();