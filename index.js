'use strict'
/**
 *  The module to generate the unique Id using the current date
 *  public API
 */
let lengthVersion_1 = 30
module.exports = function (length) {
    // check if the lenght is given has to be a number
    if (length && (typeof length !== 'number')) return
    // set the lenght for ID
    lengthVersion_1 = +(length) || lengthVersion_1
    // get the current date
    let now = Date.now()*Date.now()
    // the defalt radix to use
    let radix = 30
    // id init
    let id = now.toString(radix)
    // define the recurrent function 
    let getId = function () {
        // radix is updated
        radix = radix - Math.floor(Math.random() * 5)
        // check the length
        if (id.length < lengthVersion_1) {
            // update id
            id = id + now.toString(radix)
            // call the recurrent function
            return getId()
        }
        // return the id 
        return id.slice(0,lengthVersion_1)
    }
    return getId()
}