import { test, expect } from '@playwright/test';

test.describe('Tooltip component tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://nextjs-portfolio-thegera4.vercel.app/');
  })

  test('Tooltip should be visible on hover', async ({ page }) => {
    const reactLogo = page.locator('#skills').getByRole('img', { name: 'React' })
    const reactTooltip = page.getByText('React', { exact: true })

    expect(await reactLogo.isVisible()).toBe(true)
    expect(await reactTooltip.isVisible()).toBe(false)
    await reactLogo.hover()
    expect(await reactTooltip.isVisible()).toBe(true)
    expect(await reactTooltip.textContent()).toBe('React')
  });

  
});