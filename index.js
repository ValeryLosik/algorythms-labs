//Eager method

class QuckFind() {

    constructor(n) {
        this.items = new Array(n);
        this.items.forEach((item, key) => {
            this.items[key] = key;
        });
    }
    union(x,y) {
    	let i=0;
    	let prevV = this.items[x];
    	for(;i<this.items.length;i++){
    		if(this.length[i]===prevV){
    			this.length[i] = this.length[y];
    		}
    	}
    }
    isConnected(x,y){
    	return this.items[x]===this.items[y];
    }
}

const qfe = new QuckFind(9);
console.log(qfe.items);
