import browser from "browser"

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage  {
    
    /**
     * define selectors using getter methods
     */
    
    public get onlySearch (){
        //return $('//android.widget.FrameLayout[@content-desc="Search"]')
        return $('//*[@resource-id="com.android.quicksearchbox:id/search_widget_text"]')
    }

    public get inputSearch (){
        //return <any>$('//*[@resource-id="com.google.android.googlequicksearchbox:id/googleapp_search_box"]')
        return <any>$('//*[@resource-id="com.android.quicksearchbox:id/search_src_text"]')
    }

    public get searchButton(){
        //return $('//android.view.ViewGroup[@content-desc="Search ebay ."]')
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ImageButton')
        //return $('//*[@class="android.widget.Button"]')

    }

    public get selectEbay() {
        return <any>$('//android.view.View[@content-desc="https://www.ebay.com"]')
        //return <any>$('=ebay')
    }
    
    public async setPage (page: String){
        await this.onlySearch.click();
        await this.inputSearch.setValue(page);
        wait:5000
        await this.searchButton.click();
        //await browser.swipeUp(this.selectEbay[1200]);
        //await browse.touchUp(170,1200);
        //this.selectEbay.scroll(170);
        //browser.scroll(170,1130)
        //await browser.swipe([this.selectEbay][170]);
        //this.selectEbay.scrollIntoView();

        await this.selectEbay.click();
    }
} 
   

export default new SearchPage();
