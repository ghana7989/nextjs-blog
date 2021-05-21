---
title: 'Getting started with Jest in just 5 minutes'
date: '2021-4-19'
image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Uh1wJhxv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hqabhv0mnm80t7licvda.png'
excerpt: Testing with Jest, may sound overwhelming but in fact, getting started is very simple.
isFeatured: true
---
# Welcome

Testing with Jest, may sound overwhelming but in fact, getting started is very simple.

## To get started let us test a simple function

```js
const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}
```

Here we declared a function named celsiusToFahrenheit which takes in a parameter temp which is temperature and is of type number. It returns the Fahrenheit value of Celsius `temp`.

## Now let us test this

Yeah, this our first test
First `npm i -D jest` here `-D` parameter to add it to dev dependency.
Next create a file name called anything.test.js, anything I mean literally anything.

```js
test('Should convert 0 C to 32 F', () => {
    const temp = celsiusToFahrenheit(0)
    if(temp!==32) throw new Error("This Test Failed")
})
```

Just paste this code and Voila! the first test is done, Now let's dive into the code `test()` is a function that is made available globally by the jest library when we installed it. It takes two parameters, the first one being simply the name of the test and the second one being the testing function itself.
The testing function when finds an error then shows the output as failed this means a function with nothing inside still shows as a passed test

```js
test('Dummy', () => {})
```

The above test still passes.
But wait, what if there are many conditions to check or some asynchronous code?
Jest got our back

```js
test('Should convert 0 C to 32 F', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})
```

Yes, expect is also a function provided in-built with jest package, now what that line means is - expect the temp variable to be a number 32 if not throw an error.
Now in the terminal root project folder just run `jest` and see the passing test.

That's all and by the way, this is my first blog post
