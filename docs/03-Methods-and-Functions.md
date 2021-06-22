## Functions

<dl>
<dt><a href="#helloWorld">helloWorld()</a> ⇒ <code>String</code></dt>
<dd><p>#1: helloWorld</p>
<p>Define the function helloWorld.
helloWorld takes no inputs and returns the phrase &quot;Hello World!&quot;</p>
</dd>
<dt><a href="#helloWorldRedux">helloWorldRedux(name)</a> ⇒ <code>String</code></dt>
<dd><p>#2: helloWorldRedux</p>
<p>Define the function helloWorldRedux.
helloWorldRedux takes in an optional input, name.
When a name value is passed, return a personalized greeting using the name.
Otherwise, return the phrase &quot;Hello World!&quot;</p>
<p>CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!</p>
</dd>
<dt><a href="#uppercaseThis">uppercaseThis(phrase)</a> ⇒ <code>String</code></dt>
<dd><p>#3: uppercaseThis</p>
<p>Define the function uppercaseThis.
uppercaseThis takes in one input, phrase, a String of any length.
uppercaseThis returns phrase fully capitalized.</p>
<p>CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!</p>
</dd>
<dt><a href="#doesItAddUp">doesItAddUp(numA, numB, numC)</a> ⇒ <code>Boolean</code></dt>
<dd><p>#4: doesItAddUp</p>
<p>Define the function doesItAddUp.
doesItAddUp accepts three number inputs.
doesItAddUp returns true when the first two inputs add up to the third.
Otherwise, doesItAddUp returns false.</p>
<p>CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!</p>
</dd>
<dt><a href="#arrayToString">arrayToString(array, connector)</a> ⇒ <code>String</code></dt>
<dd><p>#5: arrayToString</p>
<p>Define the function arrayToString.
arrayToString accepts an array containing any number of strings of any length, and a connector, a string made up of any number of random characters.
arrayToString returns a combined string made up of each string in the array attached together by the connector.</p>
<p>CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!</p>
</dd>
<dt><a href="#smallTogetherNow">smallTogetherNow(str1, str2)</a> ⇒ <code>String</code></dt>
<dd><p>#6: smallTogetherNow</p>
<p>Define the function smallTogetherNow.
smallTogetherNow accepts two strings of any length.
smallTogetherNow returns a single string, the combination of both input strings converted to all lowercase.</p>
<p>CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!</p>
</dd>
<dt><a href="#dogAndOwnerInfo">dogAndOwnerInfo(dogName, dogAge, ownerName, ownerAge)</a> ⇒ <code>String</code></dt>
<dd><p>#7: Dog owners and their dogs</p>
<p>Define the function dogAndOwnerInfo.
dogAndOwnerInfo takes in four inputs:</p>
<ul>
<li>the dog&#39;s name</li>
<li>the dog&#39;s age</li>
<li>the dog owner&#39;s name</li>
<li>the dog owner&#39;s age</li>
</ul>
<p>dogAndOwnerInfo converts the dog&#39;s age to human years by multiplying it by 7.</p>
</dd>
<dt><a href="#doesTheMathWork">doesTheMathWork(numA, numB, numC)</a> ⇒ <code>String</code></dt>
<dd><p>#8: doesTheMathWork</p>
<p>Define the function doesTheMathWork.
doesTheMathWork accept three inputs, each a number.
doesTheMathWork returns a phrase based on the following:</p>
<ul>
<li>first input + second input = third input -&gt; &quot;addition&quot;</li>
<li>first input - second input = third input -&gt; &quot;subtraction&quot;</li>
<li>first input * second input = third input -&gt; &quot;multiplication&quot;</li>
<li>first input / second input = third input -&gt; &quot;division&quot;</li>
<li>none of the above -&gt; &quot;no operation&quot;</li>
</ul>
<p>NOTE:
Each set of three inputs resolves to only ONE of the given possible outputs.</p>
</dd>
<dt><a href="#allWordsLength">allWordsLength(wordsArr)</a> ⇒ <code>Number</code></dt>
<dd><p>#9: allWordsLength</p>
<p>Define the function allWordsLength.
allWordsLength accepts an array containing any number of strings, each of any length.
allWordsLength returns the total length of all the strings in the array.</p>
<p>HINT: If you&#39;re familiar with loops, you might be tempted to try using one here. You can solve this with a loop, but it&#39;s not the most direct solution. Think about how you can go from your starting data type to the desired output data type. What built-in methods can you use here to help out?</p>
<p>CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!</p>
</dd>
</dl>

