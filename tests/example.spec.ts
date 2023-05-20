import { test, expect, Page } from '@playwright/tests';

const usuario: string = 'tomsmith';
const password: string = 'SuperSecretPassword!';

const formAuthenticationLink: string = 'Form Authentication';
const usernameInput: string = 'input[name="username"]';
const passwordInput: string = 'input[name="password"]';
const submitButton: string = 'button[type="submit"]';

const messageBanner: string = 'div[id="flash"]';

test.describe('Suite de pruebas de login @Login', () => {
    test('Caso positivo @LoginPositivo @Smoke', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');
        await page.getByText(formAuthenticationLink).click();
        expect(page.url(), "Tengo que ver la url de la login page").toBe("https://the-internet.herokuapp.com/login");

        await completarDatos(page);
        expect(await validarBanner(page), "Tengo que ver el mensaje de éxito").toBeTruthy();
    });

});


async function completarDatos(page: Page) {
    await page.locator(usernameInput).fill(usuario);
    await page.locator(passwordInput).fill(password);
    await page.locator(submitButton).click();
}

async function validarBanner(page: Page): Promise<boolean | undefined> {
    const texto = await page.locator(messageBanner).textContent();
    return texto?.includes("You logged into a secure area!") || texto?.includes("Tengo que ver el mensaje de fallo");
}

