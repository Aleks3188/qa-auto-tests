import re
from playwright.sync_api import Page, expect


def test_homepage(page: Page):
    page.goto("https://whywe.ru/")

    # Ожидаем заголовок
    expect(page).to_have_title(re.compile("whywe"))

    # Создаем локатор
    get_started = page.get_by_role("link", name="Get started")

    # Ожидаем значения атрибута
    expect(get_started).to_have_attribute("href", "/docs/intro")

    # Нажать ссылку
    get_started.click()

    # Expects the URL to contain intro.
    expect(page).to_have_url(re.compile(".*intro"))
