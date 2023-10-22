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
    expect(project1).toBeVisible()

    const nextBtn = page.locator('.relative > .swiper > .swiper-button-next')
    await nextBtn.click();
    const div = page.locator('.relative > .swiper > .swiper-wrapper')
    const divStyle = await div.getAttribute('style')
    expect(divStyle).toContain('translate3d(-1280px, 0px, 0px)')

    const prevBtn = page.locator('.relative > .swiper > .swiper-button-prev')
    await prevBtn.click()
    const divStyle2 = await div.getAttribute('style')
    expect(divStyle2).toContain('translate3d(0px, 0px, 0px)')

  })

});