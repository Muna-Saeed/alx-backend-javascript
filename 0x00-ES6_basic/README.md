# 0x00-ES6_basic

### Project Overview: ES6 Basics

### Concepts to Master
1. **JavaScript Programming**
2. **Software Linter**

### Learning Resources
- ECMAScript 6 - ECMAScript 2015
- Statements and declarations
- Arrow functions
- Default parameters
- Rest parameter
- Javascript ES6 — Iterables and Iterators

### Learning Objectives
By the end of the project, you should be able to explain:
- What ES6 is
- New features introduced in ES6
- Difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default values
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

### Requirements
- Execute files on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- Files should end with a new line
- Include a README.md file
- Use the `.js` extension for code files
- Use the Jest Testing Framework
- Analyze code using ESLint
- Export all functions

### Setup
1. **Install NodeJS 12.11.x:**
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```
   Verify installation:
   ```bash
   nodejs -v
   npm -v
   ```

2. **Install Jest, Babel, and ESLint:**
   In your project directory:
   ```bash
   npm install
   ```

### Configuration Files
- `package.json`
- `babel.config.js`
- `.eslintrc.js`

### Tasks Overview

1. **Const or let?**
   - Use `const` for `task` in `taskFirst()`.
   - Use `let` for `combination` in `taskNext()`.

2. **Block Scope**
   - Replace `var` with `let` or `const` in `taskBlock()` to avoid variable overwriting.

3. **Arrow functions**
   - Rewrite `addNeighborhood` using arrow syntax.

4. **Parameter defaults**
   - Use default parameter values to condense `getSumOfHoods()`.

5. **Rest parameter syntax for functions**
   - Modify `returnHowManyArguments()` to return the number of arguments using rest parameter syntax.

6. **The wonders of spread syntax**
   - Concatenate two arrays and each character of a string using spread syntax in `concatArrays()`.

7. **Take advantage of template literals**
   - Use template literals for the return statement in `getSanFranciscoDescription()`.

8. **Object property value shorthand syntax**
   - Simplify `getBudgetObject()` by using shorthand for object properties.

9. **No need to create empty objects before adding in properties**
   - Use computed property names in `getBudgetForCurrentYear()`.

10. **ES6 method properties**
   - Use method properties in `getFullBudgetObject()`.

11. **For...of Loops**
   - Rewrite `appendToEachArrayValue()` using `for...of`.

12. **Iterator**
   - Write `createEmployeesObject()` to return an object with department name as a key.

13. **Let's create a report object**
   - Write `createReportObject()` to return an object containing `allEmployees` and a method `getNumberOfDepartments`.

14. **Iterating through report objects**
   - Write `createIteratorObject()` to return an iterator for each employee in the report object.

15. **Iterate through object**
   - Write `iterateThroughObject()` to return a string of employee names separated by `|`.

---

### Example Solutions

**Task 0: Const or let?**

```javascript
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
```

**Task 1: Block Scope**

```javascript
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
```

**Task 2: Arrow Functions**

```javascript
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
```

**Task 3: Parameter Defaults**

```javascript
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
```

**Task 4: Rest Parameter Syntax**

```javascript
export default function returnHowManyArguments(...args) {
  return args.length;
}
```

**Task 5: Spread Syntax**

```javascript
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
```

**Task 6: Template Literals**

```javascript
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
```

**Task 7: Object Property Shorthand**

```javascript
export default function getBudgetObject(income, gdp, capita) {
  return { income, gdp, capita };
}
```

**Task 8: Computed Property Names**

```javascript
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}
```

**Task 9: Method Properties**

```javascript
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  return {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
}
```

**Task 10: For...of Loops**

```javascript
export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    array[array.indexOf(value)] = appendString + value;
  }
  return array;
}
```

**Task 11: Iterator**

```javascript
export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}
```

**Task 12: Report Object**

```javascript
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
```

**Task 13: Create Iterator Object**

```javascript
export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  let employees = [];
  for (let dept in allEmployees) {
    employees = employees.concat(allEmployees[dept]);
  }
  return employees[Symbol.iterator]();
}
```

**Task 14: Iterate Through Object**

```javascript
export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result += employee + ' | ';
  }
  return result.slice(0, -3); // Remove the last ' | '
}
```

---
This summary encapsulates the main aspects and specific tasks of the ES6 Basics project.