<a name="helloWorld"></a>

## helloWorld() ⇒ <code>String</code>
#1: helloWorld

Define the function helloWorld.
helloWorld takes no inputs and returns the phrase "Hello World!"

**Kind**: global function  
**Category**: 03 - Methods and Functions  
**Example**  
```js
helloWorld() => "Hello World!"
```
<a name="helloWorldRedux"></a>

## helloWorldRedux(name) ⇒ <code>String</code>
#2: helloWorldRedux

Define the function helloWorldRedux.
helloWorldRedux takes in an optional input, name.
When a name value is passed, return a personalized greeting using the name.
Otherwise, return the phrase "Hello World!"

CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!

**Kind**: global function  
**Category**: 03 - Methods and Functions  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | optional name input |

**Example**  
```js
helloWorldRedux() => "Hello World!"
helloWorldRedux("Bob") => "Hello Bob!"
```
<a name="uppercaseThis"></a>

## uppercaseThis(phrase) ⇒ <code>String</code>
#3: uppercaseThis

Define the function uppercaseThis.
uppercaseThis takes in one input, phrase, a String of any length.
uppercaseThis returns phrase fully capitalized.

CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!

**Kind**: global function  
**Returns**: <code>String</code> - fully capitalized string  
**Category**: 03 - Methods and Functions  
**See**: [.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)  

| Param | Type | Description |
| --- | --- | --- |
| phrase | <code>String</code> | string to be all-capped |

**Example**  
```js
uppercaseThis("aaaa") => "AAAA"
uppercaseThis("BBBB") => "BBBB"
uppercaseThis("cCcC") => "CCCC"
uppercaseThis("d1D2d3") => "D1D2D3"
```
<a name="doesItAddUp"></a>

## doesItAddUp(numA, numB, numC) ⇒ <code>Boolean</code>
#4: doesItAddUp

Define the function doesItAddUp.
doesItAddUp accepts three number inputs.
doesItAddUp returns true when the first two inputs add up to the third.
Otherwise, doesItAddUp returns false.

CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!

**Kind**: global function  
**Category**: 03 - Methods and Functions  

| Param | Type |
| --- | --- |
| numA | <code>Number</code> | 
| numB | <code>Number</code> | 
| numC | <code>Number</code> | 

**Example**  
```js
doesItAddUp(10, 5, 15) => true
doesItAddUp(10, 5, 20) => false
```
<a name="arrayToString"></a>

## arrayToString(array, connector) ⇒ <code>String</code>
#5: arrayToString

Define the function arrayToString.
arrayToString accepts an array containing any number of strings of any length, and a connector, a string made up of any number of random characters.
arrayToString returns a combined string made up of each string in the array attached together by the connector.

CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!

**Kind**: global function  
**Category**: 03 - Methods and Functions  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;String&gt;</code> | all entries are strings |
| connector | <code>String</code> | any number random characters |

**Example**  
```js
arrayToString(["cat", "dog", "moo"], "") => "catdogmoo"
arrayToString(["cat", "dog", "moo"], " ") => "cat dog moo"
arrayToString(["cat", "dog", "moo"], "+-%") => "cat+-%dog+-%moo"
```
<a name="smallTogetherNow"></a>

## smallTogetherNow(str1, str2) ⇒ <code>String</code>
#6: smallTogetherNow

