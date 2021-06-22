## Functions

<dl>
<dt><a href="#groceryRegister">groceryRegister()</a></dt>
<dd><p>APPROACH</p>
<p>define function, accepts groceryList object
initialize total at 0</p>
<p>for-in loop of groceryList (item)
   grab quantity needed in list using item key
   grab item price using item as list key
   use item key in groceryPrices to grab price
   subtotal is price x quantity
   add subtotal to total
END LOOP</p>
<p>return total (number)</p>
</dd>
<dt><a href="#keyValidator">keyValidator(testObj, targetObj)</a> ⇒ <code>Array.&lt;String&gt;</code></dt>
<dd><p>#3: keyValidator
Define the function keyValidator.
keyValidator accepts two objects, a testObj and a targetObj.
keyValidator compares the keys of the targetObj to the ones the testObj has.
keyValidator returns an array of all the keys, as strings, missing from the testObj.</p>
<p>If the testObj has all of the same keys as the targetObj, return the string &quot;Both objects are the same.&quot;</p>
</dd>
<dt><a href="#isAnObject">isAnObject(input)</a> ⇒ <code>Boolean</code></dt>
<dd><p>#1: isAnObject</p>
<p>Define the function isAnObject.
isAnObject accepts a single input of any type.
isAnObject returns true or false depending on whether or not the input is an object.</p>
</dd>
<dt><a href="#priceTransformer">priceTransformer(arrayOfObj)</a> ⇒ <code>Object</code></dt>
<dd><p>Transpose objects in an array to a single object
#2: priceTransformer</p>
<p>Define the function priceTransformer.
priceTransformer takes in an array of objects.
Each object in the array has <code>food</code> and <code>price</code> keys.</p>
<p>priceTransformer returns a single object where the keys are the values of each original <code>food</code> value, and its values are the values of each original <code>price</code> value.</p>
</dd>
</dl>

<a name="groceryRegister"></a>

## groceryRegister()
APPROACH

define function, accepts groceryList object
initialize total at 0

for-in loop of groceryList (item)
   grab quantity needed in list using item key
   grab item price using item as list key
   use item key in groceryPrices to grab price
   subtotal is price x quantity
   add subtotal to total
END LOOP

return total (number)

**Kind**: global function  
<a name="keyValidator"></a>

## keyValidator(testObj, targetObj) ⇒ <code>Array.&lt;String&gt;</code>
#3: keyValidator
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

<a name="isAnObject"></a>

## isAnObject(input) ⇒ <code>Boolean</code>
#1: isAnObject

Define the function isAnObject.
isAnObject accepts a single input of any type.
isAnObject returns true or false depending on whether or not the input is an object.

**Kind**: global function  
**Category**: 06 - Objects  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>\*</code> | any type |

**Example**  
```js
isAnObject("string") // false
isAnObject(42) // false
isAnObject(true) // false
isAnObject( [1, 2, 3] ) // false
isAnObject( { fruit: "banana" } ) // true
```
<a name="priceTransformer"></a>

## priceTransformer(arrayOfObj) ⇒ <code>Object</code>
Transpose objects in an array to a single object
#2: priceTransformer

Define the function priceTransformer.
priceTransformer takes in an array of objects.
Each object in the array has `food` and `price` keys.

priceTransformer returns a single object where the keys are the values of each original `food` value, and its values are the values of each original `price` value.

**Kind**: global function  
**Returns**: <code>Object</code> - the transformed object  
**Category**: 06 - Objects  

| Param | Type |
| --- | --- |
| arrayOfObj | <code>Array.&lt;Object&gt;</code> | 

**Properties**

| Name | Type |
| --- | --- |
| food | <code>Object.&lt;string, string&gt;</code> | 
| price | <code>Object.&lt;string, number&gt;</code> | 

**Example**  
```js
const pricesOne = [ { food: "chips", price: 4.5, } ]
priceTransformer(pricesOne) // => { "chips": 4.5 }
```
