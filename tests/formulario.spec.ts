import { test, expect, Page } from '@playwright/test';

const fullname: string = 'Natalia Barbieri';
const email: string = 'barbieri.nati@gmail.com';
const currentAddress: string = 'Corrientes';
const permanentAddress: string = 'Lambare';

const fullnameInput: string = 'input[id="userName"]';
const emailInput: string = 'input[id="userEmail"]';
const currentAddressInput: string = 'textarea[id="currentAddress"]';
const permanentAdressInput: string = 'textarea[id="permanentAddress"]';
const submitButton: string = 'Submit';

const outputName: string = 'div[id="output"] >> p[id="name"]';
const outputEmail: string ='div[id="output"] >> p[id="email"]';
const outputCurrentAddress: string ='div[id="output"] >> p[id="currentAddress"]';
const outputPermanentAddress: string ='div[id="output"] >> p[id="permanentAddress"]';



test.describe('Suite de pruebas de Formulario', () => {
    test('Caso positivo @Form', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box');
        await completeForm(page);



        expect.soft(await page.locator(outputName).textContent()).toContain(fullname);
        expect.soft(await page.locator(outputEmail).textContent()).toContain(email);
        expect.soft(await page.locator(outputCurrentAddress).textContent()).toContain(currentAddress);
        expect.soft(await page.locator(outputPermanentAddress).textContent()).toContain(permanentAddress);


    })
    
});

async function completeForm(page:Page) {
    await page.locator(fullnameInput).type(fullname);
    await page.locator(emailInput).type(email);
    await page.locator(currentAddressInput).type(currentAddress);
    await page.locator(permanentAdressInput).type(permanentAddress);
    await page.getByText(submitButton).click();
    
}