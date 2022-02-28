class Stack {
    constructor(){
        this.items = [] // 我们可以用数组来保存栈中的数据
        this.count = 0
    }
    push(elem){
        this.items[this.count] = elem
        this.count++
        // this.items.push(elem)
    }
    pop(){
        if (this.isEmpty()) {
            return undefined 
        }
        const item = this.items[this.count-1]
        this.count--
        return item
    //    return this.items.pop()
    }
    peek(){
        if (this.isEmpty()) {
           return undefined 
        }
        return this.items[this.count - 1]  
    }
    isEmpty(){
        return this.count === 0
    }
    clear(){
        this.items = []
        this.count = 0
    }
    size(){
        return this.count
    }
    toString(){
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[0]}`
        for (let i = 1; i < this.items.length; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

// var stack = new Stack()
// console.log(stack.isEmpty()) // true
// stack.push(9)
// stack.push(8)
// console.log(stack.size()) // 2
// console.log(stack) // Stack { items: [ 9, 8 ] }
// stack.push(7)
// stack.push(6)
// console.log(stack) // Stack { items: [ 9, 8, 7, 6] }

// console.log(stack.peek()) // 6

// console.log(stack.pop()) // 6

// console.log(stack) // Stack { items: [ 9, 8, 7 ] }

// stack.clear()
// console.log(stack) // Stack { items: [] }

var stack = new Stack()
console.log(stack) // Stack { items: [], count: 0 }
stack.push(9)
stack.push(8)
stack.push(7)
stack.push(6)
// console.log(stack) // Stack { items: [  9, 8, 7, 6  ], count: 4 }
// console.log(stack.pop()) // 6
// console.log(stack.peek()) // 7
// console.log(stack.size()) // 3
// console.log(stack.toString()) // 9,8,7,6

//  进制转换函数
function decimalToBinary(decNumber) {
    const remStack = new Stack()
    let number = decNumber
    let rem;
    let binaryString = ''
    while (number > 0) {
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
    }
    console.log(remStack,'remStack',remStack.isEmpty())
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }
    return binaryString
}

// console.log(decimalToBinary(10)) // 1010

function baseConvert(decNumber,base) {
    const remStack = new Stack()
    const digits = '0123456789ABCDEFGHIGKLMNOPQRSTUVWXYZ'
    let number = decNumber
    let rem ;
    let binaryString = ''

    if (!(base >= 2 && base <= 36)) {
        return ''
    }
    while (number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }

    while (!remStack.isEmpty()) {
        binaryString += digits[remStack.pop()]
    }
    
    return binaryString
}
console.log(baseConvert(100345,3))
