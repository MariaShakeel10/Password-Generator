const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = "abcdefghijklmnopqrstuvwxyz";
const num = "1234567890";
const symbol = "<>/?|\":';}]{[+=_-()*&^%$#@!";

// Element selectors
let passwordInp = document.getElementById("my-password");
let lengthInp = document.getElementById("length");
let capInp = document.getElementById("capital");
let smallInp = document.getElementById("small");
let numInp = document.getElementById("no.");
let symbolInp = document.getElementById("symbol");

// Function to generate random character from given string
const randomGenerator = (data) => {
    return data[Math.floor(Math.random() * data.length)];
};

// Function to generate password based on selected criteria
const passwordGenerator = () => {
    let password = "";
    let passwordLength = parseInt(lengthInp.value); // Convert to integer
    
    if (passwordLength < 10 || passwordLength > 20) {
        alert("Password length must be between 10 and 20 characters.");
        return;
    }
    
    while (password.length < passwordLength) {
        if (capInp.checked) {
            password += randomGenerator(capital);
        }
        if (smallInp.checked) {
            password += randomGenerator(small);
        }
        if (numInp.checked) {
            password += randomGenerator(num);
        }
        if (symbolInp.checked) {
            password += randomGenerator(symbol);
        }
    }
    
    // Trim to desired length
    password = trim(password, passwordLength);
    
    // Set password in the input field
    passwordInp.value = password;
};

// Event listener for the Generate button
document.getElementById("btn").addEventListener('click', function() {
    passwordGenerator();
});

// Function to trim string to specified length
function trim(str, num) {
    if (str.length > num) {
        return str.substring(0, num);
    } else {
        return str;
    }
}
