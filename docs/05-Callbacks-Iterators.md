## Functions

<dl>
<dt><a href="#isOddNum">isOddNum(a, b, a, b, multiplyFn)</a> ⇒ <code>Number</code> | <code>String</code></dt>
<dd><p>#1: Positives &amp; Negatives</p>
<p>Define the function <code>multiplyNums</code>.
<code>multiplyNums</code> accepts two numbers and returns their multiple.</p>
<p>Define the function <code>isOddNum</code>.
<code>isOddNum</code> accepts two numbers and a function to be called within.
<code>isOddNum</code> returns a string containing <code>a</code>, <code>b</code>, and the multiple of both.
Where a times b is zero, the string reports that the multiple is zero.</p>
</dd>
<dt><a href="#startingCapsOnly">startingCapsOnly(words)</a> ⇒ <code>Array.&lt;String&gt;</code></dt>
<dd><p>Define the function <code>startingCapsOnly</code>.
<code>startingCapsOnly</code> accepts an array of Strings; the array is always .length &gt;= 1
<code>startingCapsOnly</code> returns a new array made of any words that begin with a capital letter.
Use <code>.filter</code>!</p>
</dd>
<dt><a href="#coolNumbersGetSquaredSquared">coolNumbersGetSquaredSquared(nums)</a> ⇒ <code>Array.&lt;Number&gt;</code></dt>
<dd><p>Define the function isNumberCool.
isNumberCool tells us that a number is cool if a number is an integer, that is, it has no decimal point.
Cool: 1, 4, 9
Uncool: 1.7, 3.14, 9.000001</p>
<p>Define the function coolNumbersGetSquaredSquared.
Cool numbers grow large by getting squared twice in a row.
e.g. 2 ** 2 =&gt; 4; 4 ** 2 =&gt; 16</p>
</dd>
<dt><a href="#keyValidator">keyValidator(testObj, targetObj)</a> ⇒ <code>Array.&lt;String&gt;</code></dt>
<dd><p>#4: keyValidator
Define the function keyValidator.
keyValidator accepts two objects, a testObj and a targetObj.
keyValidator compares the keys of the targetObj to the ones the testObj has.
keyValidator returns an array of all the keys, as strings, missing from the testObj.</p>
<p>If the testObj has all of the same keys as the targetObj, return the string &quot;Both objects are the same.&quot;</p>
</dd>
</dl>

<a name="isOddNum"></a>

## isOddNum(a, b, a, b, multiplyFn) ⇒ <code>Number</code> \| <code>String</code>
#1: Positives & Negatives

Define the function `multiplyNums`.
`multiplyNums` accepts two numbers and returns their multiple.

Define the function `isOddNum`.
`isOddNum` accepts two numbers and a function to be called within.
`isOddNum` returns a string containing `a`, `b`, and the multiple of both.
Where a times b is zero, the string reports that the multiple is zero.

**Kind**: global function  
**Returns**: <code>Number</code> - the result of a times b<code>String</code> - details whether the result of `multiplyFn` was a positive or negative number, or zero.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> |  |
| b | <code>Number</code> |  |
| a | <code>Number</code> |  |
| b | <code>Number</code> |  |
| multiplyFn | <code>function</code> | the function to invoke with `a` and `b`. |

**Example**  
```js
isOddNum(3, 5, multiplyNums) => "3 times 5 is a positive number."
isOddNum(-3, 5, multiplyNums) => "-3 times 5 is a negative number."
isOddNum(-3, -5, multiplyNums) => "-3 times -5 is a positive number."
isOddNum(-3, 0, multiplyNums) => "-3 times 0 is zero."
isOddNum(0, 5, multiplyNums) => "0 times 5 is zero."
```
<a name="startingCapsOnly"></a>

## startingCapsOnly(words) ⇒ <code>Array.&lt;String&gt;</code>
Define the function `startingCapsOnly`.
`startingCapsOnly` accepts an array of Strings; the array is always .length >= 1
`startingCapsOnly` returns a new array made of any words that begin with a capital letter.
Use `.filter`!

**Kind**: global function  
**See**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter  

| Param | Type |
| --- | --- |
| words | <code>Array.&lt;String&gt;</code> | 

**Example**  
```js
startingCapsOnly(["Microsoft", "Tokyo", "Charlie"]) // => ["Microsoft", "Tokyo", "Charlie"];
startingCapsOnly(["party", "car", "banana"]) // => [];
startingCapsOnly(["whOOps", "lION", "monkeY"]) // => [];
startingCapsOnly(["Microsoft", "party", "lION"]) // => ["Microsoft"]
```
<a name="coolNumbersGetSquaredSquared"></a>

## coolNumbersGetSquaredSquared(nums) ⇒ <code>Array.&lt;Number&gt;</code>
Define the function isNumberCool.
isNumberCool tells us that a number is cool if a number is an integer, that is, it has no decimal point.
Cool: 1, 4, 9
Uncool: 1.7, 3.14, 9.000001

Define the function coolNumbersGetSquaredSquared.
Cool numbers grow large by getting squared twice in a row.
e.g. 2 ** 2 => 4; 4 ** 2 => 16

**Kind**: global function  

| Param | Type |
| --- | --- |
| nums | <code>Array.&lt;Number&gt;</code> | 

<a name="keyValidator"></a>

## keyValidator(testObj, targetObj) ⇒ <code>Array.&lt;String&gt;</code>
#4: keyValidator
Define the function keyValidator.
keyValidator accepts two objects, a testObj and a targetObj.
keyValidator compares the keys of the targetObj to the ones the testObj has.
keyValidator returns an array of all the keys, as strings, missing from the testObj.

If the testObj has all of the same keys as the targetObj, return the string "Both objects are the same."

**Kind**: global function  

| Param | Type |
| --- | --- |
| testObj | <code>Object</code> | 
| targetObj | <code>Object</code> | 

