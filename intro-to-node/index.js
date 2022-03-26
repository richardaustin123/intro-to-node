//jshint esversion:6

// const fs = require("fs");
// fs.copyFileSync("file1.txt", "file2.txt");

let superheros = require('superhero-name-library');
let mySuperheroName = superheros.random();
console.log("Superhero: " + mySuperheroName);

let supervillains = require('supervillains');
let mySupervillainName = supervillains.random();
console.log("Supervillain: " + mySupervillainName);
