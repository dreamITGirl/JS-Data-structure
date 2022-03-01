class Deque{
    constructor(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    isEmpty(){
        return this.count === 0
    }
    clear(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    size(){
        return this.count - this.lowestCount
    }
    addFront(elem){
        
        if (this.isEmpty()) {
            this.addBack(elem)
        } else if (this.lowestCount > 0) {
            this.lowestCount --
            this.items[this.lowestCount] = elem
        } else {
            for (let i = this.count; i > 0; i--) {
              this.items[i] = this.items[i - 1]
            }
            this.count ++
            this.lowestCount = 0  
            this.items[0] = elem
        }
    }
    addBack(elem){
        this.items[this.count] = elem
        this.count++
    }
    removeFront(){
        const result = this.items[this.lowestCount]
        this.items[this.lowestCount] = undefined
        this.lowestCount ++
        return result
    }
    removeBack(){
        const result = this.items[this.count]
        this.count --
        return result
    }
    peekFront(){
        return this.items[this.lowestCount]
    }
    peekBack(){
        return this.items[this.count]
    }
    toString(){
        if (this.isEmpty()) {
            return ''
        }
        let result = this.items[this.lowestCount]
        for (const k in this.items) {
            if (this.items[k] !== result && this.items[k]) {
                result = `${result},${this.items[k]}`
            }
        }
        return result
    }
}
/**
var deque = new Deque()
deque.addBack(1)
deque.addFront(0)
deque.addBack('Alice')
deque.addFront('JD')
console.log(deque) //Deque {items: { '0': 'JD', '1': 0, '2': 1, '3': 'Alice' },count: 4,lowestCount: 0 }
console.log(deque.removeFront()) // JD
console.log(deque) //Deque {items: { '0': undefined, '1': 0, '2': 1, '3': 'Alice' },count: 4, lowestCount: 1}

console.log(deque.size()) // 3
console.log(deque.toString()) // 0,1,Alice
**/

// 击鼓传花

function hotPotato(elementList,num){
    const queue = new Queue()
    const eliminatedList = [] // 淘汰的元素

    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i])
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminatedList.push(queue.dequeue())
    }
    return {
        eliminated:eliminatedList,
        winner:queue.dequeue()
    }
}

// var names = ['John','Jack','Calmia','Alice','Carl']
// const result = hotPotato(names,7)
// // console.log(result) // { eliminated: [ 'Calmia', 'Jack', 'Carl', 'Alice' ], winner: 'John' }
// result.eliminated.forEach(name => {
//     console.log(`${name}在游戏中被淘汰`)
// })
// console.log(`胜利者是：${result.winner}`)
// Calmia在游戏中被淘汰
// Jack在游戏中被淘汰
// Carl在游戏中被淘汰
// Alice在游戏中被淘汰
// 胜利者是：John

// 回文字符串
function palindromeChecker(string) {
    if (!string) {
        return false
    }
    let deque = new Deque()
    const str = string.toLowerCase() // 转为了小写
    const tempStr = str.split(' ').join() // 去除字符串中的空格
    let isEqual = true
    let firstChar; let lastChar

    for (let i = 0; i < tempStr.length; i++) {
        deque.addBack(tempStr.charAt(i))
    }
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if (firstChar !== lastChar) {
            isEqual = false     
        }
    }
    return isEqual
}
