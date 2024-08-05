# 0x06. Unittests in JS

"0x06. Unittests in JS" project for the ALX Backend JavaScript course. Here's a summary of the tasks and their requirements along with some tips.

### Overview
- **Project Weight:** 1
- **Duration:** Jun 19, 2024, 6:00 AM - Jun 21, 2024, 6:00 AM

### Resources
- Mocha documentation
- Chai
- Sinon
- Express
- Request
- How to Test NodeJS Apps using Mocha, Chai, and SinonJS

### Learning Objectives
- Writing test suites using Mocha
- Using assertion libraries (Node or Chai)
- Structuring long test suites
- Using spies and stubs effectively
- Implementing hooks in tests
- Unit testing asynchronous functions
- Writing integration tests with Node.js

### Tasks and Tips

#### 0. Basic test with Mocha and Node assertion library
- **File:** `0-calcul.js`, `0-calcul.test.js`
- **Goal:** Implement `calculateNumber` function to sum rounded numbers.
- **Tips:** Ensure edge cases are covered in your tests, such as handling negative numbers and zero.

#### 1. Combining descriptions
- **File:** `1-calcul.js`, `1-calcul.test.js`
- **Goal:** Enhance `calculateNumber` to handle `SUM`, `SUBTRACT`, `DIVIDE`.
- **Tips:** Use `describe` blocks to group similar tests, making the suite more readable.

#### 2. Basic test using Chai assertion library
- **File:** `2-calcul_chai.js`, `2-calcul_chai.test.js`
- **Goal:** Use Chai's `expect` for assertions.
- **Tips:** Focus on the readability and maintainability of your test cases.

#### 3. Spies
- **File:** `utils.js`, `3-payment.js`, `3-payment.test.js`
- **Goal:** Use `sinon.spy` to verify function calls.
- **Tips:** Always restore spies after tests to avoid side effects.

#### 4. Stubs
- **File:** `4-payment.js`, `4-payment.test.js`
- **Goal:** Use `sinon.stub` to control function behavior.
- **Tips:** Stubbing allows you to simulate various scenarios, including errors and specific return values.

#### 5. Hooks
- **File:** `5-payment.js`, `5-payment.test.js`
- **Goal:** Use `beforeEach` and `afterEach` hooks for setup and teardown.
- **Tips:** Hooks can help ensure a consistent state across tests.

#### 6. Async tests with done
- **File:** `6-payment_token.js`, `6-payment_token.test.js`
- **Goal:** Test asynchronous functions using the `done` callback.
- **Tips:** Proper handling of async tests is crucial to avoid false positives.

#### 7. Skip
- **File:** `7-skip.test.js`
- **Goal:** Skip failing tests without removing them.
- **Tips:** Skipping tests helps maintain a record of incomplete work and avoids disrupting other tests.

#### 8. Basic Integration testing
- **Folder:** `8-api`
- **Goal:** Set up an Express server and test endpoints.
- **Tips:** Ensure the server is running before executing integration tests.

#### 9. Regex integration testing
- **Folder:** `9-api`
- **Goal:** Add route validation and tests for dynamic endpoints.
- **Tips:** Use regular expressions in route definitions to enforce parameter constraints.

#### 10. Deep equality & Post integration testing
- **Folder:** `10-api`
- **Goal:** Add and test new endpoints for returning JSON data and handling POST requests.
- **Tips:** Use deep equality assertions to verify JSON responses.

### General Tips
- **Code Quality:** Ensure your code is clean and adheres to best practices. Follow the project's style guide if provided.
- **Edge Cases:** Thoroughly test edge cases to ensure robustness.
- **Documentation:** Keep your README.md updated with instructions on how to run your tests.
- **Debugging:** Use console.log and debugging tools to troubleshoot failing tests.
- **Review:** Review the Mocha, Chai, and Sinon documentation for any advanced features that could improve your tests.

By focusing on these areas and ensuring thorough testing, you can deepen your understanding of unit testing in JavaScript.
