// TODO: add your solutions here!
// TODO: add your solutions here!

// input : two strings
// output : one string
// take two parameters and add it into one string

function combStr(a, b) {
	return a + b;
}

combStr("H","I");

// input: two inputs. string, number
// output: printing out string several times
// take two parameters, one string to console log and one number to n times.

function repPhrase(a, b) {
	for(var i = 0; i < b; i++) {
		console.log(a);
	}
}

repPhrase("Hi", 5);

// input: two numbers
// output: one number
// One parameter will be base number and the other parameter will be power
// Use for loop for the power parameter to keep multiplying it to initial var = 1;

function powFunction(a, b) {
	var output = 1;
	for(var i = 0; i < b; i++) {
		output = output * a;
	}
	return output;
}
powFunction(2, 3);

// input: number which is radius
// output: number which is area of circle
// to get area, we multiplied radius times radius and Math.pi

function areaCirc(r) {
	return Math.PI * r * r;
}
areaCirc(2);

// input: two numbers for both sides
// output: one number for unknown one side
// use sqrt to find out a^2 + b^2

function pytaTheorm(a, b) {
	return Math.sqrt(a * a + b * b);
}
pytaTheorm (2, 3);

// input : two numbers
// output : boolean if the modulus has remainder or not
// if modulus is equal to 0, return true and else return false

function eveDiv(x, y) {
	if(x % y === 0) {
		return true;
	} else {
		return false;
	}
}
eveDiv(4, 2);

// input: string which will be a word
// output: number which will tell you how many
// if the each index of input is equal to one of the vowel, it will add count.

function vowCount(str) {
	var vow = ["a", "e", "i", "o", "u"];
	var count = 0;
	for(var i = 0; i < str.length; i++) {
		for(var j = 0; j < vow.length; j++) {
			if(str[i] === vow[j]) {
				count += 1;
			}
		}
	}
	return count;
}
vowCount("aeio");

// input: array 
// output: boolean
// it runs through the array one each and if it match with the string "wdi" it will show true.

function contWdi(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === 'wdi') {
			return true;
		} 
	}
	return false;
}
console.log(contWdi(['a','wdi']));

// input: string which is a sentence
// output: string which is the logest word
// Split the sentence with " " and count the word in array and compare each.

function longestWord(str) {
	var eachWord = str.split(" ");
	var longWord = "";
	for(var i = 0; i < eachWord.length - 1; i++) {
		if(eachWord[i] < eachWord[i + 1]) {
			var longWord = eachWord[i + 1];
		} else {
			var longWord = eachWord[i];
		}
	}
	return longWord;
}
longestWord("Hi my name is");

// input: number
// output: string
// for each number of loop, we add star(string) and print it each time

function star() {
	var output = "";
    for(var i = 0; i < 5; i++) {
		output += "*";
		console.log(output);
    }
}
star();

