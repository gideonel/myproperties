'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // Dynamic import for mapbox
import { setDefaults, fromAddress } from 'react-geocode';
import Spinner from './Spinner';
import Image from 'next/image';
import pin from '@/assets/images/pin.svg';
import staticMap from '@/assets/images/static-map.jpeg'; // Add a fallback static map image

// Dynamic imports for Map and Marker
const Map = dynamic(() => import('react-map-gl'), { ssr: false });
const Marker = dynamic(() => import('react-map-gl').then((mod) => mod.Marker), { ssr: false });

const PropertyMap = ({ property }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [geocodeError, setGeocodeError] = useState(false);

  // Viewport setup
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: '100%',
    height: '500px',
  });

  // Setting up Geocoding API
  useEffect(() => {
    setDefaults({
      key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY,
      language: 'en',
      region: 'us',
    });

    const fetchCoords = async () => {
      try {
        const res = await fromAddress(
          `${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`
        );

        if (res.results.length === 0) {
          setGeocodeError(true);
          setLoading(false);
          return;
        }

        const { lat, lng } = res.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
        setViewport({
          ...viewport,
          latitude: lat,
          longitude: lng,
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setGeocodeError(true);
        setLoading(false);
      }
    };

    fetchCoords();
  }, [property]);

  if (loading) return <Spinner loading={loading} />;

  if (geocodeError) {
    return (
      <div className="relative">
        <div className="text-xl text-red-500 mb-4">No location data found</div>
        <h2 className="text-2xl font-bold text-center my-4">Fallback to Static Map</h2>
        {/* Render static map image as fallback */}
        <div className="flex justify-center">
          <Image src={staticMap} alt="Static Map" width={800} height={500} />
        </div>
      </div>
    );
  }

  // If Mapbox token is invalid, show Google Maps or static image
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (!mapboxToken) {
    return (
      <div className="relative">
        <div className="text-xl text-red-500 mb-4">Map service unavailable, showing a static map</div>
        <div className="flex justify-center">
          <Image src={staticMap} alt="Static Map" width={800} height={500} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={viewport}
        style={{ width: '100%', height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} anchor="bottom">
          <Image src={pin} alt="location" width={40} height={40} />
        </Marker>
      </Map>
    </div>
  );
};

export default PropertyMap;
