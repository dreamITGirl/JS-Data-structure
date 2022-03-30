
class Set{
    constructor(){
        this.items = {}
    }
    has(element){
        return Object.prototype.hasOwnProperty.call(this.items,element)
    }
    add(element){
        if (this.has(element)) {
            return false
        }
        this.items[element] = element
        return true
    }
    delete(element){
        if (this.has(element)) {
            const result =  this.items[element]
            delete this.items[element]
            return result
        }
        return undefined
    }
    clear(){
        this.items = {}
    }
    size(){
        return Object.keys(this.items).length
    }
    values(){
        let result = []
        if (this.size() > 0) {
            for (const key in this.items) {
                result.push(this.items[key])
            }
        }
       return result
    }
    union(otherSet){ // 并集
        let resultSet = new Set()
        this.values().forEach((item) => {
            resultSet.add(item)
        })
        otherSet.values().forEach((item) => [
            resultSet.add(item)
        ])
        return resultSet
    }
    intersection(otherSet){ // 交集
        const intersection = new Set()
        const values = this.values
        const otherSetValues = otherSet.values
        let bigSet = values
        let smallSet = otherSetValues
        if (otherSetValues.length - values.length > 0) { // 传入的集合大
            bigSet = otherSetValues
            smallSet = values
        }
        smallSet.forEach(item => {
            if (bigSet.has(item)) {
                intersection.add(item)
            }
        })
        return intersection
    }
    difference(otherSet){  // 差集
        const differenceSet = new Set()
        this.values.forEach(item => {
            if (!otherSet.has(item)) {
                differenceSet.add(item)
            }
        })
        return differenceSet
    }
    isSubsetOf(otherSet){
        if (this.size() > otherSet.size()) { // 当前的集合大
            return false
        } 
        let isSubset = true
        this.values().every(values => {
            if (!otherSet.has(values)) {
                isSubset = false
                return false
            }
            return true
        })
        return isSubset
    }
}


var set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(4)
console.log(set) // Set { items: { '1': 1, '2': 2, '3': 3, '4': 4 } }
// set.delete(3)
// console.log(set) // Set { items: { '1': 1, '2': 2, '4': 4 } }
// console.log(set.size()) // 3
// console.log(set.values()) // [1,2,4]

var set1 = new Set()
set1.add(5)
set1.add(6)
set1.add(7)
set1.add(8)
console.log(set1)

console.log(set.union(set1)) // Set {items: { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8 }}