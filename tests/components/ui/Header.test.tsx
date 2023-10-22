import { test, expect } from '@playwright/test';

test.describe('Header component tests with codegen', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://jgmedellin.vercel.app/');
  })

  test('should display the header', async ({ page }) => {
    expect(await page.isVisible('header')).toBeTruthy();
  })

  test('should have a github icon and when clicked, it opens my github profile in a new tab', async ({ page }) => {
    const github = page.getByLabel('github');
    expect(await github.isVisible()).toBeTruthy();
    expect(await github.getAttribute('target')).toBe('_blank');
    await github.click();
    const popup = await page.waitForEvent('popup');
    expect(popup.url()).toBe('https://github.com/thegera4')
  })

  test('should have a linkedin icon and when clicked, it opens my linkedin profile in a new tab', async ({ page }) => {
    const linkedin = page.getByLabel('linkedin');
    expect(await linkedin.isVisible()).toBeTruthy();
    expect(await linkedin.getAttribute('target')).toBe('_blank');
    await linkedin.click();
    const popup = await page.waitForEvent('popup');
    expect(popup.url()).toBe('https://www.linkedin.com/in/juan-gerardo-medellin-ibarra-8b207058/')
  })

  test('should have a share icon and when clicked, it opens my blog in a new tab', async ({ page }) => {
    const sharethis = page.getByLabel('sharethis');
    expect(await sharethis.isVisible()).toBeTruthy();
    expect(await sharethis.getAttribute('target')).toBe('_blank');
    await sharethis.click();
    const popup = await page.waitForEvent('popup');
    expect(popup.url()).toBe('https://jgmedellin-blog.vercel.app/')
  })

  test('should have a contact link and when clicked, it scrolls down to the contact section', async ({ page }) => {
    const email = page.getByLabel('email');
    expect(await email.isVisible()).toBeTruthy();
    const contact = page.getByRole('link', { name: 'CONTACT' });
    expect(await contact.isVisible()).toBeTruthy();
    await contact.click();
    expect(page.url()).toBe('https://jgmedellin.vercel.app/#contact');
  })

  test('should have a language selector with 2 options "EN" and "ES", and changes the language', async ({ page }) => {
    const language = page.getByTitle('Select Language');
    expect(await language.isVisible()).toBeTruthy();
    expect(await language.getAttribute('value')).toBe(null);

    await language.selectOption('es');
    await page.waitForTimeout(1000);
    expect(page.url()).toBe('https://jgmedellin.vercel.app/es');
    const sobre_mi = page.getByRole('link', { name: 'SOBRE MI' });
    const experiencia = page.getByRole('link', { name: 'EXPERIENCIA' });
    const habilidades = page.getByRole('link', { name: 'HABILIDADES' });
    const proyectos = page.getByRole('link', { name: 'PROYECTOS' });
    expect(await sobre_mi.isVisible()).toBeTruthy();
    expect(await experiencia.isVisible()).toBeTruthy();
    expect(await habilidades.isVisible()).toBeTruthy();
    expect(await proyectos.isVisible()).toBeTruthy();

    await language.selectOption('en');
    await page.waitForTimeout(1000);
    expect(page.url()).toBe('https://jgmedellin.vercel.app/');
    const about = page.getByRole('link', { name: 'ABOUT' });
    const experience = page.getByRole('link', { name: 'EXPERIENCE' });
    const skills = page.getByRole('link', { name: 'SKILLS' });
    const projects = page.getByRole('link', { name: 'PROJECTS' });
    expect(await about.isVisible()).toBeTruthy();
    expect(await experience.isVisible()).toBeTruthy();
    expect(await skills.isVisible()).toBeTruthy();
    expect(await projects.isVisible()).toBeTruthy();
  })

})