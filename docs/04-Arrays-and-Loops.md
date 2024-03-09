## Functions

<dl>
<dt><a href="#measurer">measurer(...arr)</a> ⇒ <code>Number</code></dt>
<dd><p>#1: measurer</p>
<p>CHALLENGE: measurer can be written as a one-liner.</p>
</dd>
<dt><a href="#indexer">indexer(arr, index)</a> ⇒ <code>*</code></dt>
<dd><p>#2: indexer</p>
<p>CHALLENGE: indexer can be written as a one-liner.</p>
</dd>
<dt><a href="#frontOrBack">frontOrBack(...array, place, action, value)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>#3: frontOrBack</p>
<p>Define the function frontOrBack.
frontOr back accepts an array, a place, an action, and a value.</p>
</dd>
<dt><a href="#repeater">repeater(str, times)</a> ⇒ <code>String</code></dt>
<dd><p>#4: repeater</p>
<p>Define the function repeater.
repeater accepts a string and a number.
repeater returns a string that is the input string repeated <code>times</code> number of times.</p>
</dd>
<dt><a href="#disemvoweler">disemvoweler(string)</a> ⇒ <code>String</code></dt>
<dd><p>#5: disemvoweler</p>
<p>Define the function disemvoweler.
disemvoweler takes in a string and returns it stripped of its vowels.
BONUS: disemvoweler strips the input string of any capitalized vowels present.</p>
</dd>
<dt><a href="#valueLocator">valueLocator(searchValue, arr)</a> ⇒ <code>String</code></dt>
<dd><p>#6: valueLocator</p>
</dd>
<dt><a href="#reversomatic">reversomatic(array)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>#7: reversomatic</p>
<p>Define the function reversomatic.
reversomatic adds the array&#39;s elements to the end of a new array, one at a time.
When reversomatic encounters the string &quot;reverse&quot;, reversomatic switches so that from the next element in the array, it adds them to front instead of the back.</p>
<p>NB:
Not every input array may contain a &quot;reverse&quot; string.
Input arrays will contain at most ONE (1) &quot;reverse&quot; string, if present.</p>
</dd>
<dt><a href="#uniquesOnly">uniquesOnly(inputStr)</a> ⇒ <code>Array.&lt;String&gt;</code></dt>
<dd><p>#8: uniquesOnly</p>
<p>Define the function uniquesOnly.
uniquesOnly accepts an string and returns an array. Each entry in the array is one of the unique characters from the input string.</p>
</dd>
<dt><a href="#wordCalculator">wordCalculator(nums, operations)</a> ⇒ <code>Number</code></dt>
<dd><p>#9: wordCalculator</p>
<p>Define the function wordCalculator.
wordCalculator accepts an array of numbers and an array of strings, each representing a math operation.
wordCalculator has an initial value of 0 and only accepts the valid math operations: &quot;add&quot;, &quot;sub&quot;, &quot;mult&quot;, and &quot;div&quot;.
wordCalculator returns the total of all the values and operations passed into it.</p>
<p>NOTE:
The nums and operations arrays will always be the same .length</p>
</dd>
<dt><a href="#pairMultiplier">pairMultiplier(arr1, arr2)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>#10: pairMultiplier</p>
<p>Define the function pairMultiplier.
pairMultiplier accepts two arrays of numbers.
pairMultiplier returns an array of numbers made up of all the numbers from arr1 multiplied by all the numbers in arr2.</p>
<p>NB: arr1 and arr2 will not always be the same length.</p>
</dd>
<dt><a href="#fizzBuzz">fizzBuzz(stopNum)</a> ⇒ <code>Array.&lt;String&gt;</code></dt>
<dd><p>#11: fizzBuzz</p>
<p>Define the function fizzBuzz.
fizzBuzz accepts a number parameter, stop.
fizzBuzz returns an array where every number from 1 to stop is added as a string.
If the current number is divisible by 3, add &quot;Fizz&quot; to the array instead of the number.
If the current number is divisible by 4, add &quot;Buzz&quot; to the array instead of the number.
If the current number is divisible by both 3 and 4, add &quot;FizzBuzz&quot; to the array.</p>
</dd>
</dl>

<a name="measurer"></a>

## measurer(...arr) ⇒ <code>Number</code>

#1: measurer

CHALLENGE: measurer can be written as a one-liner.

**Kind**: global function
**Returns**: <code>Number</code> - The length of the array.
**Category**: 04 - Arrays and Loops

| Param  | Type                              | Description                                      |
| ------ | --------------------------------- | ------------------------------------------------ |
| ...arr | <code>Array.&lt;Number&gt;</code> | Always at least one number in the sample arrays/ |

**Example**

```js
measurer([1]) => 1
measurer([1,3,5,7,9]) => 5
measurer(["abc", true, { "a": 1, "b": 2 } ]) => 3
```

