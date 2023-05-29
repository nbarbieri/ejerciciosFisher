import { Page } from "@playwright/test";

export class LoginPage {

    usuario: string = 'tomsmith';
    password: string = 'SuperSecretPassword!';

    formAuthenticationLink: string = 'Form Authentication';
    usernameInput: string = 'input[name="username"]';
    passwordInput: string = 'input[name="password"]';
    submitButton: string = 'button[type="submit"]';

    messageBanner: string = 'div[id="flash"]';

    page: Page;

    constructor(page: Page) {
        this.page = page;


    }

    async completarDatos(page: Page) {
        await page.locator(this.usernameInput).fill(this.usuario);
        await page.locator(this.passwordInput).fill(this.password);
        await page.locator(this.submitButton).click();
    }

    async validarBanner(page: Page): Promise<boolean | undefined> {
        const texto = await page.locator(this.messageBanner).textContent();
        return texto?.includes("You logged into a secure area!") || texto?.includes("Tengo que ver el mensaje de fallo");
    }

}