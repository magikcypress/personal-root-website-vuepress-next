<template>
    <div class="mapContainer">
      <l-map
        :zoom="zoom"
        :center="center"
        style="z-index:0"
        :useGlobalLeaflet="false"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        />
        <l-geo-json
          v-if="show"
          :geojson="geojson"
          :options="options"
        />
        
      </l-map>
    </div>
  </template>
  
  <script>
  import { LMap, LTileLayer, LMarker, LGeoJson, LPopup } from "@vue-leaflet/vue-leaflet";
  
  export default {
    name: "Travel Map",
    components: {
      LMap,
      LTileLayer,
      LGeoJson,
      LMarker,
      LPopup
    },
    data() {
      return {
        zoom: 2,
        show: true,
        enableTooltip: true,
        showParagraph: false,
        center: [17.62, 22.3321],
        url: 'https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3lwIiwiYSI6InQySWpxd00ifQ.wbJfVp6V63lOB52hHwWeVA',
        attribution:
          'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        geojson: {
            type: "FeatureCollection",
            features: [
                {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='/travel/Maroc'>Marocco</a> 🇲🇦"},"geometry":{"type":"Point","coordinates":[-7.983822552378667, 31.63050992749335]}},
                {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='/travel/Vietnam'>Vietnam</a> 🇻🇳"},"geometry":{"type":"Point","coordinates":[108.20308688175669, 16.050648524339056]}},
                {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='/travel/Bresil'>Brazil</a> 🇧🇷"},"geometry":{"type":"Point","coordinates":[-47.89101142005619, -15.798737925436711]}},
                {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='/travel/AmeriqueduSud'>South America</a> 🌎"},"geometry":{"type":"Point","coordinates":[-58.377853665448534, -34.60528680077048]}},
                {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='/travel/Canada'>Canada</a> 🇨🇦"},"geometry":{"type":"Point","coordinates":[-73.57386448166177, 45.50522497642091]}},
                {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='/travel/Liban'>Libanon</a> 🇱🇧"},"geometry":{"type":"Point","coordinates":[35.484732922562415, 33.90876886528679]}},
                {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='/travel/Japon'>Japan</a> 🇯🇵"},"geometry":{"type":"Point","coordinates":[139.7683256734573, 35.68210722765266]}},
            ],
        },
        geojsonOptions: {
            // Options that don't rely on Leaflet methods.
        },
      };
    },
    computed: {
      options() {
        return {
          onEachFeature: this.onEachFeatureFunction
        };
      },
      onEachFeatureFunction() {
        if (!this.enableTooltip) {
          return () => {};
        }
        return (feature, layer) => {  
            layer.bindPopup(
                "<div>" + feature.properties.name + "</div>",
                { permanent: false, sticky: true }
            );
        };
      }
    }
  };
  </script>
  
  <style scoped>
    @media all {
        .mapContainer {
            width: 100%;
            height: 500px;
            z-index: 0;
        }
    }
    @media (max-width: 719px) {
        .mapContainer {
            width: 100%;
            height: 300px;
            z-index: 0;
        }
    }
</style>