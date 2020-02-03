export function Entry() {
  this.title = "",
  this.body = "",
  this.words = [],
  this.numberOfWords = 0
}

Entry.prototype.addTitle = function(title) {
  this.title = title;
}

Entry.prototype.addBody = function(body) {
  this.body = body;
}

Entry.prototype.countWords = function() {
  this.words = this.body.split(" ");
  this.numberOfWords += this.words.length;
}

