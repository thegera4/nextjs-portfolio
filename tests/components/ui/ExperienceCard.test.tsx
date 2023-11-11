import { ExperienceCard } from '@/types';
import { test, expect } from '@playwright/test';

test.describe('ExperienceCard component tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://jgmedellin.vercel.app/#experience');
  })

  test('should display the ExperienceCard component', async ({ page }) => {
    const experienceCard = page.locator('article')
    await expect(experienceCard).toHaveCount(9)
  })


});