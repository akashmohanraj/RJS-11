const fs = require("fs");

const code = fs.readFileSync("src/App.js", "utf8");

let marks = 0;

console.log("======================================");
console.log("React Conditional Rendering Test");
console.log("======================================");

// Test 1: useState

if (/useState/.test(code)) {
    console.log("✓ useState Hook used");
    marks += 25;
} else {
    console.log("✗ useState Hook missing");
}


// Test 2: onClick

if (/onClick/.test(code)) {
    console.log("✓ onClick event handling used");
    marks += 20;
} else {
    console.log("✗ onClick event handling missing");
}


// Test 3: Ternary operator

if (/\?[\s\S]*:/.test(code)) {
    console.log("✓ Ternary operator used");
    marks += 20;
} else {
    console.log("✗ Ternary operator missing");
}


// Test 4: Welcome Student

if (/Welcome\s+Student/.test(code)) {
    console.log("✓ Welcome Student message found");
    marks += 20;
} else {
    console.log("✗ Welcome Student message missing");
}


// Test 5: Login

if (/Login/.test(code)) {
    console.log("✓ Login text found");
    marks += 15;
} else {
    console.log("✗ Login text missing");
}


console.log("--------------------------------------");
console.log("Total Marks : " + marks + "/100");
console.log("--------------------------------------");

if (marks === 100) {
    console.log("All test cases passed.");
    process.exit(0);
} else {
    console.log("Some test cases failed.");
    process.exit(1);
}
