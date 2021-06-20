## Functions

<dl>
<dt><a href="#helloWorld">helloWorld()</a></dt>
<dd><p>#1: helloWorld</p>
<p>Define the function helloWorld.
helloWorld takes no inputs and returns the phrase &quot;Hello World!&quot;</p>
<p>EXAMPLE:
helloWorld() =&gt; &quot;Hello World!&quot;</p>
</dd>
<dt><a href="#helloWorldRedux">helloWorldRedux()</a></dt>
<dd><p>#2: helloWorldRedux</p>
<p>Define the function helloWorldRedux.
helloWorldRedux takes in an optional input, name.
When a name value is passed, return a personalized greeting using the name.
Otherwise, return the phrase &quot;Hello World!&quot;</p>
<p>EXAMPLES:
helloWorldRedux() =&gt; &quot;Hello World!&quot;
helloWorldRedux(&quot;Bob&quot;) =&gt; &quot;Hello Bob!&quot;</p>
<p>CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!</p>
</dd>
<dt><a href="#uppercaseThis">uppercaseThis()</a></dt>
<dd><p>#3: uppercaseThis</p>
<p>Define the function uppercaseThis.
uppercaseThis takes in one input, phrase, a String of any length.
uppercaseThis returns phrase fully capitalized.</p>
<p>READ:
.toUpperCase() | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase</a></p>
<p>EXAMPLES:
uppercaseThis(&quot;aaaa&quot;) =&gt; &quot;AAAA&quot;
uppercaseThis(&quot;BBBB&quot;) =&gt; &quot;BBBB&quot;
uppercaseThis(&quot;cCcC&quot;) =&gt; &quot;CCCC&quot;
uppercaseThis(&quot;d1D2d3&quot;) =&gt; &quot;D1D2D3&quot;</p>
<p>CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!</p>
</dd>
<dt><a href="#doesItAddUp">doesItAddUp()</a></dt>
<dd><p>#4: doesItAddUp</p>
<p>Define the function doesItAddUp.
doesItAddUp accepts three number inputs.
doesItAddUp returns true when the first two inputs add up to the third.
Otherwise, doesItAddUp returns false.</p>
<p>EXAMPLES:
doesItAddUp(10, 5, 15) =&gt; true
doesItAddUp(10, 5, 20) =&gt; false</p>
<p>CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!</p>
</dd>
<dt><a href="#arrayToString">arrayToString()</a></dt>
<dd><p>#5: arrayToString</p>
<p>Define the function arrayToString.
arrayToString accepts an array containing any number of strings of any length, and a connector, a string made up of any number of random characters.
arrayToString returns a combined string made up of each string in the array attached together by the connector.</p>
<p>EXAMPLES:
arrayToString([&quot;cat&quot;, &quot;dog&quot;, &quot;moo&quot;], &quot;&quot;) =&gt; &quot;catdogmoo&quot;
arrayToString([&quot;cat&quot;, &quot;dog&quot;, &quot;moo&quot;], &quot; &quot;) =&gt; &quot;cat dog moo&quot;
arrayToString([&quot;cat&quot;, &quot;dog&quot;, &quot;moo&quot;], &quot;+-%&quot;) =&gt; &quot;cat+-%dog+-%moo&quot;</p>
<p>CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!</p>
</dd>
<dt><a href="#smallTogetherNow">smallTogetherNow()</a></dt>
<dd><p>#6: smallTogetherNow</p>
<p>Define the function smallTogetherNow.
smallTogetherNow accepts two strings of any length.
smallTogetherNow returns a single string, the combination of both input strings converted to all lowercase.</p>
<p>READ:
.toLowerCase() | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase</a></p>
<p>EXAMPLES:
smallTogetherNow(&quot;HELLO&quot;, &quot;WORLD&quot;) =&gt; &quot;helloworld&quot;
smallTogetherNow(&quot;apple&quot;, pie) =&gt; &quot;applepie&quot;
smallTogetherNow(&quot;mIxEd&quot;, &quot;CaPiTaLs&quot;) =&gt; &quot;mixedcapitals&quot;</p>
<p>CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!</p>
<p>CHALLENGE HINT:
.concat() | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat</a></p>
</dd>
<dt><a href="#dogAndOwnerInfo">dogAndOwnerInfo()</a></dt>
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
<p>EXAMPLES:
dogAndOwnerInfo(&quot;Turbo&quot;, 10, &quot;Richard&quot;, 55) =&gt;
   &quot;Turbo is older than their owner, Richard, by 15 years.&quot;
