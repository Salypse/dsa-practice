class HashMap{
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = Array.from({length: this.capacity}, () => [])
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode
    }

    set(key, value) {
        const index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index]

        //If key exist in bucket update value
        for (let pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value
                return
            }
        }
        
        //Push new pair to bucket if new key or empty bucket
        bucket.push([key,value])
    }
}