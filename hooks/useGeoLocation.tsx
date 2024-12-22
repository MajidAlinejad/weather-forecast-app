import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => setLocation(position.coords),
      (err) => setError(err.message)
    );
  }, []);

  return { location, error };
};

export default useGeolocation;
