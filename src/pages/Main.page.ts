import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./Base.page";

export enum Operator {
    SUM = "Add (press +)",
    SUBTRACT = "Subtract (press -)",
    MULTIPLY = "Multiply (press ×)",
    DIVIDE = "Divide (press /)"
}

export class MainPage extends BasePage {

    readonly answerDisplayInputField: Locator;
    readonly calculateButton: Locator;

    constructor(page: Page) {
        super(page, '/');
        
        this.answerDisplayInputField = page.locator("#display");
        this.calculateButton = page.locator("input[name='calculate']");
    }

    async calculate(firstValue: number|string, secondValue: number|string, operator: Operator): Promise<void> {
        await this.answerDisplayInputField.pressSequentially(firstValue.toString());
        await this.page.getByTitle(operator).click();
        await this.answerDisplayInputField.pressSequentially(secondValue.toString());       
        await this.calculateButton.click();
    }

    async answerShouldBe(expectedValue: number|string): Promise<void> {
        await expect(
            this.answerDisplayInputField,
            `Answer is ${await this.answerDisplayInputField.inputValue()} but should be ${expectedValue}`
        ).toHaveValue(expectedValue.toString());
    }
}
