import React, { FC } from "react";

type Props = {
  latitude: number | null;
  longitude: number | null;
};

const Geolocation: FC<Props> = ({ latitude, longitude }) => {
  return (
    <div>
      <h1>Geolocation:</h1>
      <div>Latitude:{latitude}</div>
      <div>Longitude:{longitude}</div>
    </div>
  );
};

export default Geolocation;
