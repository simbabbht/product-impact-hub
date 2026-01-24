import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface MarkerData {
  label: string;
  coordinates: [number, number];
}

const visitedMarkers: MarkerData[] = [
  { label: "États-Unis", coordinates: [-74.0060, 40.7128] },
  { label: "République dominicaine", coordinates: [-69.9312, 18.4861] },
  { label: "France", coordinates: [2.3522, 48.8566] },
  { label: "Italie", coordinates: [12.4964, 41.9028] },
  { label: "Espagne", coordinates: [-3.7038, 40.4168] },
  { label: "Pays-Bas", coordinates: [4.9041, 52.3676] },
  { label: "Belgique", coordinates: [4.3517, 50.8503] },
  { label: "Suisse", coordinates: [8.5417, 47.3769] },
  { label: "Portugal", coordinates: [-9.1393, 38.7223] },
  { label: "Royaume-Uni", coordinates: [-0.1276, 51.5072] },
  { label: "Australie", coordinates: [151.2093, -33.8688] },
  { label: "Nouvelle-Calédonie", coordinates: [166.4572, -22.2758] },
  { label: "La Réunion", coordinates: [55.4500, -20.8789] },
  { label: "Guadeloupe", coordinates: [-61.5510, 16.2650] },
  { label: "Martinique", coordinates: [-61.0588, 14.6161] },
];

export function WorldMap() {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <div className="aspect-[2/1] w-full rounded-lg overflow-hidden bg-surface-2/50 border border-border/30">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 120,
            center: [10, 30],
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup zoom={1} minZoom={1} maxZoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="hsl(var(--muted))"
                    stroke="hsl(var(--border))"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "hsl(var(--muted-foreground) / 0.3)" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {visitedMarkers.map((marker) => (
              <Marker
                key={marker.label}
                coordinates={marker.coordinates}
                onMouseEnter={() => setHoveredMarker(marker.label)}
                onMouseLeave={() => setHoveredMarker(null)}
              >
                <circle
                  r={5}
                  fill="hsl(var(--accent))"
                  stroke="hsl(var(--background))"
                  strokeWidth={1.5}
                  className="cursor-pointer transition-all duration-200 hover:r-6"
                  style={{
                    filter: hoveredMarker === marker.label ? "brightness(1.2)" : "none",
                    transform: hoveredMarker === marker.label ? "scale(1.3)" : "scale(1)",
                    transformOrigin: "center",
                  }}
                />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Tooltip */}
      {hoveredMarker && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-surface border border-border rounded-full text-xs text-foreground shadow-lg z-10 pointer-events-none animate-fade-in">
          {hoveredMarker}
        </div>
      )}

      {/* Stats */}
      <div className="mt-4 text-center space-y-1">
        <p className="text-lg font-semibold text-foreground">
          11 / 195 <span className="font-normal text-muted-foreground">pays visités</span>
        </p>
        <p className="text-small text-muted-foreground">
          Encore 70 ans pour découvrir le monde.
        </p>
      </div>
    </div>
  );
}
