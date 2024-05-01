// Define the interfaces with brand properties
interface MajorCredits {
    credits: number;
    __brand: 'MajorCredits';
}

interface MinorCredits {
    credits: number;
    __brand: 'MinorCredits';
}

// Define the functions to sum credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'MajorCredits'
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'MinorCredits'
    };
}

// Example usage
const mathMajor1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const mathMajor2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };
const artMinor1: MinorCredits = { credits: 2, __brand: 'MinorCredits' };
const artMinor2: MinorCredits = { credits: 3, __brand: 'MinorCredits' };

const totalMathCredits = sumMajorCredits(mathMajor1, mathMajor2);
const totalArtCredits = sumMinorCredits(artMinor1, artMinor2);

console.log(totalMathCredits); // { credits: 7, __brand: 'MajorCredits' }
console.log(totalArtCredits); // { credits: 5, __brand: 'MinorCredits' }
