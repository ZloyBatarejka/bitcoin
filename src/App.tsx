import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { TCoin } from "./interfaces";
import { CryptoTable, ConverterBlock } from "./components/index";
import { useStyles } from "./styles";
function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <CryptoTable classes={classes} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ConverterBlock classes={classes} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
