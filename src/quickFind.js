class QuickFind {

    constructor(n) {
        this.items = [];
        let i = 0;

        for (; i < n; i++) {
            this.items.push(i);
        }
    }
    union(x, y) {
        let i = 0;
        let prevV = this.items[x];
        for (; i < this.items.length; i++) {
            if (this.items[i] === prevV) {
                this.items[i] = this.items[y];
            }
        }
    }
    isConnected(x, y) {
        return this.items[x] === this.items[y];
    }
}

const qfe = new QuickFind(9);

qfe.union(1, 2);
console.log(qfe.isConnected(2, 3));
qfe.union(3, 1);
console.log(qfe.isConnected(2, 3));

class QuickUnion extends QuickFind {
    getRoot(i) {
        while (i != this.items[i]) {
            i = this.items[i];
        }
        return i;
    }
    union(x, y) {
        var xRoot = this.getRoot(x);
        var yRoot = this.getRoot(y);
        if (xRoot !== yRoot) {
            this.items[xRoot] = yRoot;
        }
        console.log(this.items);
    }
    isConnected(x, y) {
        return this.getRoot(x) === this.getRoot(y);
    }
}

const qfu = new QuickUnion(9);

qfu.union(1, 2);
qfu.union(5, 2);
qfu.union(5, 3);
console.log(qfu.isConnected(3, 1));
