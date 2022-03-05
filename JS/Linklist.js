function defaultEquals(a, b) {
    return a === b;
}

class LinkList{
    constructor(equalsFn = defaultEquals){
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
    push(element){
        const node = new Node(element) // 创建一个节点
        let current
        if (this.head == null) { // 判断链表是否为空 ，如果链表为空，则链表表头指针指向新的节点
            this.head = node
        } else { // 否则，通过遍历的方式将
            current  = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    insert(element,position){
        const node = new Node(element)
        // 向链表尾部插入值
        if (position == this.count) {
            this.push(element)
        } else {
            // 向链表头部插入值
            if (position == 0) {
                const current = this.head
                this.head = node
                this.head.next = current
                this.count++
            }
            // 向链表中间插入值
            if (position > 0 && position < this.count) {
                let prev 
                let current = this.head
                for (let i = 0; i < position; i++) {
                    prev = current
                    current = current.next
                }
                prev.next = node
                node.next = current
                this.count++
            }
        }
        
        
    }
    getElementAt(index){
        if (index <= this.size() && index >= 0) {
           let current = this.head
           for (let i = 0; i < index && current.next != null; i++) {
              current = current.next
           }
           return current.element
        }
        return undefined 
    }
    remove(element){
       const index = this.indexOf(element)
       this.removeAt(index)
    }
    removeAt(index){
        // 检查越界值
        if (index >= 0 && index < this.count) { // 合法值
            let current = this.head
            if (index == 0) {
                this.head = current.next
            } else {
                let prev  // 定义一个值 将下一项值的next
                for (let i = 0; i < index; i++) {
                    prev = current
                    current = current.next
                }
                prev.next = current.next
            }
            this.count --
            return current.element
        }
        return undefined
    }
    indexOf(element){
        let current = this.head
        for (let i = 0; i < this.size() && current != null; i++) {
            if (this.equalsFn(element,current.element)) {
              return i  
            }
            current = current.next
        }
        return -1

    }
    size(){
        return this.count
    }
    toString(){
        let resultString = ''
        let current = this.head
        if (this.head != null) {
            resultString = current.element
            while (current.next != null) { 
                resultString = `${resultString},${current.next.element}` 
                current = current.next
            }
        }
        return resultString
    }
    isEmpty(){
        return this.size() === 0
    }
    getHead(){
        return this.head
    }
    clear(){
        this.head = undefined
        this.count = 0
    }
}

// 创建链表中的节点
class Node {
    constructor(element){
        this.element = element
        this.next = undefined
    }
}

var linkList = new LinkList()

linkList.push(1)

linkList.push(2)

linkList.push(3)

linkList.push(4)

/** 
LinkList {
    count: 4,
    head: Node { element: 1, next: Node { element: 2, next: [Node] } },
    equalsFn: [Function: defaultEquals]
} 
**/

console.log(linkList.toString()) // 1,2,3,4

console.log(linkList.indexOf(2))  // 1

console.log(linkList.indexOf(5)) // -1

linkList.remove(2)

console.log(linkList.toString()) // 1,3,4

console.log(linkList.size()) // 3

linkList.insert(2,0) 

console.log(linkList)

console.log(linkList.toString())  // 2,1,3,4

linkList.insert(5,2)

console.log(linkList.toString()) // 2,1,5,3,4

linkList.insert(6,5)

console.log(linkList.toString()) // 2,1,5,3,4,6


export default LinkList