Define the function smallTogetherNow.
smallTogetherNow accepts two strings of any length.
smallTogetherNow returns a single string, the combination of both input strings converted to all lowercase.

CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!

**Kind**: global function  
**Category**: 03 - Methods and Functions  
**See**

- [.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)


| Param | Type |
| --- | --- |
| str1 | <code>String</code> | 
| str2 | <code>String</code> | 

**Example**  
```js
smallTogetherNow("HELLO", "WORLD") => "helloworld"
smallTogetherNow("apple", pie) => "applepie"
smallTogetherNow("mIxEd", "CaPiTaLs") => "mixedcapitals"
```
<a name="dogAndOwnerInfo"></a>

## dogAndOwnerInfo(dogName, dogAge, ownerName, ownerAge) ⇒ <code>String</code>
#7: Dog owners and their dogs

Define the function dogAndOwnerInfo.
dogAndOwnerInfo takes in four inputs:
- the dog's name
- the dog's age
- the dog owner's name
- the dog owner's age

dogAndOwnerInfo converts the dog's age to human years by multiplying it by 7.

**Kind**: global function  
**Category**: 03 - Methods and Functions  

| Param | Type |
| --- | --- |
| dogName | <code>String</code> | 
| dogAge | <code>Number</code> | 
| ownerName | <code>String</code> | 
| ownerAge | <code>Number</code> | 

**Example**  
```js
dogAndOwnerInfo("Turbo", 10, "Richard", 55) =>
   "Turbo is older than their owner, Richard, by 15 years."
dogAndOwnerInfo("Fido", 1, "Sara", 15) =>
   "Sara is older than their dog, Fido, by 8 years."
dogAndOwnerInfo("Star", 2, "John", 14) =>
   "John and Star are the both 14 years old."
```
<a name="doesTheMathWork"></a>

## doesTheMathWork(numA, numB, numC) ⇒ <code>String</code>
#8: doesTheMathWork

Define the function doesTheMathWork.
doesTheMathWork accept three inputs, each a number.
doesTheMathWork returns a phrase based on the following:
- first input + second input = third input -> "addition"
- first input - second input = third input -> "subtraction"
- first input * second input = third input -> "multiplication"
- first input / second input = third input -> "division"
- none of the above -> "no operation"

NOTE:
Each set of three inputs resolves to only ONE of the given possible outputs.

**Kind**: global function  
**Category**: 03 - Methods and Functions  

| Param | Type |
| --- | --- |
| numA | <code>Number</code> | 
| numB | <code>Number</code> | 
| numC | <code>Number</code> | 

**Example**  
```js
doesTheMathWork(1, 2, 3) => "addition"
doesTheMathWork(7, 2, 5) => "subtraction"
doesTheMathWork(3, 3, 9) => "multiplication"
doesTheMathWork(81, 9, 9) => "division"
doesTheMathWork(11, 222, 3) = "no operation"
```
<a name="allWordsLength"></a>

## allWordsLength(wordsArr) ⇒ <code>Number</code>
#9: allWordsLength

Define the function allWordsLength.
allWordsLength accepts an array containing any number of strings, each of any length.
allWordsLength returns the total length of all the strings in the array.

HINT: If you're familiar with loops, you might be tempted to try using one here. You can solve this with a loop, but it's not the most direct solution. Think about how you can go from your starting data type to the desired output data type. What built-in methods can you use here to help out?

CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!

**Kind**: global function  
**Category**: 03 - Methods and Functions  
**See**

- [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


| Param | Type |
| --- | --- |
| wordsArr | <code>Array.&lt;String&gt;</code> | 

**Example**  
```js
allWordsLength(["apple"]) => 5
allWordsLength(["old", "textbook"]) => 11  (3 + 8)
allWordsLength(["cat", "dog", "moo"]) => 9 (3 + 3 + 3)
allWordsLength(["robin", "hood", "men", "in", "tights"]) => 19 (5 + 4 + 3 + 2 + 5)
```
