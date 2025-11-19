export class HashMap{
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = Array.from({length: this.capacity}, () => [])
        this.keyLength = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i));
        }

        return hashCode % this.capacity
    }

    set(key, value) {
        const index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index]

        //If key exist in bucket update value
        for (let pair of bucket) {
            if (pair.key === key) {
                pair.value = value
                return
            }
        }
        
        //Push new pair to bucket if new key or empty bucket
        bucket.push({"key": key, "value": value})
        this.keyLength++;

        if (this.keyLength > this.capacity * this.loadFactor) {
            this.grow()
        }
    }

    grow() {
        const oldBuckets = this.buckets
        this.capacity *= 2;
        this.buckets = Array.from({length: this.capacity}, () => []);
        this.keyLength = 0;

        for (let bucket of oldBuckets) {
            if (bucket.length >= 1) {
                bucket.map((pair) => this.set(pair.key, pair.value))
            }
        }
    }

    get(key) {
        const index = this.hash(key)

        for (let pair of this.buckets[index]) {
            if (pair.key === key) {
                return pair.value
            }
        }
        return null
    }

    has(key) {
        const index = this.hash(key)

        for (let pair of this.buckets[index]) {
            if (pair.key === key) {
                return true
            }
        }
        return false
    }

    remove(key) {
        const index = this.hash(key)
        let bucket = this.buckets[index]
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1)
                this.keyLength--;
                return true
            }
        }
        return false
    }

    length() {
        return this.keyLength;
    }

    clear() {
        this.buckets = Array.from({length: this.capacity}, () => []); 
        this.keyLength = 0;
    }

    keys() {
        let keys = []

        for (let bucket of this.buckets) {
            if (bucket.length >= 1) {
                keys.push(bucket.map((pair) => pair.key))
            }
        }
        return keys.flat()
    }

    values() {
        let values = []

        for (let bucket of this.buckets) {
            if (bucket.length >= 1) {
                values.push(bucket.map((pair) => pair.value))
            }
        }
        return values.flat()
    }

    entries() {
        let entries = []
        
        for (let bucket of this.buckets) {
            if (bucket.length >= 1) {
                entries.push(bucket.map((pair) => pair))
            }
        }
        return entries
    }
}