import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^I open eBay website$/, async () => {
    await browser.url('https://www.ebay.com/')
});

When(/^I search for Pilas$/, async () => {
	await $('//*[@placeholder="Buscar artículos"]').setValue('Pilas')
    await $('//input[@type="submit"]').click()
});

Then(/^I should see search results and print results$/, async () => {
    const results = await $('//h1[@class="srp-controls__count-heading"]/span[1]')
    console.log('resultado: '+await results.getText())
});
