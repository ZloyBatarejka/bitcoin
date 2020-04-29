import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    cryptoInputBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "15px",
      marginTop: 10,
    },
    currencyInput: {
      minWidth: "calc(70% - 10px)",
    },
    currencyType: {
      minWidth: "30%",
    },
    table: {
      maxWidth: "100%",
    },
    coinIcon: {
      width: 18,
      height: 18,
      borderRadius: 30,
    },
    redColumn: {
      backgroundColor: "#ffdada",
    },
    greenColumn: {
      backgroundColor: "#d8ffc4",
    },
    test: {
      backgroundColor: "yellow",
    },
    rowCurrency: {
      cursor: "pointer",
    },
  })
);
