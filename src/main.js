import { Entry } from './journal';
import './styles.css';

var displayDetails = function(entry){
  $(".teaser").html(entry.firstSentence);
  $(".number-of-consts").html(entry.numberOfConsonants);
  $(".number-of-words").html(entry.numberOfWords);
  $(".number-of-vowels").html(entry.numberOfVowels);
};

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
    entry.countConsonants();
    entry.getTeaser();
    displayDetails(entry);
  });
});