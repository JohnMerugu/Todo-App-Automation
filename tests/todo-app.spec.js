import { test, expect } from '@playwright/test';

test('test todo-app @smoke', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Check grocery list');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('go for shopping');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Fill gas');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Go to workout');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Drink Water');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Water plants');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Water plants' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Drink Water' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Fill gas' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.getByText('Check grocery list')).toBeVisible();
  await expect(page.getByTestId('todo-list')).toContainText('Go to workout');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(3);
});