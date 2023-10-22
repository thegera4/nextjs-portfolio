import { test, expect } from '@playwright/test';

test.describe('WorkExperience view test', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://jgmedellin.vercel.app/#experience');
  })

  test('should have the title "EXPERIENCE"', async ({ page }) => {
    await expect(page.locator('h3:has-text("EXPERIENCE")')).toBeVisible()
  })

  test('should display and change the work experience card when clicking on the arrows', async ({ page }) => {
    await expect(page.locator('article').filter({ hasText: 'Frontend DeveloperFinanciera IndependenciaNov 2022 - PresentWork with a team of ' })).toBeVisible()
    const nextBtn = page.locator('.swiper-button-next').first()
    const prevBtn = page.locator('.swiper-button-prev').first()
    await nextBtn.click()
    await expect(page.locator('article').filter({ hasText: 'Ads AssesorTelus InternationalDec 2020 - Dec 2022Analysis of electronic marketin' })).toBeVisible()
    await prevBtn.click()
    await expect(page.locator('article').filter({ hasText: 'Frontend DeveloperFinanciera IndependenciaNov 2022 - PresentWork with a team of ' })).toBeVisible()
  })

});