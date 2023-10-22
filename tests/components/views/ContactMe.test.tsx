import { test, expect } from '@playwright/test';

test.describe('ContactMe view tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://jgmedellin.vercel.app/#contact');
  })

  test('should have the title "GET IN TOUCH", a text with my phone, a text with my email and a form', async ({ page }) => {
    await expect(page.locator('h3:has-text("GET IN TOUCH")')).toBeVisible()
    await expect(page.locator('p:has-text("+52-87-12-75-95-53")')).toBeVisible()
    await expect(page.locator('p:has-text("thegera4@hotmail.com")')).toBeVisible()
    await expect(page.locator('form')).toBeVisible()
  })

});