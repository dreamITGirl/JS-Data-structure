class Queue{
    constructor(){
        this.items = {} // 根据上篇文章《栈》的理解，这次我们也是用数组的方式来放队列中的各元素
        this.count = 0 // 队列中各项元素的个数
        this.lowestCount = 0 // 用来帮助我们追踪第一个元素的变量
    }
    enqueue(elem){
        this.items[this.count] = elem
        this.count++
    }
    dequeue(){
        if (this.isEmpty()) {
            return ''
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    peek(){
        if (this.isEmpty()) {
            return ''
        }
        return this.items[this.lowestCount] 
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.count - this.lowestCount
    }
    clear(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    toString(){
        if (this.isEmpty()) {
            return ''
        }
        let result = this.items[this.lowestCount]
        
        for (const k in this.items) {
            if (this.items[k] && this.items[k] !== this.items[this.lowestCount]) {
                result = `${result},${this.items[k]}` 
            }
        }
        return result
    }

}

// var queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// console.log(queue) // Queue { items: [ 1, 2, 3, 4 ], count: 4, lowestCount: 0 }
// console.log(queue.size()) // 4
// console.log(queue.isEmpty()) // false

// console.log(queue.dequeue()) // 1
// console.log(queue) // Queue { items: [ <1 empty item>, 2, 3, 4 ], count: 4, lowestCount: 1 }
// console.log(queue.size())
// console.log(queue.peek()) // 2
// console.log(queue) // Queue { items: [ <1 empty item>, 2, 3, 4 ], count: 4, lowestCount: 1 }
// console.log(queue.toString()) // 2,3,4

export default Queue