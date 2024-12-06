import { expect, test } from "@playwright/test";

test.describe("landing page", () => {
  test("given any user: shows the test user", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("Marylin Hudson")).toBeVisible();
    await expect(page.getByText("hudson.marylin@gmail.com")).toBeVisible();
  });
});
