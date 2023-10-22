import { test } from "../fixtures"
import { Operator } from "../src/pages/Main.page";

test.describe('calculator tests', () => {

    test.beforeEach(async ({ pages }) => {
        await pages.mainPage.open();
    })

    test('should be possible to sum', async ({ pages }) => {
        await test.step('make operation "10 + 2"', async () => {
            await pages.mainPage.calculate(10, 2, Operator.SUM);
        })
        
        await test.step('check that answer is "12"', async () => {
            await pages.mainPage.answerShouldBe(12);
        })
    })

    test('should be possible to subtract', async ({ pages }) => {
        await test.step('make operation "100 - 27"', async () => {
            await pages.mainPage.calculate(100, 27, Operator.SUBTRACT);
        })
        
        await test.step('check that answer is "73"', async () => {
            await pages.mainPage.answerShouldBe(73);
        })
    })

    test('should be possible to multiply', async ({ pages }) => {
        await test.step('make operation "5 * 13"', async () => {
            await pages.mainPage.calculate(5, 13, Operator.MULTIPLY);
        })
        
        await test.step('check that answer is "65"', async () => {
            await pages.mainPage.answerShouldBe(65);
        })
    })

    test('should be possible to divide', async ({ pages }) => {
        await test.step('make operation "78 / 13"', async () => {
            await pages.mainPage.calculate(78, 13, Operator.DIVIDE);
        })
        
        await test.step('check that answer is "6"', async () => {
            await pages.mainPage.answerShouldBe(6);
        })
    })
    
    
    
    
    
})
