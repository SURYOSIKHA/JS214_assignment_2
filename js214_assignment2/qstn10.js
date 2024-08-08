// UniqueString: Count occurrences of each unique string
const uniqueStringCounts = (strings) => {
    return strings.reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});
};

// ProductOfMultipleOfThreeOrFive: Compute the product of numbers that are multiples of 3 or 5
const productOfMultiples = (numbers) => {
    return numbers.reduce((acc, num) => {
        if (num % 3 === 0 || num % 5 === 0) {
            return acc * num;
        }
        return acc;
    }, 1);
};

// PalindromesString: Find all palindromic strings
const palindromes = (words) => {
    return words.filter(word => {
        const cleaned = word.toLowerCase();
        return cleaned === cleaned.split('').reverse().join('');
    });
};

// FindImage: Normalize file paths to ensure proper file extensions
const normalizeFilePaths = (filePaths) => {
    return filePaths.map(path => {
        return path.replace(/-png$/, '.png').replace(/-jpg$/, '.jpg');
    });
};

// SwapStrings: Reverse the characters in each string
const swapStrings = (strings) => {
    return strings.map(str => {
        return str.split('').reverse().join('');
    });
};

// CountWords: Count the number of words in each sentence
const countWords = (sentences) => {
    sentences.forEach((sentence, index) => {
        const wordCount = sentence.split(' ').length;
        console.log(`Sentence ${index + 1} contains ${wordCount} words.`);
    });
};

// SumOfSquaresOfOddNumbers: Calculate the sum of squares of odd numbers
const sumOfSquaresOfOddNumbers = (numbers) => {
    return numbers.reduce((acc, num) => {
        if (num % 2 !== 0) {
            return acc + num * num;
        }
        return acc;
    }, 0);
};

// Example Inputs
const strings = ["apple", "banana", "apple", "orange", "banana", "pear", "apple"];
const numbers = [17, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
const words = ["racecar", "hello", "deified", "world", "level", "programming", "radar", "civic", "javascript"];
const filePaths = [
    "/images/pic1.jpg", "/images/pic2-png", "/assets/img/background-jpg", 
    "/assets/img/logo.png", "/downloads/document.pdf", "/downloads/image.png", 
    "/downloads/image-jpg"
];
const stringArray = ["Hello", "world", "this", "is", "an", "example", "array", "of", "strings"];
const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth."
];
const oddNumbers = [1, 2, 3, 4, 5];

// Execute Functions and Log Results
console.log('Unique String Counts:', uniqueStringCounts(strings));
console.log('Product of Multiples of 3 or 5:', productOfMultiples(numbers));
console.log('Palindromes:', palindromes(words));
console.log('Normalized File Paths:', normalizeFilePaths(filePaths));
console.log('Swapped Strings:', swapStrings(stringArray));
countWords(sentences);
console.log('Sum of Squares of Odd Numbers:', sumOfSquaresOfOddNumbers(oddNumbers));