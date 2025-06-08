import { test, expect } from '@playwright/test';

test.describe('Homepage Screenshots', () => {
  test('capture homepage in multiple viewports', async ({ page, browserName }) => {
    // Navigate to homepage
    await page.goto('/');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Wait for the Next.js logo to be visible
    await expect(page.locator('img[alt="Next.js logo"]')).toBeVisible();
    
    // Wait a bit more for any animations or fonts to load
    await page.waitForTimeout(1000);
    
    // Get viewport size for filename
    const viewport = page.viewportSize();
    const viewportName = `${viewport?.width}x${viewport?.height}`;
    
    // Take a full page screenshot
    const screenshotPath = `homepage-${browserName}-${viewportName}.png`;
    await page.screenshot({ 
      path: `screenshots/${screenshotPath}`,
      fullPage: true 
    });
    
    // Verify that the main content is visible
    await expect(page.locator('text=このページ超カワイイでしょ💕')).toBeVisible();
    await expect(page.locator('text=今すぐデプロイしちゃお💫')).toBeVisible();
  });
  
  test('capture homepage hero section', async ({ page, browserName }) => {
    // Navigate to homepage
    await page.goto('/');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Wait for the main content to be visible
    await expect(page.locator('main')).toBeVisible();
    
    // Wait a bit more for any animations or fonts to load
    await page.waitForTimeout(1000);
    
    // Get viewport size for filename
    const viewport = page.viewportSize();
    const viewportName = `${viewport?.width}x${viewport?.height}`;
    
    // Take a screenshot of just the main section
    const screenshotPath = `homepage-hero-${browserName}-${viewportName}.png`;
    await page.locator('main').screenshot({ 
      path: `screenshots/${screenshotPath}` 
    });
  });
});