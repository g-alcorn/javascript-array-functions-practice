const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
//***FILTER***
console.log('\n--- Filter Method Exercises ---');
//1. Get characters with mass greater than 100
const heavyCharacters = characters.filter((character) => character.mass > 100);
console.log(`1. Characters with mass over 100:`);
console.log(heavyCharacters);

//2. Get characters with height less than 200
const notTallCharacters = characters.filter((character) => character.height < 200)
console.log(`2. Characters with height under 200:`);
console.log(notTallCharacters);

//3. Get all male characters
const maleCharacters = characters.filter((character) => character.gender === 'male');
console.log(`3. Male characters:`);
console.log(maleCharacters);

//4. Get all female characters
const femaleCharacters = characters.filter((character) => character.gender === 'female');
console.log(`4. Female characters:`);
console.log(femaleCharacters);


//***MAP***
console.log('\n--- Map Method Exercises ---');
//1. Get array of all names
const names = characters.map((character) => character.name);
console.log(`1. Make an array of all names:`);
console.log(names);

//2. Get array of all heights
const heights = characters.map((character) => character.height);
console.log(`2. Make an array of all heights`);
console.log(heights);

//3. Get array of objects with just name and height properties
const minifiedData = characters.map((character) => ({name: character.name, height: character.height}));
console.log(`3. Make an array of objects with name and height`);
console.log(minifiedData);

//4. Get array of all first names
const firstNames = characters.map((character) => character.name.split(' ')[0])
console.log(`4. Make an array of first names`);
console.log(firstNames);


//***SOME***
console.log('\n--- Some Method Exercises ---');
//1. Is there at least one male character?
const oneMale = characters.some((character) => character.gender === 'male');
console.log(`1. Is there at least one male character? \n${oneMale}`);

//2. Is there at least one character with blue eyes?
const blueEyes = characters.some((character) => character.eye_color === 'blue');
console.log(`2. Is there at least one character with blue eyes? \n${blueEyes}`);

//3. Is there at least one character taller than 210?
const veryTall = characters.some((character) => character.height > 210);
console.log(`3. Is there at least one character taller than 210? \n${veryTall}`);

//4. Is there at least one character that has mass less than 50?
const veryLight = characters.some((character) => character.mass < 50);
console.log(`4. Is there at least one character that has mass less than 50? \n${veryLight}`);


//***SORT***
console.log('\n--- Sort Method Exercises ---');
//1. Sort by mass
let massSort = characters.sort((first, second) => first.mass - second.mass);
console.log('1a. Sorted by mass (low to high):');
console.log(massSort);

massSort = characters.sort((first, second) => second.mass - first.mass);
console.log('1b. Sorted by mass (high to low):');
console.log(massSort);

//2. Sort by height
const heightSort = characters.sort((first, second) => first.height - second.height);
console.log('2. Sorted by height (low to high):');
console.log(heightSort);

//3. Sort by name
let nameSort = characters.sort((first, second) => first.name.split(' ')[1] > second.name.split(' ')[1]);
console.log('3a. Sorted by name (alphabetical by last name):');
console.log(nameSort);

nameSort = characters.sort((first, second) => first.name > second.name);
console.log('3b. Sorted by name (alphabetical by first name):');
console.log(nameSort);

//4. Sort by gender
const genderSort = characters.sort((first, second) => first.gender > second.gender);
console.log('4. Sorted by gender:');
console.log(genderSort);


//***REDUCE***
console.log('\n--- Reduce Method Exercises ---');
//1. Get total mass of all characters
const totalMass = characters.reduce((total, currentCharacter) => total + currentCharacter.mass, 0);
console.log(`1. Total mass of all characters: \n${totalMass}`);

//2. Get total height of all characters
const totalHeight = characters.reduce((total, currentCharacter) => total + currentCharacter.height, 0);
console.log(`2. Total height of all characters: \n${totalHeight}`);

//3. Get total number of characters by eye color
const byEyeColor = characters.reduce((accumulator, current) => {
  const color = current.eye_color;
  if (accumulator[color])
    accumulator[color]++;
  else 
    accumulator[color] = 1;

  return accumulator;
}, {});

console.log('3. How many characters have each eye color:');
console.log(byEyeColor);

//4. Get total number of characters in all the character names
let charsInNames = characters.reduce((total, current) => total + current.name.length, 0);
console.log('4a. Total number of letters in character names:');
console.log(charsInNames);

charsInNames = characters.reduce((accumulator, current) => {
  characterName = current.name;
  accumulator[characterName] = characterName.length
  return accumulator;
}, {});
console.log('4b. Number of letters in each character\'s name:');
console.log(charsInNames);


//***EVERY***
console.log('\n--- Every Method Exercises ---');
//1. Does every character have blue eyes?
const allBlueEyes = characters.every((character) => character.eye_color === 'blue');
console.log(`1. Does every character have blue eyes? \n${allBlueEyes}`);

//2. Does every character have mass more than 40?
const everyMass = characters.every((character) => character.mass > 40);
console.log(`2. Does every character have a mass over 40? \n${everyMass}`);

//3. Is every character shorter than 200?
const everyHeight = characters.every((character) => character.height < 200);
console.log(`3. Is every character shorter than 200? \n${everyHeight}`);

//4. Is every character male?
const everyGender = characters.every((character) => character.gender === 'male');
console.log(`4. Is every character male? \n${everyGender}`);