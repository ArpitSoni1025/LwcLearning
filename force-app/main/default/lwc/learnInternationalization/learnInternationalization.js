import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';
import DIR from '@salesforce/i18n/dir';
export default class LearnInternationalization extends LightningElement {
    number = 6575557.86
    dir = DIR //'rtl'
    formattedNumber = new Intl.NumberFormat(LOCALE, {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol'
    }).format(this.number)
}