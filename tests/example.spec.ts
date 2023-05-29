import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';



test.describe('Suite de pruebas de login @Login', () => {
    test('Caso positivo @LoginPositivo @Smoke', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('https://the-internet.herokuapp.com/');
        await page.getByText(loginPage.formAuthenticationLink).click();
        expect(page.url(), "Tengo que ver la url de la login page").toBe("https://the-internet.herokuapp.com/login");

        await loginPage.completarDatos(page);
        expect(await loginPage.validarBanner(page), "Tengo que ver el mensaje de éxito").toBeTruthy();
    });

});