"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CalcPremiumNumber {
    constructor() {
        this.listPrime = [2, 3, 5, 7, 11, 13];
    }
    /**
     * @public
     * @setter
     * number aimed in premium number list to be displayed
     * Each time this value is setted,  iterate function is run
     * to populate until index target
     */
    set target(value) {
        this._target = value;
    }
    /**
     * @getter
     * @returns number
     */
    get target() {
        return this._target ? this._target : this.listPrime.length; //if _target is not setted when target property is called return listPrime length
    }
    /**
     * @public
     * return promise which is resolved when iteration end to the target setted
     */
    getResult() {
        return this.iterate();
    }
    /**
     * @returns Promise
     * iterates numbers until listPrime length match with target property
     * if number is prime, it add to listPrime
     */
    iterate() {
        return new Promise((resolve, reject) => {
            let numberEvaluated = (this.listPrime[this.listPrime.length - 1] + 2);
            while (this.listPrime.length < this.target) {
                this.addNewPremiumToList(numberEvaluated);
                numberEvaluated += 2; //we check only odd numbers
            }
            resolve(this.listPrime[this.listPrime.length - 1]);
        });
    }
    addNewPremiumToList(num) {
        if (this.isPremium(num))
            this.listPrime.push(num);
    }
    /**
     * compute max iteration process not to exceed square root of number given as param
     * @param num {number}
     */
    setMAxNum(num) {
        return Math.ceil(Math.sqrt(num));
    }
    /**
     * return false if number given as param is not premium or itself otherwise
     * @param num {number}
     */
    isPremium(num) {
        return !this.isDividedByItself(num) ? this.isDividedByPrime(num) : false;
    }
    /**
     * loop of primeList property to evaluate if number given as param is divided by prime number focused in the loop
     * @param num {number}
     */
    isDividedByPrime(num) {
        let max = this.setMAxNum(num); // this line set max of local iteration on square root of number
        for (let i = 1; i < this.listPrime.length; i++) { //we check if evaluated number is divided by one of primes list
            if (this.listPrime[i] <= max) {
                if (num % this.listPrime[i] === 0)
                    return false;
            }
            else {
                break; // we interrupt loop if prime used to evaluate is bigger of num param
            }
        }
        return num;
    }
    /**
     * @returns Boolean
     * @param num {number}
     * evaluates if num is divided by itself
     */
    isDividedByItself(num) {
        return parseInt(String(Math.sqrt(num))) === Math.sqrt(num);
    }
}
exports.CalcPremiumNumber = CalcPremiumNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYzBmUHJlbWl1bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWxjMGZQcmVtaXVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7SUFJSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFJLE1BQU0sQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUEsaUZBQWlGO0lBQ2hKLENBQUM7SUFFRDs7O09BR0c7SUFDSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxPQUFPO1FBQ1gsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxJQUFJLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsT0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzFDLGVBQWUsSUFBSSxDQUFDLENBQUMsQ0FBQSwyQkFBMkI7YUFDbkQ7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQUVPLG1CQUFtQixDQUFDLEdBQVc7UUFDbkMsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7O09BR0c7SUFDSyxTQUFTLENBQUMsR0FBVztRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFDSyxTQUFTLENBQUMsR0FBVztRQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM3RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssZ0JBQWdCLENBQUMsR0FBVztRQUNoQyxJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsZ0VBQWdFO1FBQ3RHLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDLCtEQUErRDtZQUMzRyxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUN6QixJQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQUMsT0FBTyxLQUFLLENBQUM7YUFDakQ7aUJBQUs7Z0JBQ0YsTUFBTSxDQUFBLHFFQUFxRTthQUM5RTtTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGlCQUFpQixDQUFDLEdBQVc7UUFDakMsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNKO0FBaEdELDhDQWdHQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgQ2FsY1ByZW1pdW1OdW1iZXIge1xyXG4gICAgcHVibGljIGxpc3RQcmltZTogQXJyYXk8bnVtYmVyPjtcclxuICAgIHByaXZhdGUgX3RhcmdldDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubGlzdFByaW1lID0gWzIsMyw1LDcsMTEsMTNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHNldHRlclxyXG4gICAgICogbnVtYmVyIGFpbWVkIGluIHByZW1pdW0gbnVtYmVyIGxpc3QgdG8gYmUgZGlzcGxheWVkXHJcbiAgICAgKiBFYWNoIHRpbWUgdGhpcyB2YWx1ZSBpcyBzZXR0ZWQsICBpdGVyYXRlIGZ1bmN0aW9uIGlzIHJ1blxyXG4gICAgICogdG8gcG9wdWxhdGUgdW50aWwgaW5kZXggdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHNldCB0YXJnZXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3RhcmdldCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGdldHRlciBcclxuICAgICAqIEByZXR1cm5zIG51bWJlclxyXG4gICAgICovXHJcbiAgICBnZXQgdGFyZ2V0KCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90YXJnZXQgPyB0aGlzLl90YXJnZXQgOiB0aGlzLmxpc3RQcmltZS5sZW5ndGg7Ly9pZiBfdGFyZ2V0IGlzIG5vdCBzZXR0ZWQgd2hlbiB0YXJnZXQgcHJvcGVydHkgaXMgY2FsbGVkIHJldHVybiBsaXN0UHJpbWUgbGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiByZXR1cm4gcHJvbWlzZSB3aGljaCBpcyByZXNvbHZlZCB3aGVuIGl0ZXJhdGlvbiBlbmQgdG8gdGhlIHRhcmdldCBzZXR0ZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFJlc3VsdCgpOlByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZVxyXG4gICAgICogaXRlcmF0ZXMgbnVtYmVycyB1bnRpbCBsaXN0UHJpbWUgbGVuZ3RoIG1hdGNoIHdpdGggdGFyZ2V0IHByb3BlcnR5XHJcbiAgICAgKiBpZiBudW1iZXIgaXMgcHJpbWUsIGl0IGFkZCB0byBsaXN0UHJpbWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpdGVyYXRlKCk6UHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyRXZhbHVhdGVkID0gKHRoaXMubGlzdFByaW1lW3RoaXMubGlzdFByaW1lLmxlbmd0aC0xXSsyKTtcclxuICAgICAgICAgICAgd2hpbGUodGhpcy5saXN0UHJpbWUubGVuZ3RoIDwgdGhpcy50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTmV3UHJlbWl1bVRvTGlzdChudW1iZXJFdmFsdWF0ZWQpO1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyRXZhbHVhdGVkICs9IDI7Ly93ZSBjaGVjayBvbmx5IG9kZCBudW1iZXJzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmxpc3RQcmltZVt0aGlzLmxpc3RQcmltZS5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZE5ld1ByZW1pdW1Ub0xpc3QobnVtOiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLmlzUHJlbWl1bShudW0pKXRoaXMubGlzdFByaW1lLnB1c2gobnVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNvbXB1dGUgbWF4IGl0ZXJhdGlvbiBwcm9jZXNzIG5vdCB0byBleGNlZWQgc3F1YXJlIHJvb3Qgb2YgbnVtYmVyIGdpdmVuIGFzIHBhcmFtXHJcbiAgICAgKiBAcGFyYW0gbnVtIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0TUF4TnVtKG51bTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGguc3FydChudW0pKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIGZhbHNlIGlmIG51bWJlciBnaXZlbiBhcyBwYXJhbSBpcyBub3QgcHJlbWl1bSBvciBpdHNlbGYgb3RoZXJ3aXNlXHJcbiAgICAgKiBAcGFyYW0gbnVtIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNQcmVtaXVtKG51bTogbnVtYmVyKTphbnl7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzRGl2aWRlZEJ5SXRzZWxmKG51bSkgPyB0aGlzLmlzRGl2aWRlZEJ5UHJpbWUobnVtKSA6IGZhbHNlOyBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGxvb3Agb2YgcHJpbWVMaXN0IHByb3BlcnR5IHRvIGV2YWx1YXRlIGlmIG51bWJlciBnaXZlbiBhcyBwYXJhbSBpcyBkaXZpZGVkIGJ5IHByaW1lIG51bWJlciBmb2N1c2VkIGluIHRoZSBsb29wXHJcbiAgICAgKiBAcGFyYW0gbnVtIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNEaXZpZGVkQnlQcmltZShudW06IG51bWJlcik6YW55IHtcclxuICAgICAgICBsZXQgbWF4OiBudW1iZXIgPSB0aGlzLnNldE1BeE51bShudW0pOy8vIHRoaXMgbGluZSBzZXQgbWF4IG9mIGxvY2FsIGl0ZXJhdGlvbiBvbiBzcXVhcmUgcm9vdCBvZiBudW1iZXJcclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgdGhpcy5saXN0UHJpbWUubGVuZ3RoOyBpKyspIHsvL3dlIGNoZWNrIGlmIGV2YWx1YXRlZCBudW1iZXIgaXMgZGl2aWRlZCBieSBvbmUgb2YgcHJpbWVzIGxpc3RcclxuICAgICAgICAgICAgaWYodGhpcy5saXN0UHJpbWVbaV0gPD0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICBpZihudW0gJSB0aGlzLmxpc3RQcmltZVtpXSA9PT0gMClyZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOy8vIHdlIGludGVycnVwdCBsb29wIGlmIHByaW1lIHVzZWQgdG8gZXZhbHVhdGUgaXMgYmlnZ2VyIG9mIG51bSBwYXJhbVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBCb29sZWFuXHJcbiAgICAgKiBAcGFyYW0gbnVtIHtudW1iZXJ9XHJcbiAgICAgKiBldmFsdWF0ZXMgaWYgbnVtIGlzIGRpdmlkZWQgYnkgaXRzZWxmXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNEaXZpZGVkQnlJdHNlbGYobnVtOiBudW1iZXIpOkJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KFN0cmluZyhNYXRoLnNxcnQobnVtKSkpID09PSBNYXRoLnNxcnQobnVtKTtcclxuICAgIH1cclxufSJdfQ==