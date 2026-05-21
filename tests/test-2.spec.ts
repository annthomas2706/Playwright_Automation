import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by ters talk');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%2Bby%2Bters%2Btalk%26sca_esv%3D4df93d99aa26f0c3%26source%3Dhp%26ei%3DKLYOaoHQFOng2roPl8-HqQw%26iflsig%3DAFdpzrgAAAAAag7EOE8e6YpXOxbfMnpErAx72oEGBR00%26ved%3D0ahUKEwiBhITY78mUAxVpsFYBHZfnIcUQ4dUDCBA%26uact%3D5%26oq%3Dplaywright%2Bby%2Bters%2Btalk%26gs_lp%3DEgdnd3Mtd2l6IhdwbGF5d3JpZ2h0IGJ5IHRlcnMgdGFsazIHECEYChigATIHECEYChigATIHECEYChigATIHECEYChigAUipWFDkEFinVnAJeACQAQCYAYIBoAGsF6oBBTIwLjExuAEDyAEA-AEBmAImoAK5F6gCCsICChAAGAMYjwEY6gLCAgwQABgDGI8BGOoCGArCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIFEC4YgATCAgsQLhiABBixAxiDAcICDhAAGIAEGIoFGLEDGIMBwgIFEAAYgATCAg4QABiABBiKBRiNBhixA8ICDhAuGIAEGIoFGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAg4QLhiABBixAxjHARjRA8ICCxAuGIAEGMcBGK8BwgIHEAAYgAQYCsICCxAuGIMBGLEDGIAEwgIREAAYgAQYigUYjQYYsQMYgwHCAg4QLhiABBiKBRiNBhixA8ICCxAAGIAEGIoFGJIDwgIIEAAYgAQYyQPCAggQLhiABBjlBMICBhAAGBYYHsICCBAAGBYYHhgKwgIFECEYoAHCAgYQABgeGA3CAggQABgIGB4YDcICCxAAGIAEGIoFGIYDwgIIEAAYgAQYogTCAggQABiJBRiiBMICBRAhGJ8FmAMR8QUZDEaiPu4UF5IHBTI2LjEyoAfwswGyBwUxNy4xMrgHkxfCBwkxLjE0LjIxLjLIB4kBgAgB%26sclient%3Dgws-wiz%26sei%3DNrYOatLLNdnIwN4PrYmrwQs&q=EgRnoZAqGLjsutAGIjDzo6B1dpBB6Cq2T63zneWzHB5lS7zZ7iV-XfYACmIrCn58N9TOu7__MQWYhYYbzPoyAVJaAUM');
});await page.goto('https://www.google.com/');
