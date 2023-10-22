import { test, expect } from '@playwright/test';

test.describe('HERO view tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://jgmedellin.vercel.app/');
  })

  test('should have my picture', async ({ page }) => {
    expect(await page.isVisible('img[alt="Juan Gerardo"]')).toBeTruthy();
  })

  test('should have my title and a type writer effect header', async ({ page }) => {
    expect(await page.isVisible('h1')).toBeTruthy();
    expect(await page.locator('h2:has-text("FULLSTACK DEVELOPER")').isVisible()).toBeTruthy();
  })

  test('should have 4 links to different page sections', async ({ page }) => {
    const about = page.getByRole('link', { name: 'ABOUT' });
    expect(await about.isVisible()).toBeTruthy();
    await about.click();
    expect(page.url()).toBe('https://jgmedellin.vercel.app/#about');
    
    const experience = page.getByRole('link', { name: 'EXPERIENCE' });
    expect(await experience.isVisible()).toBeTruthy();
    await experience.click();
    expect(page.url()).toBe('https://jgmedellin.vercel.app/#experience');

    const skills = page.getByRole('link', { name: 'SKILLS' });
    expect(await skills.isVisible()).toBeTruthy();
    await skills.click();
    expect(page.url()).toBe('https://jgmedellin.vercel.app/#skills');

    const projects = page.getByRole('link', { name: 'PROJECTS' });
    expect(await projects.isVisible()).toBeTruthy();
    await projects.click();
    expect(page.url()).toBe('https://jgmedellin.vercel.app/#projects');
  })

});