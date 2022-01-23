import React, { useState, useCallback, memo } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
    padding: '15px',
    borderRadius: '10px',
    border: '1px solid transoarent',
};


const Map = ({ center, map_points, googleMapsApiKey }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script', googleMapsApiKey
    });

    const [map, setMap] = useState<any | null>(null);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onMarkerLoad = (marker) => {
        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend(marker.getPosition());
        map && map.fitBounds(bounds);
    }

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {map_points && map_points.map((point) => (
                <Marker
                    onLoad={onMarkerLoad}
                    key={Math.floor(Math.random() * 10000) + 1}
                    position={{ lat: point.lat, lng: point.lng }}
                    label={point.label}
                />
            ))}
        </GoogleMap>
    ) : <></>
}

export default memo(Map);