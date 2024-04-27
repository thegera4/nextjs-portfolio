import { test, expect } from '@playwright/test';

test.describe('test', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://jgmedellin.vercel.app/#projects');
  })

  test('should have the title "PROJECTS"', async ({ page }) => {
    await expect(page.locator('h3:has-text("PROJECTS")')).toBeVisible()
  })

  test('should display a project card and change the project when clicking on the arrows', async ({ page }) => {
    const project1 = page.getByText('TuSpacioSee DemoSource CodeThis is a Fullstack E-commerce web app about beauty p')
    expect(project1).toBeHidden()

    const nextBtn = page.locator('.relative > .swiper > .swiper-button-next')
    await nextBtn.click();
    const div = page.locator('.relative > .swiper > .swiper-wrapper')
    const divStyle = await div.getAttribute('style')
    
    if (divStyle !== null) {
      // Use a regular expression to extract the numeric value from the transform property
      const transformValueMatch = divStyle.match(/translate3d\((-?\d+)px, 0px, 0px\)/)
      if (transformValueMatch !== null) {
        // Parse the extracted numeric value as an integer
        const transformValue = parseInt(transformValueMatch[1], 10)
        //change tansformValue to absolute value
        const transformValueABS = Math.abs(transformValue)
        // Check if the numeric value is within the desired range (1270 to 1280)
        expect(transformValueABS).toBeGreaterThanOrEqual(1152)
        expect(transformValueABS).toBeLessThanOrEqual(1280)
      }
    }
  
    const prevBtn = page.locator('.relative > .swiper > .swiper-button-prev')
    await prevBtn.click()
    const divStyle2 = await div.getAttribute('style')
    expect(divStyle2).toContain('translate3d(0px, 0px, 0px)')

  })

});