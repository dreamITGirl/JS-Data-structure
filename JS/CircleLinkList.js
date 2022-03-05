import LinkList from './Linklist'
import DoublyNode from './DoublyNode'
import { defaultEquals } from '../utils/index'
class CircleLinkList extends LinkList{
    constructor(equals = defaultEquals){
        super(equals)
    }
    push(element){
        const node = new DoublyNode(element)
        if (this.head == null) {
            this.head = node
        } else {
            let current = this.getElementAt(this.size() - 1)
            current.next = node
            this.tail = node
            node.next = this.head
        }
    }
    insert(element,index){
       const node = new DoublyNode(element)
       if (index > 0 && index <= this.count) {
            if (this.head == null) {
                this.head = node 
                node.prev = this.head
            } else {
                if (index == this.count) { // 最后一个元素
                    let lastItem = this.getElementAt(this.count - 1)
                   lastItem.next = node
                   node.prev = this.head
                   node.next = undefined
                } else {
                    // 插入到链表中间位置
                    let prevItem = this.getElementAt(index - 1)
                    let current = prevItem.next
                    prevItem.next = node
                    node.prev = prevItem
                    node.next = current
                }
            }
            this.count ++ 
            return true
       }
       return false
         
    }
    removeAt(index){
        if (this.head = null) {
            return undefined
        }
        let prevItem = this.getElementAt(index -1) // 前一个元素
        const result = prevItem.next
        prevItem.next = result.next
        result.prev = prevItem
        return result
    }
}