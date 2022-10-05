// module.exports = {sayHello
// --Anything that goes here is accessible outside of the file


// function sayHello() {
//     return 'Hello!'
//  }
// }

module.exports = {
    sayHello: function(){
        return 'Hello!'
  },
  addNumbers: function(value1, value2){
      return value1 + value2
  }
}
