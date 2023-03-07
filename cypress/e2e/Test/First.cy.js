let add = (a,b) => a+b;
let substract = (a,b) => a-b;
let divide = (a,b) => a/b;
let multiply = (a,b) => a*b;

describe ('Unit testing for our dummy aplication', () => {
    context('Math whit positive numbers', () => {
        it('should add positive numbers', () => {
            expect(add(1,2)).to.eq(3)
        })
        it('should substract positive numbers', () => {
            expect(substract(4,2)).to.eq(2)
        })
        it('should divide positive numbers', () => {
            expect(divide(4,2)).to.eq(2)
        })
        it('should multiply positive numbers', () => {
            expect(multiply(4,2)).to.eq(8)
        })
    });

    context('Math whit decimal numbers', () => {
        it('should add decimal numbers', () => {
            expect(add(4.2,2.2)).to.eq(6.4)
        })
        it('should substract decimal numbers', () => {
            expect(substract(4.4,2.2)).to.eq(2.2)

        })
       
    });
})