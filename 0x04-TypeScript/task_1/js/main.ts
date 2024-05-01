interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any; // Allow adding any additional attribute
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);


interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);


interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return `${firstLetter}. ${fullLastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe


// Define interface for constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

// Define interface for class methods
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// Define the class
class StudentClass {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Test the class
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John
