import { test, expect } from '@playwright/test';

test.describe('BackgroundCircles component tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://nextjs-portfolio-thegera4.vercel.app/');
  })

  test('should render correctly', async ({ page }) => {
    const backgroundCircles = page.locator('div:nth-child(5)').first() 
    expect(backgroundCircles).toBeTruthy();
  })

});