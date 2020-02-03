export function Entry() {
  this.title = "";
  this.body = "";
  this.words = [];
  this.characters = [];
  this.numberOfWords = 0;
  this.numberOfVowels = 0;
  this.numberOfConsonants = 0;
  this.vowels = [];
  this.consonants = [];
}

Entry.prototype.addTitle = function(title) {
  this.title = title;
};

Entry.prototype.addBody = function(body) {
  this.body = body;
};

Entry.prototype.countWords = function() {
  this.words = this.body.split(" ");
  this.numberOfWords += this.words.length;
};

Entry.prototype.countVowels = function(){
  this.characters = this.body.split("");

  for (var i = 0; i < this.characters.length; i ++ ) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(this.characters[i])) {
      this.vowels.push(this.characters[i]);
    }
  }
  this.numberOfVowels += this.vowels.length;
};
Entry.prototype.countConsonants = function(){
  this.characters = this.body.split("");

  for (var i = 0; i < this.characters.length; i ++ ) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(this.characters[i])) {
      
    } else if(isNaN(this.characters[i])){
      
    } else {
      this.consonants.push(this.characters[i]);
    }
  }
  this.numberOfConsonants += this.consonants.length;
};