<a name="indexer"></a>

## indexer(arr, index) ⇒ <code>\*</code>

#2: indexer

CHALLENGE: indexer can be written as a one-liner.

**Kind**: global function
**Returns**: <code>\*</code> - When index is defined, indexer returns the value stored. Otherwise, indexer returns the first value in the array.
**Category**: 04 - Arrays and Loops

| Param | Type                | Description                                         |
| ----- | ------------------- | --------------------------------------------------- |
| arr   | <code>Array</code>  | array of any length, containing entries of any type |
| index | <code>Number</code> | optional number                                     |

**Example**

```js
indexer([1], 0) => 1
indexer([1, 3, "value", 7, 9 ], 2) => "value"
indexer([false, 2, "string"]) => false
```

<a name="frontOrBack"></a>

## frontOrBack(...array, place, action, value) ⇒ <code>Array.&lt;Number&gt;</code>

#3: frontOrBack

Define the function frontOrBack.
frontOr back accepts an array, a place, an action, and a value.

**Kind**: global function
**Category**: 04 - Arrays and Loops

| Param    | Type                              | Description                                     |
| -------- | --------------------------------- | ----------------------------------------------- |
| ...array | <code>Array.&lt;Number&gt;</code> | an array containing at least one number         |
| place    | <code>String</code>               | one of `"front"` or `"back"`                    |
| action   | <code>String</code>               | one of `"add"` or `"remove"`                    |
| value    | <code>Number</code>               | value to use when processing the input commands |

**Example**

```js
const array = [1, 2, 3, 4];

frontOrBack(array, "front", "add", 5) => [5, 1, 2, 3, 4];
frontOrBack(array, "back", "add", 5) => [1, 2, 3, 4, 5];
frontOrBack(array, "front", "remove", 5) => [2, 3, 4];
frontOrBack(array, "back", "remove", 5) => [1, 2, 3];
```

<a name="repeater"></a>

## repeater(str, times) ⇒ <code>String</code>

#4: repeater

Define the function repeater.
repeater accepts a string and a number.
repeater returns a string that is the input string repeated `times` number of times.

**Kind**: global function
**Returns**: <code>String</code> - the input string repeated `times` number
**Category**: 04 - Arrays and Loops

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| str   | <code>String</code> | the input string |
| times | <code>Number</code> | always >= 0      |

**Example**

```js
repeater("empty string", 0) => ""
repeater("one time only", 1) => "one time only"
repeater("Hello", 2) => "HelloHello"
repeater("abc123", 3) => "abc123abc123abc123"
```

<a name="disemvoweler"></a>

## disemvoweler(string) ⇒ <code>String</code>

#5: disemvoweler

Define the function disemvoweler.
disemvoweler takes in a string and returns it stripped of its vowels.
BONUS: disemvoweler strips the input string of any capitalized vowels present.

**Kind**: global function
**Returns**: <code>String</code> - the input string with all its vowels removed
**Category**: 04 - Arrays and Loops

| Param  | Type                | Description      |
| ------ | ------------------- | ---------------- |
| string | <code>String</code> | the input string |

**Example**

```js
disemvoweler("b") => "b"
disemvoweler("xyz") => "xyz"
disemvoweler("a") => ""
disemvoweler("cr") => "cr"
disemvoweler("dictionary") => "dctnry"
disemvoweler("aaeeiioouu") => ""

// BONUS
disemvoweler("BeaR") => "BR"
disemvoweler("diCTIONAry") => "dCTNry"
```

<a name="valueLocator"></a>

## valueLocator(searchValue, arr) ⇒ <code>String</code>

#6: valueLocator

**Kind**: global function
**Returns**: <code>String</code> - A sentence detailing whether or not the search value was found, and at what index.
**Category**: 04 - Arrays and Loops

| Param       | Type                              | Description                |
| ----------- | --------------------------------- | -------------------------- |
| searchValue | <code>String</code>               | the string to search for   |
| arr         | <code>Array.&lt;String&gt;</code> | the array to search within |

**Example**

```js
valueLocator("xyx", ["zyz", "xyx", "abc", "bd"]) =>
 "xyx is at index 1 of the array [zyz,xyx,abc,bd]."
valueLocator("not", ["zyz", "xyx", "abc", "bd"]) =>
 "not cannot be found in the array [zyz,xyx,abc,bd]."
```

<a name="reversomatic"></a>

## reversomatic(array) ⇒ <code>Array.&lt;Number&gt;</code>

#7: reversomatic

Define the function reversomatic.
reversomatic adds the array's elements to the end of a new array, one at a time.
When reversomatic encounters the string "flip", reversomatic switches so that from the next element in the array, it adds them to front instead of the back.

