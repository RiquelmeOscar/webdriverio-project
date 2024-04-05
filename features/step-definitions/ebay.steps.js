import { Given, When, Then } from '@wdio/cucumber-framework';

import SearchPage from '../pageobjects/search.page.js';
import ResultPage from '../pageobjects/result.page.js';

Given(/^I open eBay website$/, async () => {
    await SearchPage.open()
});

When(/^I search for (\w+)$/, async (text) => {
    await SearchPage.search(text)
});

Then(/^I should see search results and print results$/, async () => {
    const result = await ResultPage.resultText.getText()
    console.log('número de items devuelto : '+ await result)

});

// Given(/^I open eBay website$/, async () => {
//     await browser.url('https://www.ebay.com/')
// });

// When(/^I search for Pilas$/, async () => {
// 	await $('//*[@placeholder="Buscar artículos"]').setValue('Pilas')
//     await $('//input[@type="submit"]').click()
// });

// Then(/^I should see search results and print results$/, async () => {
//     const results = await $('//h1[@class="srp-controls__count-heading"]/span[1]')
//     console.log('resultado: '+await results.getText())
// });
