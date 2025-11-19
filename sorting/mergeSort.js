export function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    
    const arrMiddle = Math.floor(arr.length / 2)

    const leftHalf = mergeSort(arr.slice(0, arrMiddle))
    const rightHalf = mergeSort(arr.slice(arrMiddle))

    return merge(leftHalf, rightHalf)
}

function merge(left, right) {
    const result = []
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        result.push(left[i])
        i++
    }
    while (j < right.length) {
        result.push(right[j])
        j++
    }
    return result
}