NB:
Not every input array may contain a "flip" string.
Input arrays will contain at most ONE (1) "flip" string, if present.

**Kind**: global function
**Returns**: <code>Array.&lt;Number&gt;</code> - array of entries that have been properly added to the new array
**Category**: 04 - Arrays and Loops

| Param | Type                                                      | Description                                               |
| ----- | --------------------------------------------------------- | --------------------------------------------------------- |
| array | <code>Number</code> \| <code>?Array.&lt;String&gt;</code> | an array of at least size 1, made of entries of any type. |

**Example**

```js
reversomatic([1, 2, 3, 4, 5]) => [1, 2, 3, 4, 5]
reversomatic([["flip", 1, 2, 3, 4, 5]]) => [5, 4, 3, 2, 1]
reversomatic([1, 2, "flip", 3, 4, 5]) => [5, 4, 3, 1, 2]
reversomatic([1, 2, 3, 4, 5, "flip"]) => [1, 2, 3, 4, 5]
```

<a name="uniquesOnly"></a>

## uniquesOnly(inputStr) ⇒ <code>Array.&lt;String&gt;</code>

#8: uniquesOnly

Define the function uniquesOnly.
uniquesOnly accepts an string and returns an array. Each entry in the array is one of the unique characters from the input string.

**Kind**: global function
**Category**: 04 - Arrays and Loops

| Param    | Type                | Description                                               |
| -------- | ------------------- | --------------------------------------------------------- |
| inputStr | <code>String</code> | string made up of random characters with possible repeats |

**Example**

```js
uniquesOnly("a") => ['a']
uniquesOnly("aaa") => ['a']
uniquesOnly("abc") => ['a', 'b', 'c']
uniquesOnly("abcbabcbabcbabcba") => ['a', 'b', 'c']
```

<a name="wordCalculator"></a>

## wordCalculator(nums, operations) ⇒ <code>Number</code>

#9: wordCalculator

Define the function wordCalculator.
wordCalculator accepts an array of numbers and an array of strings, each representing a math operation.
wordCalculator has an initial value of 0 and only accepts the valid math operations: "add", "sub", "mult", and "div".
wordCalculator returns the total of all the values and operations passed into it.

NOTE:
The nums and operations arrays will always be the same .length

**Kind**: global function
**Returns**: <code>Number</code> - resulting value after all operations have been computed
**Category**: 04 - Arrays and Loops

| Param      | Type                              | Description                                                              |
| ---------- | --------------------------------- | ------------------------------------------------------------------------ |
| nums       | <code>Array.&lt;Number&gt;</code> | array of numbers; nums.length always >= 1                                |
| operations | <code>Array.&lt;String&gt;</code> | array of strings, representing operations; operations.length always >= 1 |

**Example**

```js
wordCalculator([1], ["nope"]) => 0
wordCalculator([1], ["add"]) => 1
wordCalculator([2], ["sub"]) => 2
wordCalculator([3], ["mult"]) => 2
wordCalculator([5, 6], ["add", "mult"]) => 30
wordCalculator([7, 11, 12], ["sub", "mult", "add"]) => -65
```

<a name="pairMultiplier"></a>

## pairMultiplier(arr1, arr2) ⇒ <code>Array.&lt;Number&gt;</code>

#10: pairMultiplier

Define the function pairMultiplier.
pairMultiplier accepts two arrays of numbers.
pairMultiplier returns an array of numbers made up of all the numbers from arr1 multiplied by all the numbers in arr2.

NB: arr1 and arr2 will not always be the same length.

**Kind**: global function
**Returns**: <code>Array.&lt;Number&gt;</code> - array of all the multiples of each entry from arr1 and arr2, in the correct order.
**Category**: 04 - Arrays and Loops

| Param | Type                              | Description                              |
| ----- | --------------------------------- | ---------------------------------------- |
| arr1  | <code>Array.&lt;Number&gt;</code> | array of numbers; arr1.length always > 1 |
| arr2  | <code>Array.&lt;Number&gt;</code> | array of numbers; arr2.length always > 1 |

**Example**

```js
pairMultiplier([6],[4]) => [24]
pairMultiplier([7], [2, 3]) => [14, 21]
pairMultiplier([3, 8], [5, 2]) => [15, 6, 40, 16]
pairMultiplier([3, 5, 8], [2, 4]) => [6, 12, 10, 20, 16, 32]
```

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

| Param   | Type                | Description                                |
| ------- | ------------------- | ------------------------------------------ |
| stopNum | <code>Number</code> | the number to stop the loop at (inclusive) |

**Example**

```js
fizzBuzz(12) => ["1", "2", "Fizz", "Buzz", "5", "Fizz", "7", "Buzz", "Fizz", "10", "11", "FizzBuzz"]
```
