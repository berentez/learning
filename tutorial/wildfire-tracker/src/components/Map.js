import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        //this should be in a env file
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
