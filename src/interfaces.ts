import CurrenciesStore from "./stores/currenciesStore";
import ConverterStore from "./stores/converterStore";

export interface TCoin {
  name: string;
  fullName: string;
  imagUrl: string;
  price: number;
  volume24Hour: number;
}
export interface TCoinDiff {
  [key: string]: string;
}
export interface ICryptoTable {
  classes: any;
  currenciesStore?: CurrenciesStore;
  converterStore?: ConverterStore;
}

export interface IConverterBlock {
  classes: any;
  currenciesStore?: CurrenciesStore;
  converterStore?: ConverterStore;
}
export interface TSelectedCoin {
  name: string;
  price: number;
}
