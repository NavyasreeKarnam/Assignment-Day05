const myResume = {
    "Name": "Tom",
    "Email": "abc@hfn.com",
    "Gender": "Male",
    "Mobile": 8389347973,
    "Place": "Hyderabad",
    "Skills": ["Java", "JavaScript", "Node", "React"],
    "Hobbies": ["Playing Games", "Cooking", "Singing"]
};

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < Object.keys(myResume).length; i++) {
    let key = Object.keys(myResume)[i];
    let value = myResume[key];
    console.log(key + ": " + value);
}

// Using for-in loop
console.log("\nUsing for-in loop:");
for (let key in myResume) {
    if (Array.isArray(myResume[key])) {
        console.log(key + ": " + myResume[key].join(", "));
    } else if (typeof myResume[key] === 'object') {
        for (let subKey in myResume[key]) {
            console.log(subKey + ": " + myResume[key][subKey]);
        }
    } else {
        console.log(key + ": " + myResume[key]);
    }
}

// Using for-of loop (only for arrays)
console.log("\nUsing for-of loop:");
for (let key of Object.keys(myResume)) {
    let value = myResume[key];
    if (Array.isArray(value)) {
        console.log(key + ": " + value.join(", "));
    }
}

// Using forEach (only for arrays)
console.log("\nUsing forEach:");
Object.values(myResume).forEach(function(value) {
    if (Array.isArray(value)) {
        console.log(value.join(", "));
    }
});