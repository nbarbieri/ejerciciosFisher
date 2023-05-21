import { test, expect, Page } from '@playwright/test';

//constantes
const optionYesRadio = 'label[for="yesRadio"]';
const optionImpressiveRadio = 'label[for="impressiveRadio"]';
const optionNoRadio = 'label[for="noRadio"]';
const messageOption = 'p[class=mt-3]';


test.describe('Suite de pruebas de Button @RadioButton', () => {
    test('Caso YES @SelectY', async ({ page }) => {
        await page.goto('https://demoqa.com/radio-button/');
        await page.locator(optionYesRadio).click();
        expect(await isMessageCorrect(page)).toBeTruthy();

    });

    test('Caso Impressive @SelectI', async ({ page }) => {
        await page.goto('https://demoqa.com/radio-button/');
        await page.locator(optionImpressiveRadio).click();
        expect(await isMessageCorrect(page)).toBeTruthy();

    });
    test('Caso No @SelectN', async ({ page }) => {
        await page.goto('https://demoqa.com/radio-button/');
        expect (await page.locator(optionNoRadio).isDisabled()).toBeTruthy;

    });


});

async function isMessageCorrect(page: Page): Promise<boolean> {
    const text = await page.locator(messageOption).textContent();
    const optionYesSelected = await page.locator(optionYesRadio).isChecked();
    const optionImpressiveSelected = await page.locator(optionImpressiveRadio).isChecked();
    let correct = false;

    if (optionYesSelected && text?.includes('You have selected Yes')) {
        correct = true;
    }
    else if (optionImpressiveSelected && text?.includes('You have selected Impressive')) {
        correct = true;
    }

    return correct;
}