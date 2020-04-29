import React from "react";
import { observer, inject } from "mobx-react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ICryptoTable } from "../../interfaces";
import { TCoin, TCoinDiff } from "../../interfaces";

const CryptoTable = inject(
  "currenciesStore",
  "converterStore"
)(
  observer(({ classes, currenciesStore, converterStore }: ICryptoTable) => {
    const items: TCoin[] = currenciesStore!.getItems;
    const diffObj: TCoinDiff = currenciesStore!.getDiffObj;
    React.useEffect(() => {
      if (currenciesStore) {
        currenciesStore.fetchCoins();
        setInterval(() => {
          currenciesStore.fetchCoins();
        }, 30 * 1000);
      }
    }, []);
    const onClickRow = (coin: TCoin) => {
      if (converterStore) {
        converterStore.setSelectedCoin(coin);
      }
    };
    return (
      <TableContainer component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">FullName</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Volume24h</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!items.length
              ? "Загрузка"
              : items.map((coin: TCoin) => (
                  <TableRow
                    hover
                    key={coin.name}
                    className={classes.rowCurrency}
                    onClick={() => {
                      onClickRow(coin);
                    }}
                  >
                    <TableCell>
                      <img
                        className={classes.coinIcon}
                        src={coin.imagUrl}
                        alt="CoinIcon"
                      />
                    </TableCell>
                    <TableCell align="left">{coin.fullName}</TableCell>
                    <TableCell align="left">{coin.name}</TableCell>
                    <TableCell
                      className={
                        diffObj[coin.name] &&
                        classes[`${diffObj[coin.name]}Column`]
                      }
                      align="left"
                    >
                      {coin.price}$
                    </TableCell>
                    <TableCell align="left">{coin.volume24Hour}$</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  })
);

export default CryptoTable;
