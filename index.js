const names = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"
  ];

// Level 1
names.forEach(
    element => {
        console.log(element)
    }
)

console.log('------ Level 2 -------')
// Level 2
let mr = names.filter(
    element => element.includes('Mr.')
)

mr.forEach(
    element => {
        console.log(element)
    }
)

console.log('-------- Level 3 -------')
// Level 3
let male = mr
let female = names.filter (
    element => element.includes('Mrs')
)

console.log(female)
console.log(male)

// Level 4
console.log('----- Level 4 ------')

function searchName (input) {
    
}