<a name="fizzBuzz"></a>

## fizzBuzz(stopNum) ⇒ <code>Array.&lt;String&gt;</code>
#11: fizzBuzz

Define the function fizzBuzz.
fizzBuzz accepts a number parameter, stop.
fizzBuzz returns an array where every number from 1 to stop is added as a string.
If the current number is divisible by 3, add "Fizz" to the array instead of the number.
If the current number is divisible by 4, add "Buzz" to the array instead of the number.
If the current number is divisible by both 3 and 4, add "FizzBuzz" to the array.

**Kind**: global function  
**Returns**: <code>Array.&lt;String&gt;</code> - an array of strings  
**Category**: 04 - Arrays and Loops  

| Param | Type | Description |
| --- | --- | --- |
| stopNum | <code>Number</code> | the number to stop the loop at (inclusive) |

**Example**  
```js
fizzBuzz(12) => ["1", "2", "Fizz", "Buzz", "5", "Fizz", "7", "Buzz", "Fizz", "10", "11", "FizzBuzz"]
```
