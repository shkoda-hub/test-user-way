import { test as base } from "@playwright/test"
import { MainPage } from "./src/pages/Main.page"

type Fixtures = {
    pages: {
        mainPage: MainPage
    }
}

export const test = base.extend<Fixtures>({
    pages: async ({ page }, use) => {
        const pages = {
            mainPage: new MainPage(page)
        }
        
        await use(pages);
    }
})