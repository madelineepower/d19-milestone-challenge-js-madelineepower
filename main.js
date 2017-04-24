var space = " ";
var inputHeight = document.getElementById("input-height");
var inputChar = document.getElementById("input-char");
var treeSpecs = {};
var button = document.getElementById("submit-button");


// EVENT LISTENERS
button.addEventListener("click", checkFields);
inputHeight.addEventListener("keydown", whichKey);

// create tree function to build the tree in the console
function tree() {
  console.log(treeSpecs);
  var height = treeSpecs.height;
  var char = treeSpecs.character;
  console.log(space.repeat(height) + char);
  for (var i = 1; i <= height; i++) {
    console.log(space.repeat(height - i) + char.repeat(i * 2 + 1));
  }
};

// DETERMINE IF THE ENTER KEY WAS PRESSED
function whichKey(e) {
  if (e.which === 13) {
    checkFields();
  }
};

// DETERMINE THAT ALL FIELDS HAVE INPUT
function checkFields() {
  if (!inputHeight.value || !inputChar) {
    alert("Please enter a number and a character!");
  } else {
    makeObject();
  }
}

// GET VALUES FROM INPUT FIELDS AND PUT THEM IN OBJECT
function makeObject() {
  treeSpecs.height = inputHeight.value;
  treeSpecs.character = inputChar.value;
  tree();
}
