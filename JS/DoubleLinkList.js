import LinkList from './Linklist'
import DoublyNode from './DoublyNode'
import { defaultEquals } from '../utils/index'
class DoubleLinkList extends LinkList {
    constructor(equalsFn = defaultEquals){
        super(equalsFn)
        this.tail = undefined
    }
    push(element){
        const node = new DoublyNode(element)
        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
    }
    insert(element,index){
        if (index == this.count) { // 在链表尾部追加
            this.push(element)
        } else {
            const node = new DoublyNode(element)
            // 在链表头部追加
            if (index == 0) {
                if (this.head == null) { // 链表为空
                    this.head = node
                    this.tail = node
                } else {
                    const firstNode = this.head
                    this.head = node
                    firstNode.prev = node
                    node.next = firstNode 
                }
            }
            // 在链表中间插入值,
            const prevItem = this.getElementAt(index -1) // 拿到的前一项
            let current = prevItem.next
            prevItem.next = node
            node.next = current
            node.prev = prevItem
            current.prev = node

            this.count++
            return true
            // let current = this.head
            // let prev
            // for (let i = 0; i < index && index < this.count; i++) {
            //    prev = current
            //    current = current.next
            // }
            // prev.next = node
            // node.next = current
        }
        return false
    }
    indexOf(element){
        if (this.head == null) {
            return -1
        }
        let current = this.head
        let index = 0
        while (current.next != null) {
            if (this.equalsFn(current.element , element)) {
               return index
            }
            index ++
            current = current.next
        }
    }
    // getElementAt(index){ //查找所在位置的元素,和链表中的方法一样
    //     if (this.head == null) {
    //         return undefined
    //     }
    //     let current = this.head
    //     let prev
    //     for (let i = 0; i < index; i++) {
    //         current = current.next
    //     }
    //     return current
    // }
    removeAt(index){ // 从任意位置移除元素
        if (index >= 0 && index < this.count) {
            let current 
            if (index == 0) { // 移除双向链表头部的元素
                current = this.head
                this.head = current.next
            } else if (index == this.count - 1) { // 移除双向链表尾部的元素
                current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            } else { // 移除链表中间的元素,可用getElementAt()的方法
                let current = this.getElementAt(index )
                let prevItem = current.prev
                prevItem.next = current.next
                current.next.prev = prevItem
                // let prev
                // for (let i = 0; i < index ; i++) {
                //     prev = current
                //     current = current.next
                // }
                // prev.next = current.next
                // current.next.prev = prev
            }
            this.count --
            return current.element
        }
        return undefined
    }
    getHead(){
        return this.head
    }
    getTail(){
        return this.tail
    }
    clear(){
        super.clear()
        this.tail = undefined
    }
    toString(){}
    inverseToString(){}
}