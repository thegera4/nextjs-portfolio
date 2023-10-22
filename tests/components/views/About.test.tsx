import { test, expect } from '@playwright/test';

test.describe('ABOUT view test', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://jgmedellin.vercel.app/#about');
  })

  test('should have the title "ABOUT", my personal story and my picture', async ({ page }) => {
    await expect(page.locator('h3:has-text("ABOUT")')).toBeVisible()
    await expect(page.locator('p:has-text("I\'m a mechatronics engineer with 10 years of professional experience in different manufacturing industries (automotive, metal-mechanic, plastics, food, etc), in different positions (automation, maintenance, production, engineering, quality, projects, etc).")')).toBeVisible()
    await expect(page.locator('img[alt="Me"]')).toBeVisible()
  })


});