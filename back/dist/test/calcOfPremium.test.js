"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calc0fPremium_1 = require("../src/calc0fPremium");
const chai_1 = __importDefault(require("chai"));
const expect = chai_1.default.expect;
beforeEach(() => {
    this.element = new calc0fPremium_1.CalcPremiumNumber();
});
describe('initialisation of target', () => {
    expect;
});
describe('initialisation of class', () => {
    it('should have a public listPrime property', () => {
        expect(this.element.listPrime).to.exist;
    });
});
describe('iterate function ', () => {
    it('should run function until there is 10001 number premium found', (done) => {
        this.element.target = 10;
        this.element.getResult().then((result) => {
            console.log("result = " + result);
            expect(this.element.listPrime.length).to.equal(this.element.target);
            done();
        });
    });
});
describe('specs function isPremium', () => {
    it('should return false if arg number is no a premium', () => {
        expect(this.element.isPremium(170)).to.be.false;
    });
    it('should return true if arg number is a premium', () => {
        expect(this.element.isPremium(13)).to.equal(13);
    });
});
describe('specs function isDividedByItself', () => {
    it('should return false if number arg can be divided by itself', () => {
        expect(this.element.isDividedByItself(36)).to.be.true;
        expect(this.element.isDividedByItself(144)).to.be.true;
        expect(this.element.isDividedByItself(2500)).to.be.true;
    });
    it('should return false if number arg can be divided by itself', () => {
        expect(this.element.isDividedByItself(34)).to.be.false;
        expect(this.element.isDividedByItself(170)).to.be.false;
        expect(this.element.isDividedByItself(1000)).to.be.false;
    });
});
it('should return 10001 nth prime number', function (done) {
    this.timeout(10000);
    this.element = new calc0fPremium_1.CalcPremiumNumber();
    this.element.target = 10001;
    this.element.getResult().then((result) => {
        expect(result).to.equal(104743);
        done();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY09mUHJlbWl1bS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9jYWxjT2ZQcmVtaXVtLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx3REFBeUQ7QUFDekQsZ0RBQXdCO0FBQ3hCLE1BQU0sTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFM0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQ0FBaUIsRUFBRSxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsRUFBRTtJQUN0QyxNQUFNLENBQUE7QUFDVixDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLHlDQUF5QyxFQUFFLEdBQUcsRUFBRTtRQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQy9CLEVBQUUsQ0FBQywrREFBK0QsRUFBRSxDQUFDLElBQWMsRUFBRSxFQUFFO1FBQ25GLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEUsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUE7QUFFRixRQUFRLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxFQUFFO0lBQ3RDLEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxHQUFHLEVBQUU7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0NBQStDLEVBQUUsR0FBRyxFQUFFO1FBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7SUFDOUMsRUFBRSxDQUFDLDREQUE0RCxFQUFFLEdBQUcsRUFBRTtRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw0REFBNEQsRUFBRSxHQUFHLEVBQUU7UUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQTtBQUVGLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxVQUFTLElBQWM7SUFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUNBQWlCLEVBQUUsQ0FBQztJQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtRQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ2FsY1ByZW1pdW1OdW1iZXIgfSBmcm9tIFwiLi4vc3JjL2NhbGMwZlByZW1pdW1cIjtcclxuaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XHJcbmNvbnN0IGV4cGVjdCA9IGNoYWkuZXhwZWN0O1xyXG5cclxuYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBuZXcgQ2FsY1ByZW1pdW1OdW1iZXIoKTtcclxufSk7XHJcblxyXG5kZXNjcmliZSgnaW5pdGlhbGlzYXRpb24gb2YgdGFyZ2V0JywgKCkgPT4ge1xyXG4gICAgZXhwZWN0XHJcbn0pO1xyXG5cclxuZGVzY3JpYmUoJ2luaXRpYWxpc2F0aW9uIG9mIGNsYXNzJywgKCkgPT4ge1xyXG4gICAgaXQoJ3Nob3VsZCBoYXZlIGEgcHVibGljIGxpc3RQcmltZSBwcm9wZXJ0eScsICgpID0+IHtcclxuICAgICAgICBleHBlY3QodGhpcy5lbGVtZW50Lmxpc3RQcmltZSkudG8uZXhpc3Q7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5kZXNjcmliZSgnaXRlcmF0ZSBmdW5jdGlvbiAnLCAoKSA9PiB7XHJcbiAgICBpdCgnc2hvdWxkIHJ1biBmdW5jdGlvbiB1bnRpbCB0aGVyZSBpcyAxMDAwMSBudW1iZXIgcHJlbWl1bSBmb3VuZCcsIChkb25lOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50YXJnZXQgPSAxMDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0UmVzdWx0KCkudGhlbigocmVzdWx0OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgPSBcIityZXN1bHQpO1xyXG4gICAgICAgICAgICBleHBlY3QodGhpcy5lbGVtZW50Lmxpc3RQcmltZS5sZW5ndGgpLnRvLmVxdWFsKHRoaXMuZWxlbWVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KVxyXG5cclxuZGVzY3JpYmUoJ3NwZWNzIGZ1bmN0aW9uIGlzUHJlbWl1bScsICgpID0+IHtcclxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIGlmIGFyZyBudW1iZXIgaXMgbm8gYSBwcmVtaXVtJywgKCkgPT4ge1xyXG4gICAgICAgIGV4cGVjdCh0aGlzLmVsZW1lbnQuaXNQcmVtaXVtKDE3MCkpLnRvLmJlLmZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpZiBhcmcgbnVtYmVyIGlzIGEgcHJlbWl1bScsICgpID0+IHtcclxuICAgICAgICBleHBlY3QodGhpcy5lbGVtZW50LmlzUHJlbWl1bSgxMykpLnRvLmVxdWFsKDEzKTtcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuZGVzY3JpYmUoJ3NwZWNzIGZ1bmN0aW9uIGlzRGl2aWRlZEJ5SXRzZWxmJywgKCkgPT4ge1xyXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgaWYgbnVtYmVyIGFyZyBjYW4gYmUgZGl2aWRlZCBieSBpdHNlbGYnLCAoKSA9PiB7XHJcbiAgICAgICAgZXhwZWN0KHRoaXMuZWxlbWVudC5pc0RpdmlkZWRCeUl0c2VsZigzNikpLnRvLmJlLnRydWU7XHJcbiAgICAgICAgZXhwZWN0KHRoaXMuZWxlbWVudC5pc0RpdmlkZWRCeUl0c2VsZigxNDQpKS50by5iZS50cnVlO1xyXG4gICAgICAgIGV4cGVjdCh0aGlzLmVsZW1lbnQuaXNEaXZpZGVkQnlJdHNlbGYoMjUwMCkpLnRvLmJlLnRydWU7XHJcbiAgICB9KVxyXG5cclxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIGlmIG51bWJlciBhcmcgY2FuIGJlIGRpdmlkZWQgYnkgaXRzZWxmJywgKCkgPT4ge1xyXG4gICAgICAgIGV4cGVjdCh0aGlzLmVsZW1lbnQuaXNEaXZpZGVkQnlJdHNlbGYoMzQpKS50by5iZS5mYWxzZTtcclxuICAgICAgICBleHBlY3QodGhpcy5lbGVtZW50LmlzRGl2aWRlZEJ5SXRzZWxmKDE3MCkpLnRvLmJlLmZhbHNlO1xyXG4gICAgICAgIGV4cGVjdCh0aGlzLmVsZW1lbnQuaXNEaXZpZGVkQnlJdHNlbGYoMTAwMCkpLnRvLmJlLmZhbHNlO1xyXG4gICAgfSlcclxufSlcclxuXHJcbml0KCdzaG91bGQgcmV0dXJuIDEwMDAxIG50aCBwcmltZSBudW1iZXInLCBmdW5jdGlvbihkb25lOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy50aW1lb3V0KDEwMDAwKTtcclxuICAgIHRoaXMuZWxlbWVudCA9IG5ldyBDYWxjUHJlbWl1bU51bWJlcigpO1xyXG4gICAgdGhpcy5lbGVtZW50LnRhcmdldCA9IDEwMDAxO1xyXG4gICAgdGhpcy5lbGVtZW50LmdldFJlc3VsdCgpLnRoZW4oKHJlc3VsdDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgZXhwZWN0KHJlc3VsdCkudG8uZXF1YWwoMTA0NzQzKTtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICB9KVxyXG59KVxyXG4iXX0=