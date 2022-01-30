import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

import fireAlertIcon from '@iconify/icons-mdi/fire-alert';
import volcanoIcon from '@iconify/icons-maki/volcano';
import stormShowers from '@iconify/icons-wi/storm-showers';
import accumulationIce from '@iconify/icons-carbon/accumulation-ice';

const Map = ({ eventData, center, zoom, categories }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map(ev => {
    if (ev.categories[0].id === 8 && categories[0] === true) {
      return (
        <LocationMarker
          key={Math.random()}
          icon={fireAlertIcon}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          type="fire"
        />
      );
    } else if (ev.categories[0].id === 12 && categories[1]) {
      return (
        <LocationMarker
          key={Math.random()}
          icon={volcanoIcon}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          type="volcano"
        />
      );
    } else if (ev.categories[0].id === 10 && categories[2]) {
      return ev.geometries.map(geo => {
        return (
          <LocationMarker
            key={Math.random()}
            icon={stormShowers}
            lat={geo.coordinates[1]}
            lng={geo.coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
            type="storm"
          />
        );
      });
    } else if (ev.categories[0].id === 15 && categories[3]) {
      return (
        <LocationMarker
          key={Math.random()}
          icon={accumulationIce}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          type="ice"
        />
      );
    }

    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 46.071301,
    lng: 18.233141,
  },
  zoom: 6,
};

export default Map;
