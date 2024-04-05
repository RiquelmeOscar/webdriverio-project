import { $ } from '@wdio/globals'
import EbayPage from './ebay.page.js';

class ResultPage extends EbayPage {
    
    get resultText(){
        return $('//h1[@class="srp-controls__count-heading"]/span[1]');
    }

}

export default new ResultPage();
