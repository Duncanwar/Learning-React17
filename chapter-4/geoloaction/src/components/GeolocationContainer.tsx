import React, { useEffect, useState } from "react";
import GeoLocation from "./Geolocation";

const GeolocationContainer = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const handleSuccess = ({
    coords: { latitude, longitude },
  }: {
    coords: { latitude: number; longitude: number };
  }) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess);
    }
  }, []);
  return <GeoLocation latitude={latitude} longitude={longitude} />;
};

export default GeolocationContainer;
