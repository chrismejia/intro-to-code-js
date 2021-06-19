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
