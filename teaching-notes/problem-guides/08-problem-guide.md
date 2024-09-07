# Async/Await Problem Guide

- [Async/Await Problem Guide](#asyncawait-problem-guide)
  - [Problem List](#problem-list)
  - [Problem Breakdowns](#problem-breakdowns)
    - [1. delayGreeting](#1-delaygreeting)

## Problem List

1. delayedGreeting

## Problem Breakdowns

### 1. delayGreeting

The `delayedGreeting` function simulates a delayed greeting using `setTimeout` and introduces the concept of callbacks in asynchronous programming.

**Function:**

- `delayedGreeting` takes a name, a delay in milliseconds, and a callback function. After the specified delay, it calls the callback with a greeting message.
- The **one-liner** version condenses this logic into a single line, maintaining the same functionality.

**Example:**

```javascript
delayedGreeting("Alice", 2000, (greeting) => console.log(greeting));
// After 2 seconds, logs: "Hello, Alice!"
```
