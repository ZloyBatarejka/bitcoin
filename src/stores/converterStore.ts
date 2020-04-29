import { observable, computed, action } from "mobx";
import { TCoin, TSelectedCoin } from "../interfaces";
class ConverterStore {
  @observable private selectedCoin: TSelectedCoin = {
    name: "",
    price: 0,
  };

  @computed
  get getSelectedCoin() {
    return this.selectedCoin;
  }

  @action
  setSelectedCoin(coin: TCoin) {
    this.selectedCoin = {
      name: coin.name,
      price: coin.price,
    };
  }

  @action
  setSelectedCoinBySelect(name: any, price: number) {
    this.selectedCoin = {
      name,
      price,
    };
  }
}

export default ConverterStore;
