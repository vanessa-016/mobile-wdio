
/**
 * sub page containing specific selectors and methods for a specific page
 */
class EbayView {
    
    /**
     * define selectors using getter methods
     */
    public get inputSearchEbay (){
       //return <any>$('//*[@resource-id="kw"]')
       return <any>$('//android.widget.EditText[@resource-id="kw"]')
       //return <any>$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[3]/android.view.View/android.widget.EditText')
    }

    public get buttonSearch (){
        return <any>$('//android.widget.Button[@text="Buscar"]')
        //return <any>$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button[2]')
     }

    public get getResult(){
        return <any>$('//android.view.View[@content-desc="Lotes de 10Pcs AG3 SG3 LR41 192 1.55V Pilas Alcalinas Batería Botón Célula de la moneda Totalmente nuevo USD1.91 Costaba: USD2.01  5 % de descuento o Mejor oferta Envío internacional gratis de China 585 vendidos Patrocinado"]/android.view.View[6]');
        //return <any>$('//android.view.View[@text="o Mejor oferta"]')
    } 

    public async setWord (word: String){
        wait:15000
        //await this.inputSearchEbay.click();
        await this.inputSearchEbay.setValue(word);
        wait:3000
        await this.buttonSearch.click();
        wait:10000
    }
    public async result () {
        var value = this.getResult.getText();
        console.log("Los resultados de la busqueda son:"+value)
    }   
}

export default new EbayView();
