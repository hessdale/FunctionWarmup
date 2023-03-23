
function string_1(string) {
    console.log(`${string}`);
};

string_1(`Dale`);
string_1(`Bob`);


function boolean_1(boolean) {
    if (boolean === true) {
        console.log(`happy`);
    } else if (boolean === false) {
        console.log(`sad`);
    }
};

boolean_1(true);
boolean_1(false);

function larger_1(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else if (number2 > number1) {
        return number2;
    } else {
        return console.log(`error`);
    }
};

larger_1(123, 456);
larger_1(789, 777);

function large_array() {

}