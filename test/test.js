'use strict'
let node_uid = require("../index")
let assert = require("assert")
describe('the test to uid', function () {
    it('should get the correct length', function () {
        assert.equal(node_uid().length, 30)
    })
    
    it('should get the correct length when the length is passed', function () {
        let length = 20 + Math.floor(Math.random()*10)
        assert.equal(node_uid(length).length, length)
    })
    
    it('should return a undefined if a number is not passed', function () {
        assert(!node_uid('undefined'))
    })
})