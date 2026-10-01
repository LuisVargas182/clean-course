

type Size = '' |'S' | 'M' | 'L' | 'XL';
class Product {
    constructor(
        public name: string='',
        public price: number=0,
        public size: Size=''
    ) {}

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (this[key].length <= 0) throw new Error(`Product ${key} cannot be empty`);;
                    break;
                case 'number':
                    if (this[key] <= 0) throw new Error(`Product ${key} must be greater than zero`);
                    break;
                default:
                    if (this[key] === '') throw new Error(`Product ${key} must be specified`);
            }
        }
        return true;
    }



    toString(){
//if (this.name.length<= 0) throw new Error('Product name cannot be empty');
//if (this.price <= 0) throw new Error('Product price must be greater than zero');
//if (this.size === '') throw new Error('Product size must be specified');


        if (!this.isProductReady()) return;

        return `Product: ${this.name}, Price: $${this.price}, Size: ${this.size}`;
    }
}   

(() => {

const blueShirt = new Product('Blue shirt', 29.99, 'M');
const redHat = new Product('Red Hat', 19.99, 'S');
const greenPants = new Product('Green Pants', 39.99, 'L');

console.log({ blueShirt: blueShirt.toString() });
console.log({ redHat: redHat.toString() });
console.log({ greenPants: greenPants.toString() });

})();