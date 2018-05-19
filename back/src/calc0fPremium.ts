
export class CalcPremiumNumber {
    public listPrime: Array<number>;
    private _target: number;

    constructor() {
        this.listPrime = [2,3,5,7,11,13];
    }

    /**
     * @public
     * @setter
     * number aimed in premium number list to be displayed
     * Each time this value is setted,  iterate function is run
     * to populate until index target
     */
    set target(value: number) {
        this._target = value;
    }

    /**
     * @getter 
     * @returns number
     */
    get target():number{
        return this._target ? this._target : this.listPrime.length;//if _target is not setted when target property is called return listPrime length
    }

    /**
     * @public
     * return promise which is resolved when iteration end to the target setted
     */
    public getResult():Promise<number> {
        return this.iterate();
    }

    /**
     * @returns Promise
     * iterates numbers until listPrime length match with target property
     * if number is prime, it add to listPrime
     */
    private iterate():Promise<number> {
        return new Promise((resolve, reject) => {
            let numberEvaluated = (this.listPrime[this.listPrime.length-1]+2);
            while(this.listPrime.length < this.target) {
                this.addNewPremiumToList(numberEvaluated);
                numberEvaluated += 2;//we check only odd numbers
            }
            resolve(this.listPrime[this.listPrime.length - 1]);
        })
        
    }

    private addNewPremiumToList(num: number) {
        if(this.isPremium(num))this.listPrime.push(num);
    }

    /**
     * compute max iteration process not to exceed square root of number given as param
     * @param num {number}
     */
    private setMAxNum(num: number): number {
        return Math.ceil(Math.sqrt(num))
    }

    /**
     * return false if number given as param is not premium or itself otherwise
     * @param num {number}
     */
    private isPremium(num: number):any{
        return !this.isDividedByItself(num) ? this.isDividedByPrime(num) : false; 
    }

    /**
     * loop of primeList property to evaluate if number given as param is divided by prime number focused in the loop
     * @param num {number}
     */
    private isDividedByPrime(num: number):any {
        let max: number = this.setMAxNum(num);// this line set max of local iteration on square root of number
        for(let i = 1; i < this.listPrime.length; i++) {//we check if evaluated number is divided by one of primes list
            if(this.listPrime[i] <= max) {
                if(num % this.listPrime[i] === 0)return false;
            }else {
                break;// we interrupt loop if prime used to evaluate is bigger of num param
            }
        }
        return num;
    }

    /**
     * @returns Boolean
     * @param num {number}
     * evaluates if num is divided by itself
     */
    private isDividedByItself(num: number):Boolean{
        return parseInt(String(Math.sqrt(num))) === Math.sqrt(num);
    }
}