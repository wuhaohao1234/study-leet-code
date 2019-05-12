interface IObjList {
    val: number[]
    key: number
    nextVal: () => number
}
function list(a: number): IObjList {
    let objList: IObjList = {
        val: [],
        key: -1,
        nextVal(){
            this.key ++
            return this.val[this.key]
        }
    }
    let num1: number = a % 10
    let num2: number = ((a - num1) / 10) % 10
    let num3: number = (a - num1 - num2 * 10) / 100
    objList.val = [num1, num2, num3]
    return  objList
}
/** 
 * add 返回为一个链表对象
 * @param a number
 * @param b number
 */ 
export default function add(a: number, b: number) {
    let result1 = list(a)
    let result2 = list(b)
    let resultArr = []
    // let num1 = result1.nextVal() + result2.nextVal()
    for (let i = 0; i < 3; i ++) {
        resultArr.push(result1.nextVal() + result2.nextVal())
    }
    if (resultArr[0] > 10) {
        resultArr[1] ++
    }
    if (resultArr[1] > 10) {
        resultArr[2] ++
    }
    let num: number = resultArr[0] + resultArr[1] * 10 + resultArr[2] * 100
    return list(num)
}