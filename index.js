const names = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"
  ];

// Level 0
console.log('------- Level 0 ---------')
names.forEach(
    element => {
        console.log(element)
    }
)

// Level 1
console.log('------ Level 1 -------')
let mr = names.filter(
    element => element.includes('Mr.')
)

mr.forEach(
    element => {
        console.log(element)
    }
)


// Level 2
console.log('-------- Level 2 -------')
let male = mr
let female = names.filter (
    element => element.includes('Mrs')
)

console.log(female)
console.log(male)

// Level 3
console.log('-------- Level 3 -------')

function searchName(input) {
    var i;
    for (i=0; i<names.length; i++){
        if(names[i].includes(input) === true){
            console.log(names[i])
        }
    }
}

searchName('Ab')

// Level 4
console.log('----- Level 4 ------')

const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];

let names3 = names1.concat(names2)

console.log(names3)

// Level 5
console.log('----------- Level 5 ------------')

const namez = [
    "Mr. Fahri",
    null,
    undefined,
    "Mr. Abdul",
    24,
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    32,
    "Mrs. Paula",
    7,
    22,
    "Mr. Hakim"
  ];
  
let nameString = namez.filter(
    (element) => {
        return typeof element == 'string'
    }
) 

console.log(nameString)