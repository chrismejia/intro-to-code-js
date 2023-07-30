# How to recursively spy on a function using sinon

```js
/**
 * @see {@link https://stackoverflow.com/a/51699585 How to spy on a recursive function in JavaScript: Example 3: Object Wrapper}
 A stand-alone recursive function that is not part of a module can become spy-able if it is placed in a wrapping object and calls itself using the object. When the function within the object is replaced by a spy the recursive calls automatically call the same spy:
*/
const wrapper = {
  fibonacci: (n) => {
    if (n < 0) throw new Error('must be 0 or greater');
    if (n === 0) return 0;
    if (n === 1) return 1;
    // call fibonacci using the wrapper
    // just
    return wrapper.fibonacci(n - 1) + wrapper.fibonacci(n - 2);
  }
};

 describe('fibonacci', () => {
   it('should calculate Fibonacci numbers', () => {
    expect(wrapper.fibonacci(5)).toBe(5);
    expect(wrapper.fibonacci(10)).toBe(55);
    expect(wrapper.fibonacci(15)).toBe(610);
   });

   it('should call itself recursively', () => {
    const spy = sinon.spy(wrapper, 'fibonacci');
    spy(10);
    expect(spy.callCount).toBe(177); // PASSES
    spy.restore();
   });
 });
```
