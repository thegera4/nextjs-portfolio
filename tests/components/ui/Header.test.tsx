import { test, expect } from '@playwright/test';

test('Header component renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const header = await page.$('header');
  expect(header).not.toBeNull();
});

test('Contains an input selector for language with 2 options', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const languageSelector = await page.$('header select');
    expect(languageSelector).not.toBeNull();

    const languageSelectorOptions = await page.$$('header select option');
    expect(languageSelectorOptions.length).toBe(2);
});

test('Contains a Contact link', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const contactLink = await page.$('header a');
    expect(contactLink).toBeTruthy();
});

test('Contains a link to my Github', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const githubLink = await page.$('header a[href="https://github.com/thegera4"]');
    expect(githubLink).toBeTruthy();
});

test('Contains a link to my LinkedIn', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const linkedinLink = await page.$('header a[href="https://linkedin.com/in/juan-gerardo-medellin-ibarra-8b207058/"]');
    expect(linkedinLink).toBeTruthy();
});

test('Contains a link to my Blog', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const blogLink = await page.$('header a[href="https://jgmedellin-blog.vercel.app/"]');
    expect(blogLink).toBeTruthy();
});