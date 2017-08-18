var verbs = ["eat", "drink", "screw", "shit", "fuck", ]

var nouns1 = ["horse-shit", "piss", "cow-pats", ""]

var adjectives = ["fat", "fucking", "pissing", "mother-fucking", "ass-licking", "shit-slinging", "monkey-raping"]

var nouns2 = ["Trump-supporter", "mofo", "idiot", "cunt", "shitslinger", "butt-pirate", "douche", "anus", "buttplug", "cow", "pimp", "communist"]

function sample(array) {
  return array[Math.floor ( Math.random() * array.length )]
};

function insult() {
  console.log(sample(verbs) + " " + sample(nouns1) + ", you " + sample(adjectives) + " " + sample(nouns2) + "!");
};

insult();
insult();
insult();
insult();
insult();
insult();
insult();
insult();
insult();
insult();
insult();
insult();
insult();
insult();
insult();
