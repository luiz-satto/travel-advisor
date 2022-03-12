import React, { useState, useEffect, Fragment } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

// import { getPlacesData } from './api';
import jsonData from './api/data.json';

import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';

import { ICoordinates } from './interfaces/ICoordinates';
import { IBounds } from './interfaces/IBounds';

const App: React.FC = () => {

  const [coordinates, setCoordinates] = useState<ICoordinates>({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState<IBounds>({ sw: { lat: 0, lng: 0 }, ne: { lat: 0, lng: 0 } });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  // const [places, setPlaces] = useState([]);
  // useEffect(() => {
  // getPlacesData(bounds.sw, bounds.ne).then((response) => {
  //   setPlaces(response.data);
  // });
  // }, [coordinates, bounds, places]);

  const places = jsonData.data;

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            // places={places}
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default App;
