import { $ } from '@wdio/globals'
import EbayPage from './ebay.page.js';

class SearchPage extends EbayPage{

    get inputSearch(){
        return $('//*[@placeholder="Buscar artículos"]');
    }

    get btnSubmit(){
        return $('//input[@type="submit"]');
    }

    async search(text){
        await this.inputSearch.setValue(text);
        await this.btnSubmit.click();
    }

    open(){
        return super.open('search');
    }
}

export default new SearchPage();
