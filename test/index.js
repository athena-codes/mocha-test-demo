const assert = require('chai').assert
const app = require('../app.js')
// const sayHello = require('../app.js').sayHello
// const addNumbers = require('../app.js').addNumbers


// Results

sayHelloResult = app.sayHello()
AddNumbersResult = app.addNumbers(5, 5)

describe('App', function(){
    describe('sayHello', function () {
    it('sayHello should return type string', function(){
            // let result = app.sayHello()
        assert.typeOf(sayHelloResult, 'string')
 })
    it('sayHello should return hello.', function() {
    let result = app.sayHello()
    //    assert.equal(app(), 'Hello!')
        assert.equal(sayHelloResult, 'Hello!')
    })
   })
})

    describe('addNumbers', function () {
    it('addNumbers should be above 5', function () {
        // let result = app.addNumbers(5, 5)
        assert.isAbove(AddNumbersResult, 5)
    })
        it('addNumbers should return type number', function () {
            // let result = app.addNumbers()
            assert.typeOf(AddNumbersResult, 'number')
        })
})
