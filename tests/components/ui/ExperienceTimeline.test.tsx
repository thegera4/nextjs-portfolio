import { test, expect } from '@playwright/test';

test.describe('ExperienceTimeline component tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://jgmedellin.vercel.app/#experience');
    })

    test('the "Experience" section is visible', async ({ page }) => {
        await page.waitForSelector('#experience');
        expect(await page.isVisible('#experience')).toBeTruthy();
    });

    test('the "Download CV" button, downloads my CV', async ({ page }) => {
        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('link', { name: 'Download CV' }).click();
        const download = await downloadPromise;
        await download.saveAs('cv.pdf');
        expect(download.suggestedFilename()).toContain('CV Juan Gerardo eng v7');
    });

});