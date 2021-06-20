## Members

<dl>
<dt><a href="#notFiveChars">notFiveChars</a></dt>
<dd><p>#2: 5 characters</p>
<p>Define the variable notFiveChars.
Assign it a string that&#39;s not 5 characters long.</p>
<p>Define the variable isItFiveChars.
Assign it a ternary that checks to see if notFiveChars has length 5.</p>
<ul>
<li>True output: &quot;it&#39;s 5 characters&quot;</li>
<li>False output: &quot;not 5 characters&quot;</li>
</ul>
<p>See:
String length: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length</a>
Ternary: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator</a></p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#givenOne">givenOne</a></dt>
<dd><p>#1: Logically speaking</p>
<p>Using the four given variables below, define four new variables and assign their values as follows:</p>
<p>AND (&amp;&amp;)
a) Define andTrue. Use two of the givens and the &amp;&amp; operator so that the evaluated value is true.
b) Define andFalse. Use two of the givens and the &amp;&amp; operator so that the evaluated value is false.</p>
<p>OR (||)
c) Define orTrue. Use two of the givens and the || operator so that the evaluated value is true.
d) Define orFalse. Use two of the givens and the || operator so that the evaluated value is true.</p>
<p>See:
AND: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND</a>
OR: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR</a></p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#numberOrString">numberOrString()</a></dt>
<dd><p>#3: numberOrString</p>
<p>numberOrString is a function that accepts one input, a value of any type.
numberOrString returns the following based on these conditions:</p>
<ul>
<li>&quot;This is a string&quot; if the value is a String</li>
<li>&quot;This is a number&quot; if the value is a Number</li>
<li>&quot;This is not a string nor a number&quot; if it&#39;s neither</li>
</ul>
<p>SEE:</p>
<ul>
<li>return statement: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return</a></li>
</ul>
</dd>
<dt><a href="#truthyFalsy">truthyFalsy()</a></dt>
<dd><p>#4: truthyFalsy</p>
<p>truthyFalsy is a function that accepts one input, a value of any type.
Complete the function truthyFalsy given below by writing conditional statements in the function block that fulfill the following.</p>
<ul>
<li>value is any of the following: 0, &quot;&quot;, null, undefined, false
 -&gt; return false</li>
<li>value is anything else:
 -&gt; return true</li>
</ul>
<p>You do not need to call the function with these values; the function will be automatically tested with them.</p>
<p>Challenge:
There&#39;s a way to write this function using just one short if-statement expression.
Can you use the logical NOT (!) operator to make this function work?
See the link below for more on the logical NOT (!).</p>
<p>See:
Logical NOT (!): <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT</a>
Falsy: <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">https://developer.mozilla.org/en-US/docs/Glossary/Falsy</a>
Truthy: <a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy">https://developer.mozilla.org/en-US/docs/Glossary/Truthy</a></p>
</dd>
<dt><a href="#testGrader">testGrader()</a></dt>
<dd><p>#5: testGrader</p>
<p>testGrader is a function that accepts one input: a grade that is between 0 and 100. testGrader returns a letter grade that corresponding the
Complete the function testGrader given below by writing condtional statements that fulfill the following.</p>
<ul>
<li>grade is 90 to 100
 -&gt; return &#39;A&#39;</li>
<li>grade is 80 to 89
 -&gt; return &#39;B&#39;</li>
<li>grade is 70 to 79
 -&gt; return &#39;C&#39;</li>
<li>grade is 60 to 69
 -&gt; return &#39;D&#39;</li>
<li>grade is below 60
 -&gt; return &#39;F&#39;</li>
</ul>
</dd>
<dt><a href="#daysInTheMonth">daysInTheMonth()</a></dt>
<dd><p>#6: daysInTheMonth</p>
<p>daysInTheMonth is a function that accepts one input: a monthNum that is between 1 and 12.</p>
<p>Complete the function daysInTheMonth given below by writing conditional statements that fulfill the following.</p>
<ul>
<li>if the month is 1, 3, 5, 7, 8, 10, or 12
 -&gt; return 31</li>
<li>if the month is 4, 6, 9, 11
 -&gt; return 30</li>
<li>if the month is 2
 -&gt; return 28</li>
</ul>
</dd>
</dl>

<a name="notFiveChars"></a>

## notFiveChars
#2: 5 characters

Define the variable notFiveChars.
Assign it a string that's not 5 characters long.

Define the variable isItFiveChars.
Assign it a ternary that checks to see if notFiveChars has length 5.
- True output: "it's 5 characters"
- False output: "not 5 characters"

See:
String length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
Ternary: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

**Kind**: global variable  
<a name="givenOne"></a>

## givenOne
#1: Logically speaking

Using the four given variables below, define four new variables and assign their values as follows:

AND (&&)
a) Define andTrue. Use two of the givens and the && operator so that the evaluated value is true.
b) Define andFalse. Use two of the givens and the && operator so that the evaluated value is false.

OR (||)
c) Define orTrue. Use two of the givens and the || operator so that the evaluated value is true.
d) Define orFalse. Use two of the givens and the || operator so that the evaluated value is true.

See:
AND: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
OR: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

**Kind**: global constant  
<a name="numberOrString"></a>

## numberOrString()
#3: numberOrString

numberOrString is a function that accepts one input, a value of any type.
numberOrString returns the following based on these conditions:

- "This is a string" if the value is a String
- "This is a number" if the value is a Number
- "This is not a string nor a number" if it's neither

SEE:
- return statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return

**Kind**: global function  
<a name="truthyFalsy"></a>

## truthyFalsy()
#4: truthyFalsy

truthyFalsy is a function that accepts one input, a value of any type.
Complete the function truthyFalsy given below by writing conditional statements in the function block that fulfill the following.

- value is any of the following: 0, "", null, undefined, false
   -> return false
- value is anything else:
   -> return true

You do not need to call the function with these values; the function will be automatically tested with them.

Challenge:
There's a way to write this function using just one short if-statement expression.
Can you use the logical NOT (!) operator to make this function work?
See the link below for more on the logical NOT (!).

See:
Logical NOT (!): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
Falsy: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
Truthy: https://developer.mozilla.org/en-US/docs/Glossary/Truthy

**Kind**: global function  
<a name="testGrader"></a>

## testGrader()
#5: testGrader

testGrader is a function that accepts one input: a grade that is between 0 and 100. testGrader returns a letter grade that corresponding the
Complete the function testGrader given below by writing condtional statements that fulfill the following.

- grade is 90 to 100
   -> return 'A'
- grade is 80 to 89
   -> return 'B'
- grade is 70 to 79
   -> return 'C'
- grade is 60 to 69
   -> return 'D'
- grade is below 60
   -> return 'F'

**Kind**: global function  
<a name="daysInTheMonth"></a>

## daysInTheMonth()
#6: daysInTheMonth

daysInTheMonth is a function that accepts one input: a monthNum that is between 1 and 12.

Complete the function daysInTheMonth given below by writing conditional statements that fulfill the following.

- if the month is 1, 3, 5, 7, 8, 10, or 12
   -> return 31
- if the month is 4, 6, 9, 11
   -> return 30
- if the month is 2
   -> return 28

**Kind**: global function  
