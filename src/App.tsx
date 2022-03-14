import React, { useState, useEffect, createRef, Fragment } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

// import { getPlacesData } from './api';
import jsonData from './api/data.json';

import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';

import { ICoordinates } from './interfaces/ICoordinates';
import { IBounds } from './interfaces/IBounds';

const App: React.FC = () => {

  // const [places, setPlaces] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null);

  const [coordinates, setCoordinates] = useState<ICoordinates>({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState<IBounds>({ sw: { lat: 0, lng: 0 }, ne: { lat: 0, lng: 0 } });

  const [elRefs, setElRefs] = useState<any[]>([]);

  // useEffect(() => {
  // setIsLoading(true);
  // getPlacesData(bounds.sw, bounds.ne).then((response) => {
  //   setPlaces(response.data);
  // });
  // setIsLoading(false);    
  // }, [coordinates, bounds, places]);

  const places = jsonData.data;

  // useEffect(() => {
  //   if (places) {
  //     const refs = Array(places.length);
  //     places.map((_, i) => refs.fill(elRefs[i] || createRef()));
  //     setElRefs(refs);
  //   }
  // }, [places, elRefs]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  console.log('-> TEST1: ' + process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE!)
  console.log('-> TEST2: ' + process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE as string)

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            isLoading={false}
            elRefs={elRefs}
            childClicked={childClicked}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            setChildClicked={setChildClicked}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default App;
