const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false }); // Запуск браузера в не-headless режиме для отображения
  const page = await browser.newPage();
  await page.goto('https://whywe.ru');

  // Получение заголовка страницы
  const title = await page.title();
  console.log(`Заголовок страницы: ${title}`);

  // Взаимодействие с элементом
  await page.click('text=More information');

  // Ожидание загрузки новой страницы
  await page.waitForNavigation();

  // Получение URL текущей страницы
  const url = page.url();
  console.log(`Текущий URL: ${url}`);

  await browser.close();
})();
