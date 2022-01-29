import { Icon } from '@iconify/react';

const LocationMarker = ({ icon, lat, lng, onClick, type }) => {
  return (
    <div className={`location-marker`} onClick={onClick}>
      <Icon icon={icon} className={type} />
    </div>
  );
};

export default LocationMarker;