dogAndOwnerInfo(&quot;Fido&quot;, 1, &quot;Sara&quot;, 15) =&gt;
   &quot;Sara is older than their dog, Fido, by 8 years.&quot;
dogAndOwnerInfo(&quot;Star&quot;, 2, &quot;John&quot;, 14) =&gt;
   &quot;John and Star are the both 14 years old.&quot;</p>
</dd>
<dt><a href="#doesTheMathWork">doesTheMathWork()</a></dt>
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
<p>EXAMPLES:
doesTheMathWork(1, 2, 3) =&gt; &quot;addition&quot;
doesTheMathWork(7, 2, 5) =&gt; &quot;subtraction&quot;
doesTheMathWork(3, 3, 9) =&gt; &quot;multiplication&quot;
doesTheMathWork(81, 9, 9) =&gt; &quot;division&quot;
doesTheMathWork(11, 222, 3) = &quot;no operation&quot;</p>
</dd>
<dt><a href="#allWordsLength">allWordsLength()</a></dt>
<dd><p>#9: allWordsLength</p>
<p>Define the function allWordsLength.
allWordsLength accepts an array containing any number of strings, each of any length.
allWordsLength returns the total length of all the strings in the array.</p>
<p>HINT: If you&#39;re familiar with loops, you might be tempted to try using one here. You can solve this with a loop, but it&#39;s not the most direct solution. Think about how you can go from your starting data type to the desired output data type. What built-in methods can you use here to help out?</p>
<p>READ:
Array Methods | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array</a>
String Methods | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String</a></p>
<p>EXAMPLES:
allWordsLength([&quot;apple&quot;]) =&gt; 5
allWordsLength([&quot;old&quot;, &quot;textbook&quot;]) =&gt; 11  (3 + 8)
allWordsLength([&quot;cat&quot;, &quot;dog&quot;, &quot;moo&quot;]) =&gt; 9 (3 + 3 + 3)
allWordsLength([&quot;robin&quot;, &quot;hood&quot;, &quot;men&quot;, &quot;in&quot;, &quot;tights&quot;]) =&gt; 19 (5 + 4 + 3 + 2 + 5)</p>
<p>CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!</p>
</dd>
</dl>

<a name="helloWorld"></a>

## helloWorld()
#1: helloWorld

Define the function helloWorld.
helloWorld takes no inputs and returns the phrase "Hello World!"

EXAMPLE:
helloWorld() => "Hello World!"

**Kind**: global function  
<a name="helloWorldRedux"></a>

## helloWorldRedux()
#2: helloWorldRedux

Define the function helloWorldRedux.
helloWorldRedux takes in an optional input, name.
When a name value is passed, return a personalized greeting using the name.
Otherwise, return the phrase "Hello World!"

EXAMPLES:
helloWorldRedux() => "Hello World!"
helloWorldRedux("Bob") => "Hello Bob!"

CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!

**Kind**: global function  
<a name="uppercaseThis"></a>

## uppercaseThis()
#3: uppercaseThis

Define the function uppercaseThis.
uppercaseThis takes in one input, phrase, a String of any length.
uppercaseThis returns phrase fully capitalized.

READ:
.toUpperCase() | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

EXAMPLES:
uppercaseThis("aaaa") => "AAAA"
uppercaseThis("BBBB") => "BBBB"
uppercaseThis("cCcC") => "CCCC"
uppercaseThis("d1D2d3") => "D1D2D3"

CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!

**Kind**: global function  
<a name="doesItAddUp"></a>

## doesItAddUp()
#4: doesItAddUp

Define the function doesItAddUp.
doesItAddUp accepts three number inputs.
doesItAddUp returns true when the first two inputs add up to the third.
Otherwise, doesItAddUp returns false.

EXAMPLES:
doesItAddUp(10, 5, 15) => true
doesItAddUp(10, 5, 20) => false

CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!

**Kind**: global function  
<a name="arrayToString"></a>

## arrayToString()
#5: arrayToString

Define the function arrayToString.
arrayToString accepts an array containing any number of strings of any length, and a connector, a string made up of any number of random characters.
arrayToString returns a combined string made up of each string in the array attached together by the connector.

EXAMPLES:
arrayToString(["cat", "dog", "moo"], "") => "catdogmoo"
arrayToString(["cat", "dog", "moo"], " ") => "cat dog moo"
arrayToString(["cat", "dog", "moo"], "+-%") => "cat+-%dog+-%moo"

CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!

**Kind**: global function  
<a name="smallTogetherNow"></a>

## smallTogetherNow()
#6: smallTogetherNow

Define the function smallTogetherNow.
smallTogetherNow accepts two strings of any length.
smallTogetherNow returns a single string, the combination of both input strings converted to all lowercase.

READ:
.toLowerCase() | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

EXAMPLES:
smallTogetherNow("HELLO", "WORLD") => "helloworld"
smallTogetherNow("apple", pie) => "applepie"
smallTogetherNow("mIxEd", "CaPiTaLs") => "mixedcapitals"

CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!

CHALLENGE HINT:
.concat() | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat

**Kind**: global function  
<a name="dogAndOwnerInfo"></a>

## dogAndOwnerInfo()
#7: Dog owners and their dogs

Define the function dogAndOwnerInfo.
dogAndOwnerInfo takes in four inputs:
- the dog's name
- the dog's age
- the dog owner's name
- the dog owner's age

dogAndOwnerInfo converts the dog's age to human years by multiplying it by 7.

EXAMPLES:
dogAndOwnerInfo("Turbo", 10, "Richard", 55) =>
   "Turbo is older than their owner, Richard, by 15 years."
dogAndOwnerInfo("Fido", 1, "Sara", 15) =>
   "Sara is older than their dog, Fido, by 8 years."
dogAndOwnerInfo("Star", 2, "John", 14) =>
   "John and Star are the both 14 years old."

**Kind**: global function  
<a name="doesTheMathWork"></a>

## doesTheMathWork()
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

EXAMPLES:
doesTheMathWork(1, 2, 3) => "addition"
doesTheMathWork(7, 2, 5) => "subtraction"
doesTheMathWork(3, 3, 9) => "multiplication"
doesTheMathWork(81, 9, 9) => "division"
doesTheMathWork(11, 222, 3) = "no operation"

**Kind**: global function  
<a name="allWordsLength"></a>

## allWordsLength()
#9: allWordsLength

Define the function allWordsLength.
allWordsLength accepts an array containing any number of strings, each of any length.
allWordsLength returns the total length of all the strings in the array.

HINT: If you're familiar with loops, you might be tempted to try using one here. You can solve this with a loop, but it's not the most direct solution. Think about how you can go from your starting data type to the desired output data type. What built-in methods can you use here to help out?

READ:
Array Methods | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
String Methods | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

EXAMPLES:
allWordsLength(["apple"]) => 5
allWordsLength(["old", "textbook"]) => 11  (3 + 8)
allWordsLength(["cat", "dog", "moo"]) => 9 (3 + 3 + 3)
allWordsLength(["robin", "hood", "men", "in", "tights"]) => 19 (5 + 4 + 3 + 2 + 5)

CHALLENGE:
Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!

**Kind**: global function  
