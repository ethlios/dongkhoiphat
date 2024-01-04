import * as React from 'react';
import { Map, Marker } from 'pigeon-maps';
import { maptiler } from 'pigeon-maps/providers';

const maptilerProvider = maptiler('yUy9UOq9mYQRuiLqvvSE', 'uk-openzoomstack-night');

export default function MyMap() {
    return (
        <Map height={300} defaultCenter={[10.842075, 106.65343]} defaultZoom={18} provider={maptilerProvider}>
            <Marker width={50} anchor={[10.842075, 106.65343]} />
        </Map>
    );
}
