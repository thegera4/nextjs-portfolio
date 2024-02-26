import { test, expect } from '@playwright/test';

test.describe('Skills view tests', () => {
  // Recording...
  test.beforeEach(async ({ page }) => {
    await page.goto('https://jgmedellin.vercel.app/#skills');
  })

  test('should have the title "SKILLS" and a text with a description of the section', async ({ page }) => {
    await expect(page.locator('h3:has-text("SKILLS")')).toBeVisible()
    await expect(page.locator('h3:has-text("The tech stack that I have used:")')).toBeVisible()
  })

  test('should render all skills (images)', async ({ page }) => {
    await expect(page.locator('img[alt="JavaScript"]')).toBeVisible()
    await expect(page.locator('img[alt="TypeScript"]')).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'HTML' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'CSS' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'React' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'NextJS' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'NodeJS' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'Express' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'Gin' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'Python' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'FastApi' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'Java', exact: true })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'Kotlin' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'Android' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'Firebase' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'Dart' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'Flutter' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'Docker' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'Kubernetes' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'PostgreSQL' })).toBeVisible()
    await expect(page.locator('img[alt="MySQL"]')).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'MongoDB' })).toBeVisible()
    await expect(page.locator('#skills').getByRole('img', { name: 'SQLite' })).toBeVisible()
  })


});