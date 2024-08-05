# 0x03. ES6 Data Manipulation

## Description

This project focuses on manipulating data using ES6 features in JavaScript. It covers various data structures and techniques including arrays, typed arrays, sets, maps, and weak maps.

## Project Details

- **Weight**: 1
- **Project Timeline**: April 29, 2024, 6:00 AM to May 1, 2024, 6:00 AM

## Resources

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Learning Objectives

By the end of this project, you should be able to explain:

- How to use `map`, `filter`, and `reduce` on arrays.
- Typed arrays.
- The `Set`, `Map`, and `WeakMap` data structures.

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file at the root of the project is mandatory.
- Your code should use the `.js` extension.
- Your code will be tested using Jest and the command `npm run test`.
- Your code will be verified against lint using ESLint.
- Your code needs to pass all the tests and lint. You can verify the entire project by running `npm run full-test`.
- All functions must be exported.

## Setup

### Install NodeJS 12.11.x

Run the following commands in your home directory:

```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, use the supplied `package.json` and run:

```sh
npm install
```

### Configuration Files

Add the following configuration files to your project directory:

- `package.json`
- `babel.config.js`
- `.eslintrc.js`

Don’t forget to run `npm install` when you have the `package.json`.

## Tasks

### 0. Basic List of Objects

**File**: `0-get_list_students.js`

Create a function named `getListStudents` that returns an array of objects.

```js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());
```

### 1. More Mapping

**File**: `1-get_list_student_ids.js`

Create a function `getListStudentIds` that returns an array of ids from a list of objects.

```js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));
```

### 2. Filter

**File**: `2-get_students_by_loc.js`

Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.

```js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();
console.log(getStudentsByLocation(students, 'San Francisco'));
```

### 3. Reduce

**File**: `3-get_ids_sum.js`

Create a function `getStudentIdsSum` that returns the sum of all the student ids.

```js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
```

### 4. Combine

**File**: `4-update_grade_by_city.js`

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.

```js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));
console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
```

### 5. Typed Arrays

**File**: `5-typed_arrays.js`

Create a function named `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.

```js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));
```

### 6. Set Data Structure

**File**: `6-set.js`

Create a function named `setFromArray` that returns a Set from an array.

```js
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));
```

### 7. More Set Data Structure

**File**: `7-has_array_values.js`

Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

```js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
```

### 8. Clean Set

**File**: `8-clean_set.js`

Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (startString).

```js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
```

### 9. Map Data Structure

**File**: `9-groceries_list.js`

Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):

- Apples, 10
- Tomatoes, 10
- Pasta, 1
- Rice, 1
- Banana, 5

```js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());
```

### 10. More Map Data Structure

**File**: `10-update_uniq_items.js`

Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.

```js
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);
```

### 11. Weak Link Data Structure (Advanced)

**File**: `100-weak.js`

Export a `const` instance of `WeakMap` and name it `weakMap`.

Export a new function named `queryAPI`. It should accept an endpoint argument like so:

```js
{
  protocol: 'http',
  name: 'getUsers',
}
```

Track within the `weakMap` the number of times `queryAPI` is called for each endpoint.

When the number of queries is >= 5, throw an error with the message "Endpoint load is high".

```js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
```

## Repository

- **GitHub Repository**: [alx-backend-javascript](https://github.com/Muna-Saeed/alx-backend-javascript)
- **Directory**: `0x03-ES6_data_manipulation`

---

This README.md should give you a comprehensive overview of the "0x03. ES6 data manipulation" project, including setup, tasks, and their respective files.
