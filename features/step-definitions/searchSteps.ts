import { Given, When, Then } from '@wdio/cucumber-framework';
import SearchPage from '../pageobjects/searchView';
import EbayView from '../pageobjects/searchEbayView';

Given(/^The client is in the (.+)$/, async (page) => {
    await SearchPage.setPage(page);
});

When(/^The client search for the (.+)$/, async (word) => {
    await EbayView.setWord(word)
});

Then(/^The client count the results$/, async () => {
    await EbayView.result()
});

