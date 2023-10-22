import { Page } from "@playwright/test";

export class BasePage {

    readonly page: Page;
    readonly relatedUrl: string;

    constructor(page: Page, relatedUrl = '') {
        this.page = page;
        this.relatedUrl = relatedUrl;
    }

    async open(): Promise<void> {
        // console.log("page is " + this.relatedUrl)
        await this.page.goto(this.relatedUrl);
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('load');
    }
}
