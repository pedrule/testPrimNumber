
import { CalcPremiumNumber } from "../src/calc0fPremium";
import chai from 'chai';
const expect = chai.expect;

beforeEach(() => {
    this.element = new CalcPremiumNumber();
});

describe('initialisation of target', () => {
    expect
});

describe('initialisation of class', () => {
    it('should have a public listPrime property', () => {
        expect(this.element.listPrime).to.exist;
    });
});

describe('iterate function ', () => {
    it('should run function until there is 10001 number premium found', (done: Function) => {
        this.element.target = 10;
        this.element.getResult().then((result: number) => {
            console.log("result = "+result);
            expect(this.element.listPrime.length).to.equal(this.element.target);
            done();
        });
        
    })
})

describe('specs function isPremium', () => {
    it('should return false if arg number is no a premium', () => {
        expect(this.element.isPremium(170)).to.be.false;
    });

    it('should return true if arg number is a premium', () => {
        expect(this.element.isPremium(13)).to.equal(13);
    })
});

describe('specs function isDividedByItself', () => {
    it('should return false if number arg can be divided by itself', () => {
        expect(this.element.isDividedByItself(36)).to.be.true;
        expect(this.element.isDividedByItself(144)).to.be.true;
        expect(this.element.isDividedByItself(2500)).to.be.true;
    })

    it('should return false if number arg can be divided by itself', () => {
        expect(this.element.isDividedByItself(34)).to.be.false;
        expect(this.element.isDividedByItself(170)).to.be.false;
        expect(this.element.isDividedByItself(1000)).to.be.false;
    })
})

it('should return 10001 nth prime number', function(done: Function) {
    this.timeout(10000);
    this.element = new CalcPremiumNumber();
    this.element.target = 10001;
    this.element.getResult().then((result: number) => {
        expect(result).to.equal(104743);
        done();
    })
})
