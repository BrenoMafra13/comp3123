// Student: Breno Lopes Mafra
// Student ID: 101485572


// Exercise 1: Write a JavaScript program to capitalize the first letter of each word of a given string.

function capitalizeSentence(sentence) {
  let words = sentence.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    result += capitalized + " ";
  }

  return result.trim();
}

console.log(capitalizeSentence("the quick brown fox"));

// Exercise 2: Write a JavaScript program to find the largest of three given integers.

function findLargestNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(findLargestNumber(1000, 510, 440));

// Exercise 3: Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

function moveLastThreeCharactersToStart(str) {
  if (str.length >= 3) {
    return str.slice(-3) + str.slice(0, -3);
  } else {
    return str;
  }
}

console.log(moveLastThreeCharactersToStart("Python"));

// Exercise 4: Write a JavaScript program to find the types of a given angle.
// • Acute angle: An angle between 0 and 90 degrees.
// • Right angle: An 90 degree angle.
// • Obtuse angle: An angle between 90 and 180 degrees.
// • Straight angle: A 180 degree angle.

function findAngleType(angle) {
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else {
    return "Invalid angle";
  }
}

console.log(findAngleType(47));

