const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  [...kittens, "Charlie"];
  kittens;
}