import { test, expect } from '@playwright/test';
import exp from 'constants';

test.describe('LanguageSelector component tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://jgmedellin.vercel.app/');
  })

  test('should display the translate icon and a select element', async ({ page }) => {
    const svgElement = page.locator('div').filter({ hasText: /^ENES$/ }).locator('path')
    await expect(svgElement).toBeVisible()
    const selectElement = page.locator('select')
    await expect(selectElement).toBeVisible()
  })

  test('the select should contain 2 options and change accordingly', async ({ page }) => {
    const selectElement = page.locator('select')
    await expect(selectElement).toHaveValue('en')
    await expect(selectElement).not.toHaveValue('es')
   
    const options = selectElement.locator('option')
    await expect(options).toHaveCount(2)

    await selectElement.selectOption('es')
    await expect(selectElement).toHaveValue('es')

    await selectElement.selectOption('en')
    await expect(selectElement).toHaveValue('en')
  })

});