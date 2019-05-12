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