import { Entry } from './journal'

$(document).ready(function() {
  $("form#make-entry").submit(function(event) {
    event.preventDefault();
    var entry = new Entry();
    var title = $("input#title").val();
    var body = $("input#body").val();
    entry.addTitle(title);
    entry.addBody(body);
    entry.countWords();


    $(".number-of-words").html(entry.numberOfWords);
  })
})