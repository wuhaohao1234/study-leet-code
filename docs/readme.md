# leetcode

## 两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案,或者多个答案。但是，你不能重复利用这个数组中同样的元素。

* example

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

解题

```
/**
 * sum 返回为一个数组中两数之和为target的下标,可选参数 deep,deep为是否返回所有的下标，比较耗费性能
 * @param nums: number[]
 * @param target: number
 */
export default function sum(nums: number[], target: number, deep: boolean = false): any[] {
    let length = nums.length
    if (deep) {
        let _nums = []
        for (let i = 0; i < length; i ++) {
            for (let k = 1; k < length - 1; k ++) {
                _nums.push({
                    key: [i , k],
                    value: nums[i] + nums[k]
                })
            }
        }
        let result: number[][] = []
        _nums.forEach((value) => {
            if (value.value === target) {
                result.push(value.key)
            }
        })
        return result
    } else {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < length; i ++) {
            for (let k = 1; k < length - 1; k ++) {
                if (nums[i] + nums[k] === target) {
                    return [i, k]
                }
            }
        }
    }
    return []
}
```

## 两数相加

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

example:

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```
解题: 
```
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
```

上述代码有待优化，例如可以使用单例模式优化代码,只可以传入三位整数，其它的没有判断