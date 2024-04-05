import { browser } from '@wdio/globals'

export default class EbayPage {
    
    open(){
        return browser.url(`https://www.ebay.com/`)
    }
}
