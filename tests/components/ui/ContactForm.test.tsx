import { test, expect } from '@playwright/test';

test.describe('ContactForm component tests', () => {
  // Recording...
  test.beforeEach(async ({ page }) => {
    await page.goto('https://nextjs-portfolio-thegera4.vercel.app/#contact');
  })

  test('should display my phone number and my email', async ({ page }) => {
    expect(page.locator('div').filter({ hasText: /^\+52-87-12-75-95-53$/ })).toBeTruthy();
    expect(page.locator('div').filter({ hasText: /^thegera4@hotmail.com$/ })).toBeTruthy();
  })

  test('should display a form with 3 inputs, a textarea and a Send button', async ({ page }) => {
    const nameInput = page.getByPlaceholder('Name')
    expect(nameInput).toBeTruthy();
    const emailInput = page.getByPlaceholder('Email')
    expect(emailInput).toBeTruthy();
    const subjectInput = page.getByPlaceholder('Subject')
    expect(subjectInput).toBeTruthy();
    const messageInput = page.getByPlaceholder('Message')
    expect(messageInput).toBeTruthy();
    const sendButton = page.getByRole('button', { name: 'Send' })
    expect(sendButton).toBeTruthy();
  })

});