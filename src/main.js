import { Entry } from './journal';
import './styles.css';

$(document).ready(function() {
  $("form#make-entry").submit(function(event) {
    event.preventDefault();
    var entry = new Entry();
    var title = $("input#title").val();
    var body = $("input#body").val();
    $("input#title").html("");
    $("input#body").html("");
    entry.addTitle(title);
    entry.addBody(body);
    entry.countWords();
    entry.countVowels();
    $(".number-of-words").html(entry.numberOfWords);
    $(".number-of-vowels").html(entry.numberOfVowels);
  });
});