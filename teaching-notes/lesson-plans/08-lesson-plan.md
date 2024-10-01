# Async/Await & APIs

This unit introduces students to asynchronous JavaScript concepts with a focus on using `async/await` and interacting with APIs. The unit will begin by covering callback functions and how they relate to asynchronous code, then transition to using promises, and finally introduce `async/await` syntax for cleaner, more readable asynchronous operations. Real-world API calls will be demonstrated and practiced to solidify these concepts.

- [Async/Await \& APIs](#asyncawait--apis)
  - [1. Introduction to Asynchronous JavaScript](#1-introduction-to-asynchronous-javascript)
    - [What is Synchronous Code?](#what-is-synchronous-code)
      - [Pseudo Code](#pseudo-code)
      - [Real JavaScript Example](#real-javascript-example)
    - [What is Asynchronous Code?](#what-is-asynchronous-code)
      - [Pseudo Code](#pseudo-code-1)
      - [Real JavaScript Example](#real-javascript-example-1)
    - [What Happens When You Use Asynchronous Code Synchronously?](#what-happens-when-you-use-asynchronous-code-synchronously)
      - [Example](#example)
    - [The Event Loop and Asynchronous Code (In-Depth)](#the-event-loop-and-asynchronous-code-in-depth)
      - [Key Components of the Event Loop](#key-components-of-the-event-loop)
      - [Visualization](#visualization)
    - [1. Call Stack](#1-call-stack)
      - [What Happens with Long Tasks?](#what-happens-with-long-tasks)
    - [2. Web APIs \& Task Queue (also known as Callback Queue or Message Queue)](#2-web-apis--task-queue-also-known-as-callback-queue-or-message-queue)
    - [3. Event Loop](#3-event-loop)
      - [Example with `setTimeout`](#example-with-settimeout)
    - [The Importance of the Event Loop in Handling Asynchronous Code](#the-importance-of-the-event-loop-in-handling-asynchronous-code)
    - [What Happens If You Run Asynchronous Code Synchronously?](#what-happens-if-you-run-asynchronous-code-synchronously)
    - [Callbacks: How They're Used with Asynchronous Code](#callbacks-how-theyre-used-with-asynchronous-code)
    - [Callback Hell](#callback-hell)
    - [Summary](#summary)
  - [2. Promises in JavaScript](#2-promises-in-javascript)
    - [What is a Promise?](#what-is-a-promise)
    - [Basic Structure of a Promise](#basic-structure-of-a-promise)
    - [Example of a Promise](#example-of-a-promise)
    - [Handling Promises: `.then`, `.catch`, `.finally`](#handling-promises-then-catch-finally)
    - [Example of Full Promise Usage](#example-of-full-promise-usage)
    - [Promise Chaining](#promise-chaining)
      - [Example of Chaining](#example-of-chaining)
    - [Error Handling in Chaining](#error-handling-in-chaining)
    - [Benefits of Using Promises](#benefits-of-using-promises)
    - [Real-World Example: Fetching Data from an API](#real-world-example-fetching-data-from-an-api)
    - [Recap](#recap)
  - [3. Async/Await in JavaScript](#3-asyncawait-in-javascript)
    - [What is `async`?](#what-is-async)
      - [Basic Syntax of `async`](#basic-syntax-of-async)
    - [What is `await`?](#what-is-await)
      - [Basic Example of `await`](#basic-example-of-await)
    - [Example: Fetching Data with `async/await`](#example-fetching-data-with-asyncawait)
    - [Error Handling with `try...catch`](#error-handling-with-trycatch)
      - [Example of Error Handling with `try...catch`](#example-of-error-handling-with-trycatch)
    - [`try/catch` vs `.then()/.catch()`](#trycatch-vs-thencatch)
      - [`async/await` with `try...catch`](#asyncawait-with-trycatch)
      - [Example with `async/await`](#example-with-asyncawait)
      - [Promises with `.then()` and `.catch()`](#promises-with-then-and-catch)
      - [Example with `.then()/.catch()`](#example-with-thencatch)
    - [Handling Multiple Promises with `async/await`](#handling-multiple-promises-with-asyncawait)
      - [Example with `Promise.all()`](#example-with-promiseall)
    - [Advantages of `async/await`](#advantages-of-asyncawait)
    - [When to Use `async/await` vs Promises](#when-to-use-asyncawait-vs-promises)
    - [Recap](#recap-1)
  - [4. The Fetch API in JavaScript](#4-the-fetch-api-in-javascript)
    - [Fetch API Basics](#fetch-api-basics)
      - [Basic Syntax of `fetch`](#basic-syntax-of-fetch)
      - [Example of an Implicit GET Request](#example-of-an-implicit-get-request)
    - [Handling the Response](#handling-the-response)
      - [Checking the Response Status](#checking-the-response-status)
    - [Parsing JSON Data from the Response](#parsing-json-data-from-the-response)
      - [Example of Parsing JSON Data](#example-of-parsing-json-data)
    - [Simplifying with Async/Await](#simplifying-with-asyncawait)
      - [Example with Async/Await](#example-with-asyncawait-1)
    - [Key Points](#key-points)
  - [5. Making API Calls with Different HTTP Methods](#5-making-api-calls-with-different-http-methods)
    - [GET Requests (Retrieving Data)](#get-requests-retrieving-data)
      - [Basic GET Example](#basic-get-example)
    - [POST Requests (Creating Data)](#post-requests-creating-data)
      - [POST Example](#post-example)
    - [PUT Requests (Updating Data)](#put-requests-updating-data)
      - [PUT Example](#put-example)
    - [PATCH Requests (Partially Updating Data)](#patch-requests-partially-updating-data)
      - [PATCH Example](#patch-example)
    - [DELETE Requests (Removing Data)](#delete-requests-removing-data)
      - [DELETE Example](#delete-example)
    - [The Options Object](#the-options-object)
      - [Common Headers](#common-headers)
    - [Key Takeaways](#key-takeaways)
  - [6. Handling Errors, Loading States, and Aborting Calls](#6-handling-errors-loading-states-and-aborting-calls)
    - [Network Errors](#network-errors)
      - [Handling Network Errors](#handling-network-errors)
    - [Response Status Codes](#response-status-codes)
      - [Checking Response Status](#checking-response-status)
    - [Loading States](#loading-states)
      - [Implementing a Loading State](#implementing-a-loading-state)
    - [Aborting Fetch Calls](#aborting-fetch-calls)
      - [Using AbortController](#using-abortcontroller)
    - [Combining Error Handling, Loading States, and Aborting Requests](#combining-error-handling-loading-states-and-aborting-requests)
    - [Key Takeaways](#key-takeaways-1)
  - [Summary: Asynchronous JavaScript \& Fetch API](#summary-asynchronous-javascript--fetch-api)
    - [Introduction to Asynchronous JavaScript](#introduction-to-asynchronous-javascript)
    - [Promises](#promises)
    - [Async/Await](#asyncawait)
    - [The Fetch API](#the-fetch-api)
    - [Making API Calls with Different HTTP Methods](#making-api-calls-with-different-http-methods)
    - [Handling Errors, Loading States, and Aborting Calls](#handling-errors-loading-states-and-aborting-calls)
    - [Final Thoughts](#final-thoughts)

## 1. Introduction to Asynchronous JavaScript

### What is Synchronous Code?

Synchronous code is the default way JavaScript runs — one thing at a time, in a linear fashion. Each line of code waits for the previous line to finish executing before moving on. It’s straightforward and easy to reason about, but it can lead to delays when you have operations that take time, like reading a file or fetching data from a server.

#### Pseudo Code

```
// Synchronous Example (Pseudo Code)
1. Do task A
2. Do task B
3. Do task C
```

Each task is completed before moving on to the next. If task B takes a long time, task C is forced to wait, creating a bottleneck.

#### Real JavaScript Example

```javascript
console.log("Start");
const result = someExpensiveCalculation(); // Blocking operation
console.log("Result:", result);
console.log("End");
```

In this example, `someExpensiveCalculation` takes time to compute. While it's working, nothing else can happen. You’ll see:

```
Start
Result: (after some time)
End
```

Everything happens in order, with no overlap.

---

### What is Asynchronous Code?

Asynchronous code allows tasks to run in the background, freeing up JavaScript to keep executing other tasks. This is crucial for operations that take time — like fetching data from a server or reading files. Instead of blocking, the program continues running, and once the asynchronous task is finished, its result is processed.

#### Pseudo Code

```
// Asynchronous Example (Pseudo Code)
1. Do task A
2. Start task B (async) and continue
3. Do task C
4. When task B finishes, process the result
```

In this model, the program doesn’t wait for task B to finish. It moves on to task C, and only when task B is done does it handle that result.

#### Real JavaScript Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Task B done (after 2 seconds)");
}, 2000); // Simulate async task with setTimeout

console.log("Task C done");
```

This outputs:

```
Start
Task C done
Task B done (after 2 seconds)
```

Here, `setTimeout` simulates a delay of 2 seconds for Task B. Notice how the code doesn’t block. Task C completes immediately, and when Task B is ready, it logs its result.

---

### What Happens When You Use Asynchronous Code Synchronously?

Trying to treat asynchronous code as synchronous can lead to unexpected results. For example, let’s say you’re fetching data from an API, but you expect it to behave like synchronous code — it won’t.

#### Example

```javascript
console.log("Start");

const data = fetchData(); // Let's pretend this is an async call

console.log("Data:", data); // Won't work as expected because data isn't available yet
console.log("End");
```

What happens here is that `fetchData` starts its process, but the `console.log('Data:')` line runs immediately — before `fetchData` has returned anything! You’ll often end up logging `undefined` or `Promise` because the data isn’t ready yet.

You need to handle the data asynchronously, either using a callback, promise, or `async/await`.

---

### The Event Loop and Asynchronous Code (In-Depth)

JavaScript is single-threaded, meaning it can only execute one task at a time within its **Call Stack**. But to allow for non-blocking behavior (like fetching data, reading files, etc.), JavaScript uses **asynchronous operations** and a clever mechanism called the **Event Loop**.

#### Key Components of the Event Loop

1. **Call Stack**
2. **Web APIs/Task Queue**
3. **Event Loop**

We’ll break these down further.

#### Visualization

1. You start a `setTimeout`.
2. JavaScript runs the rest of your synchronous code.
3. The `setTimeout` finishes and goes into the Task Queue.
4. Once all synchronous code is done, the event loop pulls the task from the queue and runs it.

---

### 1. Call Stack

The **Call Stack** is the main execution context of JavaScript. Every time you call a function, it gets added to the stack. JavaScript will then execute each function in the stack from top to bottom in a synchronous manner.

Think of it like a stack of books:

- The book on top is the currently executing function.
- When a function is done, it is removed from the stack.
- The function below it now takes its place.

```javascript
function first() {
  console.log("First function");
}

function second() {
  console.log("Second function");
}

first();
second();
```

In this case, `first` gets pushed to the stack, executed, and then removed. Next, `second` is pushed and executed. The stack is emptied one by one, ensuring everything is done in order.

#### What Happens with Long Tasks?

When you have a long-running synchronous operation (e.g., an expensive computation), the entire stack is blocked until that operation is complete.

---

### 2. Web APIs & Task Queue (also known as Callback Queue or Message Queue)

JavaScript offloads certain tasks, like `setTimeout`, `fetch`, and DOM events, to **Web APIs**. These are browser-provided APIs that handle operations that take time but shouldn't block the main thread.

Here’s what happens step by step:

1. **Async Task Sent to Web API**: When you start something asynchronous (like `setTimeout` or a `fetch` request), JavaScript passes it off to the Web APIs. This removes it from the Call Stack, so the rest of your code can keep running.
2. **Task Queue**: When the Web API finishes its job (e.g., the timer expires, or the data is fetched), it places the callback in the **Task Queue**. The task doesn’t get executed immediately; it waits its turn.
3. **Task Queue Waiting**: The Task Queue holds the completed asynchronous tasks until JavaScript is ready to handle them.

---

### 3. Event Loop

The **Event Loop** continuously monitors the Call Stack. Its job is to:

- **Check if the Call Stack is empty**: The Event Loop waits until all synchronous code is executed, and the Call Stack is empty.
- **Process Task Queue**: Once the Call Stack is empty, the Event Loop looks into the Task Queue. If there are tasks waiting, it moves the first task into the Call Stack for execution.

Think of the Event Loop as a manager standing by, watching the Call Stack and Task Queue. Once the stack is empty, the manager moves the next task from the queue onto the stack.

#### Example with `setTimeout`

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 2000);

console.log("End");
```

- `console.log('Start')` goes to the Call Stack and is executed.
- `setTimeout` is sent to the Web API, which starts the 2-second timer. The Call Stack moves on without waiting for it.
- `console.log('End')` is added to the stack and executed immediately.
- Once the timer expires, the callback (`() => { console.log('Timeout'); }`) is placed in the Task Queue.
- The Event Loop sees the Call Stack is empty, so it moves the callback from the Task Queue to the Call Stack, and it’s executed.

Output:

```
Start
End
Timeout (after 2 seconds)
```

---

### The Importance of the Event Loop in Handling Asynchronous Code

Without the Event Loop, JavaScript would have no way to manage asynchronous tasks. Here’s why it’s important:

- **Non-blocking behavior**: The Event Loop allows JavaScript to run other code while waiting for time-consuming tasks (like fetching data) to complete.
- **Efficient task management**: Even though JavaScript is single-threaded, the Event Loop makes it possible to handle multiple tasks without blocking the user interface or halting other code execution.

---

### What Happens If You Run Asynchronous Code Synchronously?

If you try to treat asynchronous operations as synchronous, you run into problems. Let’s take `fetch`, for example:

```javascript
const data = fetch("https://api.example.com/data");
console.log(data); // Will log a Promise, not the actual data
```

Here, `fetch` is asynchronous. It starts the request, but the result isn’t ready yet. Instead of waiting, JavaScript moves on, logging the `data` variable immediately. But since `fetch` hasn’t resolved, what you get is a **Promise**, not the actual data.

To get the data, you need to handle it asynchronously, either with callbacks, promises, or `async/await`.

---

### Callbacks: How They're Used with Asynchronous Code

Before promises and `async/await`, **callbacks** were the primary way to deal with async operations. A **callback** is just a function you pass to another function, which is then called when the async operation finishes.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Alice", age: 25 };
    callback(data); // The callback is called when data is ready
  }, 2000);
}

fetchData((data) => {
  console.log("Data received:", data);
});
```

- **fetchData** simulates an asynchronous task (using `setTimeout`).
- Once the data is ready, it calls the `callback` function with the data.
- `fetchData` doesn’t block other code; the callback ensures that you only handle the data when it’s ready.

This is why you’ll see callbacks used with many asynchronous functions (e.g., event listeners, file reading, etc.).

---

### Callback Hell

Callbacks can get messy when you have multiple asynchronous operations that depend on each other. This can lead to **callback hell**, where callbacks are nested inside callbacks, making the code difficult to read and maintain.

```javascript
getData((data) => {
  processData(data, (result) => {
    saveResult(result, (response) => {
      console.log("All done!");
    });
  });
});
```

This nested structure quickly becomes unreadable. Promises and `async/await` were introduced to solve this problem by making async code look and behave more like synchronous code.

---

In summary, the Event Loop and related components allow JavaScript to efficiently handle asynchronous operations. Understanding how it works is key to writing smooth, non-blocking code that can handle time-consuming tasks in the background. Next, we’ll explore **Promises** and how they improve the handling of async code over traditional callbacks.

---

### Summary

- **Synchronous code** runs one thing at a time, blocking until each task completes.
- **Asynchronous code** allows tasks to run in the background while JavaScript continues executing other code.
- **Event Loop** is responsible for managing asynchronous operations and ensuring they execute once the call stack is empty.
- **Callbacks** are a common way to deal with asynchronous tasks by providing a function to be called once an async operation is complete.

---

## 2. Promises in JavaScript

When working with asynchronous operations, you often need to handle the results once they complete. This is where **Promises** come in, allowing you to work with asynchronous operations in a more structured and manageable way than callbacks.

### What is a Promise?

A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation. Think of a Promise as a placeholder for a value that will be available later.

A Promise has three possible states:

1. **Pending**: The initial state, meaning the operation has not yet completed.
2. **Fulfilled**: The operation has completed successfully, and the Promise has a result.
3. **Rejected**: The operation has failed, and the Promise holds an error.

A Promise transitions from **pending** to either **fulfilled** or **rejected** when the asynchronous operation finishes.

---

### Basic Structure of a Promise

You can create a Promise using the `Promise` constructor:

```javascript
const promise = new Promise((resolve, reject) => {
  // async operation here
});
```

Inside the Promise, you have two functions:

- `resolve`: Call this when the operation succeeds.
- `reject`: Call this when the operation fails.

---

### Example of a Promise

Let’s say you want to simulate a delayed operation that either succeeds or fails:

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // change to false to simulate failure
    if (success) {
      resolve("Data received");
    } else {
      reject("Error occurred");
    }
  }, 2000);
});
```

- The `fetchData` Promise takes 2 seconds to complete (using `setTimeout`).
- If `success` is `true`, it calls `resolve` with a message (`'Data received'`).
- If `success` is `false`, it calls `reject` with an error message (`'Error occurred'`).

Now, to handle the result of the Promise, you use the following methods: `then`, `catch`, and `finally`.

---

### Handling Promises: `.then`, `.catch`, `.finally`

1. **`.then()`**

   - This method is used to handle the result of a fulfilled Promise. When the Promise resolves successfully, the function inside `.then()` is executed.

   ```javascript
   fetchData.then((result) => {
     console.log(result); // Output: 'Data received' after 2 seconds
   });
   ```

2. **`.catch()`**

   - This method handles the error if the Promise is rejected. It’s useful for handling failures in asynchronous operations.

   ```javascript
   fetchData.catch((error) => {
     console.log(error); // Output: 'Error occurred' if rejected
   });
   ```

3. **`.finally()`**

   - This method is executed regardless of whether the Promise was fulfilled or rejected. It’s commonly used for cleanup tasks, such as stopping a loading spinner or closing a connection.

   ```javascript
   fetchData.finally(() => {
     console.log("Operation complete"); // Runs no matter what
   });
   ```

---

### Example of Full Promise Usage

Here’s a complete example that shows how `.then`, `.catch`, and `.finally` work together:

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5; // Randomly succeed or fail
    if (success) {
      resolve("Data received");
    } else {
      reject("Error occurred");
    }
  }, 2000);
});

fetchData
  .then((result) => {
    console.log(result); // Handles success
  })
  .catch((error) => {
    console.log(error); // Handles failure
  })
  .finally(() => {
    console.log("Operation complete"); // Runs in both cases
  });
```

In this example:

- The Promise has a **50% chance of success** (using `Math.random()`).
- If successful, the `then()` block runs and logs the result.
- If it fails, the `catch()` block runs and logs the error.
- The `finally()` block always runs after the Promise settles, regardless of the outcome.

---

### Promise Chaining

One of the biggest advantages of Promises is **chaining**. When you call `.then()`, it returns a new Promise, allowing you to chain multiple asynchronous operations.

#### Example of Chaining

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});

fetchData
  .then((result) => {
    console.log(result); // Output: 'Data received'
    return "Processing data";
  })
  .then((message) => {
    console.log(message); // Output: 'Processing data'
    return "Final result";
  })
  .then((finalMessage) => {
    console.log(finalMessage); // Output: 'Final result'
  });
```

Here’s what’s happening:

1. The first `then()` logs the result (`'Data received'`) and returns `'Processing data'`.
2. The second `then()` logs `'Processing data'` and returns `'Final result'`.
3. The third `then()` logs `'Final result'`.

This kind of chaining allows for sequential asynchronous operations, which is much cleaner than nesting callbacks.

---

### Error Handling in Chaining

If any Promise in a chain is rejected, the subsequent `.catch()` will handle it:

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error occurred");
  }, 1000);
});

fetchData
  .then((result) => {
    console.log(result);
    return "Processing data";
  })
  .then((message) => {
    console.log(message);
    return "Final result";
  })
  .catch((error) => {
    console.error(error); // Handles any error in the chain
  });
```

In this case, the Promise is rejected, so the `.catch()` block will log `'Error occurred'`, skipping any further `.then()` blocks.

---

### Benefits of Using Promises

- **Avoids callback hell**: Promises flatten the nesting of callbacks, making the code easier to read and maintain.
- **Chaining**: Promises can be chained to handle multiple asynchronous operations in sequence.
- **Error handling**: You can handle errors in one place using `.catch()`, instead of handling errors at every callback level.

---

### Real-World Example: Fetching Data from an API

Here’s how you might use a Promise in a real-world scenario, such as fetching data from an API using the Fetch API (which returns a Promise):

```javascript
fetch("https://api.somesite.com/id/2")
  .then((response) => response.json()) // Converts the response to JSON
  .then((data) => {
    console.log("Data:", data); // Logs the fetched data
  })
  .catch((error) => {
    console.error("Error:", error); // Handles any errors
  })
  .finally(() => {
    console.log("Fetch operation complete");
  });
```

In this case:

- `fetch()` initiates an HTTP request and returns a Promise.
- The first `.then()` processes the response and converts it to JSON.
- The second `.then()` logs the JSON data.
- The `.catch()` handles any errors, such as a network failure.
- The `.finally()` block runs after the Promise has settled, cleaning up the process.

---

### Recap

- **Promises** are a powerful way to handle asynchronous operations in JavaScript.
- They make it easier to handle success, failure, and sequential tasks.
- Methods like `.then()`, `.catch()`, and `.finally()` allow you to handle different outcomes of asynchronous operations.
- Promises can be chained, making your code cleaner and easier to maintain.

Next, we’ll cover **Async/Await**, which provides a simpler syntax for working with Promises.

---

## 3. Async/Await in JavaScript

**Async/Await** provides a more readable and concise way to work with asynchronous code by using a synchronous-looking syntax. It's built on top of Promises, meaning you can handle asynchronous operations without deeply nesting `.then()` and `.catch()` calls.

---

### What is `async`?

The `async` keyword is used to declare an **asynchronous function**. It tells JavaScript that the function will return a **Promise** automatically, even if it doesn’t explicitly return one. Inside an `async` function, you can use the `await` keyword to pause the function’s execution until the Promise resolves.

#### Basic Syntax of `async`

```javascript
async function fetchData() {
  return "Data received";
}

fetchData().then((result) => console.log(result));
// Output: 'Data received'
```

In this example:

- The `fetchData` function is marked as `async`, so it returns a Promise.
- The value `'Data received'` is automatically wrapped in a resolved Promise.
- We can handle the result with `.then()`, just like with a regular Promise.

---

### What is `await`?

The `await` keyword is used to **wait for a Promise to resolve** before continuing the execution of an `async` function. You can only use `await` inside an `async` function. When the Promise is fulfilled, `await` gives you the resolved value, making the code appear synchronous.

#### Basic Example of `await`

```javascript
async function fetchData() {
  const result = await Promise.resolve("Data received");
  console.log(result); // Output: 'Data received'
}

fetchData();
```

In this example:

- `await` pauses the execution until the Promise resolves.
- Once the Promise is resolved, the result (`'Data received'`) is assigned to the variable `result`.
- The function then logs the result to the console.

---

### Example: Fetching Data with `async/await`

Here’s how you might use `async/await` to fetch data from an API:

```javascript
async function fetchTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json(); // Parsing JSON response
  console.log("Data:", data);
}

fetchTodo();
// Output: The fetched JSON data after the Promise resolves
```

- The `fetchTodo` function is declared with `async`.
- The `fetch` function returns a Promise, so we use `await` to wait for it to resolve.
- After the Promise resolves, we parse the response to JSON using `response.json()`, which is also asynchronous and needs to be awaited.

This approach makes the asynchronous code look more linear and easier to follow compared to chaining `.then()` calls.

---

### Error Handling with `try...catch`

One of the advantages of `async/await` is that you can handle errors using `try...catch`, just like in synchronous code. This makes it easier to handle errors in a structured way without needing to chain `.catch()` handlers.

#### Example of Error Handling with `try...catch`

```javascript
async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/invalid-url"
    );
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchTodo();
```

- The `try` block wraps the `await` calls, where asynchronous operations occur.
- If anything goes wrong (e.g., the URL is invalid), the `catch` block catches the error and logs it.
- This makes error handling more intuitive and consistent with how synchronous code handles exceptions.

---

### `try/catch` vs `.then()/.catch()`

Both approaches are used to handle asynchronous code, but they offer different styles.

#### `async/await` with `try...catch`

- More readable, especially when handling multiple asynchronous operations.
- Error handling is grouped together, making the code more linear and easier to maintain.

#### Example with `async/await`

```javascript
async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

#### Promises with `.then()` and `.catch()`

- Chaining `.then()` is good when you have simple asynchronous tasks.
- However, it can become harder to read with nested `.then()` calls or multiple asynchronous operations.

#### Example with `.then()/.catch()`

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
```

---

### Handling Multiple Promises with `async/await`

In more complex scenarios, you might need to handle multiple asynchronous operations at the same time. `async/await` works seamlessly with **`Promise.all()`**, allowing you to wait for multiple Promises in parallel.

#### Example with `Promise.all()`

```javascript
async function fetchTodos() {
  try {
    const [todo1, todo2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/todos/2").then((res) =>
        res.json()
      ),
    ]);

    console.log("Todo 1:", todo1);
    console.log("Todo 2:", todo2);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

fetchTodos();
```

- Here, both API requests are started at the same time using `Promise.all()`.
- We await both Promises to resolve, and once they’re fulfilled, we handle the results.
- If either Promise is rejected, the `catch` block will handle the error.

---

### Advantages of `async/await`

- **Readability**: `async/await` looks more like synchronous code, making it easier to understand and maintain.
- **Error handling**: Errors are handled with `try...catch`, providing a more intuitive way to manage exceptions.
- **Linear flow**: There’s no need for chaining `.then()` or nesting callbacks, making the flow of the code easier to follow.

---

### When to Use `async/await` vs Promises

- **Use `async/await`** when you need to handle multiple asynchronous operations in a linear, readable way, especially if you have many `then()` calls.
- **Use Promises (`.then()`)** for simple asynchronous operations where chaining isn’t too deep.

---

### Recap

- `async` functions always return a Promise.
- `await` pauses the execution of an `async` function until the Promise resolves.
- Error handling with `try...catch` makes it easier to manage errors in asynchronous code.
- `async/await` is more readable for complex asynchronous flows compared to chaining Promises with `.then()` and `.catch()`.

Next, we’ll dive into **The Fetch API**. Let me know when you’re ready to proceed!

---

## 4. The Fetch API in JavaScript

The **Fetch API** is a modern and powerful way to make network requests in JavaScript, replacing the older `XMLHttpRequest` method. Fetch allows you to make HTTP requests (e.g., GET, POST, PUT) to servers to retrieve or send data. It works asynchronously, meaning it returns a **Promise** that resolves once the request is completed.

The most common use case is fetching data from a server and then handling the response.

---

### Fetch API Basics

The `fetch()` method is the core of the Fetch API. It initiates a request to a specified resource and returns a Promise that resolves to a **Response** object.

#### Basic Syntax of `fetch`

```javascript
fetch(url, [options])
  .then((response) => {
    // handle the response
  })
  .catch((error) => {
    // handle the error
  });
```

- **url**: The URL to which the request is made (a string).
- **options** (optional): An object where you can specify things like method (`GET`, `POST`), headers, body data, etc.

The most basic use of `fetch` is an implicit `GET` request, where you simply pass the URL without any options.

#### Example of an Implicit GET Request

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  // Handle the response here
});
```

In this example:

- The URL points to a mock API that returns a single todo item.
- Since no options are provided, the request defaults to a **GET** request.

---

### Handling the Response

Once the `fetch()` request is made, the Promise resolves with a **Response** object, which represents the server’s response to the request. The **Response** object contains metadata like the status code, headers, and methods to access the actual data.

#### Checking the Response Status

It’s important to check the response’s **status** to ensure the request was successful before processing the data. A status code in the 200-299 range indicates success.

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response;
  })
  .then((response) => console.log("Request was successful!"))
  .catch((error) => console.error("Error:", error));
```

- **response.ok**: A boolean indicating if the response was successful.
- **response.status**: The HTTP status code (e.g., 200 for success, 404 for not found).

---

### Parsing JSON Data from the Response

In most cases, you’ll be working with **JSON** data. The Response object has a method called `.json()` that parses the response body into a JavaScript object.

#### Example of Parsing JSON Data

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parsing the JSON body
  })
  .then((data) => {
    console.log("Todo:", data);
  })
  .catch((error) => console.error("Error:", error));
```

- **response.json()** returns a Promise that resolves to the parsed JSON object.
- In this example, the data represents a to-do item fetched from the API.

---

### Simplifying with Async/Await

Using **async/await** with `fetch()` makes the code more readable and easier to work with compared to chaining `.then()` calls.

#### Example with Async/Await

```javascript
async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Todo:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchTodo();
```

Here:

- `await` pauses the function until the `fetch()` request is complete.
- `await` is also used to parse the JSON data once the response is received.
- If there’s an error (e.g., invalid URL), it’s caught and handled in the `catch` block.

---

### Key Points

- **`fetch()`**: Initiates an HTTP request and returns a Promise that resolves to a Response object.
- **Response status**: Always check if the response was successful using `response.ok` or `response.status`.
- **Parsing JSON**: Use `response.json()` to convert the raw response into usable JSON data.
- **Error handling**: Handle errors gracefully using `.catch()` or `try...catch` in async functions.

This sets the foundation for working with **the Fetch API**. We’ll soon cover how to use `fetch()` with other HTTP methods like **POST**, **PUT**, and **DELETE** to interact with a server in different ways.

---

## 5. Making API Calls with Different HTTP Methods

When interacting with a server, you’ll often need to perform various actions such as retrieving, creating, updating, or deleting data. HTTP methods define the type of operation you're performing with a server through API calls. In this section, we’ll explore the most common methods: **GET**, **POST**, **PUT**, **PATCH**, and **DELETE**.

Each method has a specific role:

- **GET**: Retrieve data.
- **POST**: Send data (often used for creating new entries).
- **PUT**: Update or completely replace an existing entry.
- **PATCH**: Partially update an entry.
- **DELETE**: Remove data.

We will also dive into how to add **headers** and **body data** to these requests using the **options object** in `fetch()`.

---

### GET Requests (Retrieving Data)

As mentioned earlier, a `fetch()` call defaults to a **GET** request. This is used to retrieve data from a server.

#### Basic GET Example

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

Here, you're fetching a list of posts, parsing the response as JSON, and logging the result.

---

### POST Requests (Creating Data)

**POST** requests are used to send data to the server, typically to create new records. In a POST request, you often need to send a **body** that contains the data you want to create. This is done through the options object passed to `fetch()`.

#### POST Example

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is the content of the new post.",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Created Post:", data))
  .catch((error) => console.error("Error:", error));
```

- **method**: Specifies the HTTP method (`POST` in this case).
- **headers**: Adds the required headers for the request (like specifying that the body content is JSON).
- **body**: Contains the data being sent to the server. It must be serialized to JSON format using `JSON.stringify()`.

---

### PUT Requests (Updating Data)

A **PUT** request is used to update or completely replace an existing resource. Like `POST`, it also requires a **body** containing the data to be updated.

#### PUT Example

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated Post",
    body: "This is the updated content.",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Updated Post:", data))
  .catch((error) => console.error("Error:", error));
```

In a **PUT** request:

- The existing resource (post with id `1`) is replaced with the new data.

---

### PATCH Requests (Partially Updating Data)

A **PATCH** request is used when you only want to modify a part of an existing resource rather than replacing the whole thing.

#### PATCH Example

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Partially Updated Post",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Partially Updated Post:", data))
  .catch((error) => console.error("Error:", error));
```

In this example, only the **title** of the post is updated, leaving the rest of the post unchanged.

---

### DELETE Requests (Removing Data)

A **DELETE** request is used to remove a resource from the server. DELETE requests usually don’t have a body, as you’re just specifying which resource to remove.

#### DELETE Example

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) {
      console.log("Deleted Post");
    } else {
      console.error("Failed to delete post");
    }
  })
  .catch((error) => console.error("Error:", error));
```

In this example, the post with id `1` is deleted if the request is successful.

---

### The Options Object

For requests like **POST**, **PUT**, **PATCH**, and **DELETE**, you can configure your `fetch()` call using an **options object**. This object contains properties like:

- **method**: Specifies the HTTP method.
- **headers**: Contains any additional information needed (e.g., content type).
- **body**: The data being sent, usually in JSON format.

#### Common Headers

- **Content-Type**: Indicates the media type of the resource (e.g., `application/json` for JSON data).
- **Authorization**: Used for authentication and authorization (e.g., sending API keys).

Example headers:

```javascript
headers: {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer your_token_here',
}
```

---

### Key Takeaways

- Use **GET** to retrieve data.
- Use **POST** to send new data and create new resources.
- Use **PUT** to completely replace an existing resource.
- Use **PATCH** to partially update a resource.
- Use **DELETE** to remove data from the server.
- Always specify **headers** and **body** when required (for `POST`, `PUT`, `PATCH`).
- The **options object** allows for flexible configuration of HTTP requests.

This overview gives you the foundation to make different types of API calls with `fetch()`.

---

## 6. Handling Errors, Loading States, and Aborting Calls

When making API requests, things don’t always go smoothly. You might encounter network errors, invalid responses, or situations where requests take too long. It’s essential to handle these cases to ensure your app remains responsive and user-friendly.

In this section, we will:

- Detect and handle network errors.
- Check the response status to manage both successful and failed requests.
- Implement loading states to provide feedback to users during slow operations.
- Learn how to abort fetch calls using the `AbortController`.

---

### Network Errors

When making a `fetch` request, it’s possible that the request might fail due to a network error (e.g., no internet connection). In these cases, the `fetch()` call will **reject** the promise, and you can handle this by using `.catch()`.

#### Handling Network Errors

```javascript
fetch("https://example.com/data")
  .then((response) => response.json())
  .then((data) => console.log("Data:", data))
  .catch((error) => {
    console.error("Network Error:", error);
    alert("Failed to load data. Please check your connection.");
  });
```

In this case, any network issue (like being offline or the server not responding) will trigger the `.catch()` block.

---

### Response Status Codes

Even if the network request succeeds, the server might return a status indicating an error (e.g., 404 Not Found, 500 Internal Server Error). By default, `fetch()` does **not throw an error** for these response codes. It’s your job to check the **status code** in the response and handle errors accordingly.

#### Checking Response Status

```javascript
fetch("https://example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log("Data:", data))
  .catch((error) => {
    console.error("Error:", error);
    alert("Failed to load data. Server responded with an error.");
  });
```

- **response.ok**: A convenience property that checks if the status code is between 200 and 299 (successful responses).
- **response.status**: Returns the actual HTTP status code, such as 404 or 500.

In the example above, if the response isn’t **ok**, we manually throw an error, which gets caught in the `.catch()` block.

---

### Loading States

While waiting for data to load, it’s good UX practice to show a **loading indicator** to let users know that something is happening in the background.

#### Implementing a Loading State

Here’s how you can add a loading state to a fetch request:

```javascript
const loadingIndicator = document.getElementById("loading");
const dataContainer = document.getElementById("data");

// Show loading indicator
loadingIndicator.style.display = "block";

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Hide loading indicator
    loadingIndicator.style.display = "none";
    dataContainer.innerHTML = JSON.stringify(data);
  })
  .catch((error) => {
    // Hide loading indicator
    loadingIndicator.style.display = "none";
    console.error("Error:", error);
  });
```

- **loadingIndicator**: A simple DOM element (like a spinner) that gets displayed while the request is in progress.
- **style.display**: Set to `'block'` to show the loading spinner and `'none'` to hide it once the request completes.

This provides visual feedback that data is being fetched, which improves user experience, especially with slower requests.

---

### Aborting Fetch Calls

Sometimes, a request takes too long, or you want to cancel it based on some user action (e.g., navigating away from the page). The **AbortController** API allows you to **abort fetch requests**.

#### Using AbortController

```javascript
const controller = new AbortController();
const signal = controller.signal;

// Start the fetch request
fetch("https://jsonplaceholder.typicode.com/posts", { signal })
  .then((response) => response.json())
  .then((data) => console.log("Data:", data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Fetch request was aborted");
    } else {
      console.error("Error:", error);
    }
  });

// Abort the fetch request after 2 seconds
setTimeout(() => controller.abort(), 2000);
```

In this example:

- **AbortController** creates a controller that can be used to abort one or more requests.
- We pass its **signal** to the fetch request.
- After 2 seconds, the **abort()** method is called, canceling the request.
- When the fetch is aborted, a special **AbortError** is thrown, which can be caught and handled.

---

### Combining Error Handling, Loading States, and Aborting Requests

Here's a more comprehensive example that combines all these concepts:

```javascript
const loadingIndicator = document.getElementById("loading");
const dataContainer = document.getElementById("data");
const controller = new AbortController();
const signal = controller.signal;

// Show loading state
loadingIndicator.style.display = "block";

// Start fetch request
fetch("https://jsonplaceholder.typicode.com/posts", { signal })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Hide loading state
    loadingIndicator.style.display = "none";
    dataContainer.innerHTML = JSON.stringify(data);
  })
  .catch((error) => {
    // Hide loading state
    loadingIndicator.style.display = "none";
    if (error.name === "AbortError") {
      console.log("Fetch request was aborted");
    } else {
      console.error("Error:", error);
    }
  });

// Abort the fetch after 3 seconds if it takes too long
setTimeout(() => controller.abort(), 3000);
```

In this example:

- The loading spinner is shown at the start and hidden once the request completes.
- If the request takes more than 3 seconds, it is aborted using the **AbortController**.
- Network and server errors are handled gracefully.

---

### Key Takeaways

- Handle **network errors** using `.catch()` to ensure smooth app behavior even when a request fails.
- Check **response status** to identify server errors (like 404 or 500) and take appropriate actions.
- Use **loading states** to give users feedback while they wait for data.
- **Abort fetch requests** when necessary using the **AbortController**, especially in cases where requests take too long or the user cancels the action.

Handling these scenarios ensures your app remains responsive and user-friendly under various circumstances.

---

## Summary: Asynchronous JavaScript & Fetch API

In this unit, we explored the fundamentals of **asynchronous JavaScript** and how to effectively work with the **Fetch API** to handle various web-related tasks. Let’s recap the key takeaways from each section:

---

### Introduction to Asynchronous JavaScript

- **Synchronous vs Asynchronous**: We distinguished between synchronous code (blocking) and asynchronous code (non-blocking), highlighting the need for async behavior in JavaScript.
- **Event Loop**: The event loop is crucial for handling asynchronous tasks by managing the queue of tasks that need to run after other code finishes.
- **Callbacks**: We introduced callbacks as the foundation for handling asynchronous code, using functions like `setTimeout` to simulate delays.

---

### Promises

- **What are Promises**: Promises provide a cleaner and more powerful way to handle async operations than callbacks.
- **Promise States**: We examined the three states of a promise: pending, resolved (fulfilled), and rejected.
- **Chaining with `.then()` and `.catch()`**: We learned how to chain promises together and handle errors with `.catch()`, making our asynchronous flows more readable and structured.
- **Promise Constructor**: Using the `Promise` constructor, we created promises manually and handled success or failure with chaining.

---

### Async/Await

- **Async/Await Syntax**: We simplified promise handling with `async` functions, allowing us to write asynchronous code that looks more like synchronous code using `await`.
- **Error Handling with Try/Catch**: Unlike `.catch()`, we used `try/catch` blocks within `async` functions for more intuitive error handling, particularly for complex logic.
- **Comparison with `.then()`/`.catch()`**: We discussed the differences and trade-offs between `async/await` and promise chaining, noting the cleaner structure of `async/await`.

---

### The Fetch API

- **Introduction to Fetch**: We explored the Fetch API as a modern way to make HTTP requests in JavaScript, replacing older mechanisms like `XMLHttpRequest`.
- **Basic GET Requests**: We learned to make GET requests using `fetch()` and handle the returned promises.
- **Parsing JSON**: Fetch responses can be easily converted into usable data (like JSON) by calling `.json()` on the response object.
- **Handling Responses**: We emphasized the importance of checking response status codes and only processing responses when they are successful.

---

### Making API Calls with Different HTTP Methods

- **HTTP Methods**: We covered the different types of HTTP methods (GET, POST, PUT, PATCH, DELETE) and their use cases in web applications.
- **Options Object**: We examined the options object used in `fetch()` to customize requests, including setting HTTP methods, headers, and request body.
- **Sending Data with POST/PUT**: We explored how to send data with POST or PUT requests by including payloads in the request body, typically in JSON format.

---

### Handling Errors, Loading States, and Aborting Calls

- **Error Handling**: We looked at how to manage network and server errors by checking response statuses and using `.catch()` for rejected promises.
- **Loading States**: For improved user experience, we learned how to implement loading indicators while waiting for data to load.
- **Aborting Fetch Requests**: Using `AbortController`, we introduced a way to cancel ongoing fetch requests, especially when they take too long or the user cancels the action.

---

### Final Thoughts

This unit built the foundation for understanding and working with asynchronous code in JavaScript. We focused on making HTTP requests, handling responses, and improving the robustness of web applications with proper error handling, loading states, and request cancellation.

By mastering these concepts, you are now well-prepared to build interactive and responsive web applications that communicate effectively with APIs. Whether it’s fetching data or managing updates on a server, asynchronous JavaScript is an essential tool for any modern developer.
