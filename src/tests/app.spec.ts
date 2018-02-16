import { expect } from 'chai';
console.log('badd');

describe('App', () => {

    it('Should expect a failure', () => {
        console.log('hello');
        expect(1).to.equal(2);
    });
});
