import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import { getMapDataByCountryId } from '../../apis';
import HighMaps from '../Charts/HighMaps'
import LineChart from '../Charts/LineChart'

export default function Summary({report, countryId}) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (countryId) {
      getMapDataByCountryId(countryId)
        .then((res) => {
          setMapData(res);
        })
        .catch((err) => console.log({ err }));
    }
  }, [countryId]);

  return (
    <div style={{ height: '500px', marginTop: 10 }}>
      <Grid container spacing={3}>
          <Grid item sm={8} xs={12}>
              <LineChart data={report}></LineChart>
          </Grid>
          <Grid item sm={4} xs={12}>
              <HighMaps mapData={mapData}></HighMaps>
          </Grid>
      </Grid>
    </div>
  )
}
