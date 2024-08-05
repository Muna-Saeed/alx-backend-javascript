# 0x01. ES6 Promises

### Project Summary: ES6 Promises

#### **Project Overview**
This project covers the basics of ES6 Promises in JavaScript, including creation, chaining, error handling, and using async/await syntax. The goal is to understand and utilize Promises to handle asynchronous operations effectively.

#### **Resources**
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

#### **Learning Objectives**
By the end of the project, you should be able to:
- Explain what Promises are and why they are used.
- Utilize `then`, `resolve`, `catch` methods.
- Use all methods of the `Promise` object.
- Handle exceptions with `throw` and `try/catch`.
- Use the `await` operator.
- Write `async` functions.

#### **Setup Instructions**
1. **Install NodeJS 12.11.x**
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   nodejs -v
   npm -v
   ```

2. **Install Jest, Babel, and ESLint**
   Use the provided `package.json` and run `npm install` in your project directory.

3. **Add Configuration Files**
   - `package.json`
   - `babel.config.js`
   - `utils.js`
   - `.eslintrc.js`

#### **Task Breakdown**

1. **Keep every promise you make and only make promises you can keep**
   - Return a Promise using `getResponseFromAPI()`.
   ```javascript
   export default function getResponseFromAPI() {
     return new Promise((resolve, reject) => {
       resolve('Success');
     });
   }
   ```

2. **Don't make a promise...if you know you can't keep it**
   - Return a promise that resolves or rejects based on the input boolean.
   ```javascript
   export default function getFullResponseFromAPI(success) {
     return new Promise((resolve, reject) => {
       if (success) {
         resolve({ status: 200, body: 'Success' });
       } else {
         reject(new Error('The fake API is not working currently'));
       }
     });
   }
   ```

3. **Catch me if you can!**
   - Handle the response from a promise with `handleResponseFromAPI`.
   ```javascript
   export default function handleResponseFromAPI(promise) {
     return promise
       .then(() => ({ status: 200, body: 'success' }))
       .catch(() => new Error())
       .finally(() => console.log('Got a response from the API'));
   }
   ```

4. **Handle multiple successful promises**
   - Collectively resolve promises from `uploadPhoto` and `createUser`.
   ```javascript
   import { uploadPhoto, createUser } from './utils.js';

   export default function handleProfileSignup() {
     return Promise.all([uploadPhoto(), createUser()])
       .then((values) => {
         console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
       })
       .catch(() => console.log('Signup system offline'));
   }
   ```

5. **Simple promise**
   - Return a resolved promise with user details.
   ```javascript
   export default function signUpUser(firstName, lastName) {
     return Promise.resolve({ firstName, lastName });
   }
   ```

6. **Reject the promises**
   - Return a rejected promise if the file cannot be processed.
   ```javascript
   export default function uploadPhoto(filename) {
     return Promise.reject(new Error(`${filename} cannot be processed`));
   }
   ```

7. **Handle multiple promises**
   - Return results from multiple settled promises.
   ```javascript
   import signUpUser from './4-user-promise';
   import uploadPhoto from './5-photo-reject';

   export default function handleProfileSignup(firstName, lastName, fileName) {
     return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
       .then((results) => results.map((result) => ({
         status: result.status,
         value: result.status === 'fulfilled' ? result.value : result.reason,
       })));
   }
   ```

8. **Load balancer**
   - Return the value of the first resolved promise.
   ```javascript
   export default function loadBalancer(chinaDownload, USDownload) {
     return Promise.race([chinaDownload, USDownload]);
   }
   ```

9. **Throw error / try catch**
   - Throw an error if the denominator is zero, else return the division result.
   ```javascript
   export default function divideFunction(numerator, denominator) {
     if (denominator === 0) {
       throw new Error('cannot divide by 0');
     }
     return numerator / denominator;
   }
   ```

10. **Throw an error**
    - Handle the execution of a function and manage the queue of responses.
    ```javascript
    export default function guardrail(mathFunction) {
      const queue = [];
      try {
        queue.push(mathFunction());
      } catch (error) {
        queue.push(`Error: ${error.message}`);
      } finally {
        queue.push('Guardrail was processed');
      }
      return queue;
    }
    ```

11. **Await / Async**
    - Use async/await to call `uploadPhoto` and `createUser`.
    ```javascript
    import { uploadPhoto, createUser } from './utils.js';

    export default async function asyncUploadUser() {
      try {
        const photo = await uploadPhoto();
        const user = await createUser();
        return { photo, user };
      } catch (error) {
        return { photo: null, user: null };
      }
    }
    ```

#### **Project Repository**
- GitHub repository: `alx-backend-javascript`
- Directory: `0x01-ES6_promise`
