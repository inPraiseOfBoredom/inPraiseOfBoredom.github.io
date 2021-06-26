<template>
  <div>
    <Preloader />
    <h1
      class=" py-10 px-5 top-0 text-pink-200 text-3xl font-medium tracking-wider"
    >
      Romantic places in Leipzig
    </h1>
    <div class="flex flex-wrap">
      <div class="md:w-4/12 sm:w-6/12">
        <div class="list h-4/5 overflow-auto" id="list"></div>
      </div>
      <div id="map" class="md:w-8/12 sm:w-6/12"></div>

      <div class="fixed bottom-0 left-0 right-0 h-6 px-5">
        Icons made by
        <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import mapboxgl from "mapbox-gl";
import Preloader from "~/components/Preloader.vue";
import icon from "~/assets/photos/love-2.png";

export default Vue.extend({
  name: "romantic",
  components: {
    Preloader
  },
  data() {
    return {
      map: null,
      center: [12.3731, 51.3397],
      zoom: 13,
      position: null,
      navigationControl: null,
      geolocateControl: null,
      icon,
      popup: null,
      spots: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.345962493480547, 51.33466755266844]
            },
            properties: {
              id: 1,
              title: "Pavillion im Palmgarten",
              description:
                "A small, but neat pavillion with a wonderful view to Palmgarten",
              category: "nature"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.350183951932953, 51.33699905122849]
            },
            properties: {
              id: 2,
              title: "ZierlichManierlich",
              description: "A cute mobile shop with some snacks and drinks",
              category: "cafe"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.34659432710713, 51.328844372543536]
            },
            properties: {
              id: 3,
              title: "La Chocolaterie",
              description: "A little French cafe: best sweets in town!",
              category: "cafe"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.346252444010716, 51.329688322354045]
            },
            properties: {
              id: 4,
              title: "Könneritzbrücke",
              description: "A nice view to White Elster",
              category: "viewpoint"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.377723443948723, 51.33787833670296]
            },
            properties: {
              id: 5,
              title: "Bohemian Kids Café",
              description:
                "Awesome little cafe with an amazing selection of drinks and some cakes.",
              category: "cafe"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.314769400913155, 51.35920991828727]
            },
            properties: {
              id: 6,
              title: "Villa Hasenholz",
              description:
                "Beautiful location with the best brunch in Leipzig in a garden with animals",
              category: "cafe"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.362896657444264, 51.35894656798607]
            },
            properties: {
              id: 7,
              title: "Schillerhaus",
              description:
                "A hidden gem of a beautigul harden with an old house",
              category: "historical"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.36418663844071, 51.356897371068115]
            },
            properties: {
              id: 8,
              title: "Gohlis Palace",
              description: "Rococo country house with parkland & restaurant",
              category: "historical"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.362678756606954, 51.359292066252166]
            },
            properties: {
              id: 9,
              title: "Weinlokal & Restaurant Drogerie",
              description: "Fine dining in a historical building",
              category: "restaurant"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.36433569418805, 51.35132522917773]
            },
            properties: {
              id: 10,
              title: "Zoo-Schaufenster",
              description:
                "A great spot in the park to observe some zoo animals",
              category: "viewpoint"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.374267553267954, 51.339341254156274]
            },
            properties: {
              id: 11,
              title: "Beanbar",
              description:
                "A nice coffeeshop on the last floor in Hugendubel, great view to Thomaskirche",
              category: "cafe"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.37699219706099, 51.34072939924442]
            },
            properties: {
              id: 12,
              title: "Riquet",
              description:
                "Historical place with delicious cakes and variety of coffees in the old town",
              category: "cafe"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.359725673664494, 51.33015524980002]
            },
            properties: {
              id: 13,
              title: "Glashaus",
              description:
                "A nice cafee/biergarten in the middle of Klara park",
              category: "cafe"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.337679393403956, 51.31692838039333]
            },
            properties: {
              id: 14,
              title: "Rose garden in Kleinzschocher",
              description: "A beautiful rose garden",
              category: "nature"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.337520663484717, 51.32138298899097]
            },
            properties: {
              id: 15,
              title: "Entenbruecke",
              description:
                "Peaceful view to White Elster and a colonie of cute nutrias",
              category: "viewpoint"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.39478601454023, 51.330293505975135]
            },
            properties: {
              id: 16,
              title: "Apothekergarten",
              description: "Wonderful piece of nature",
              category: "nature"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.391869511240598, 51.32933312661485]
            },
            properties: {
              id: 17,
              title: "Botanical garden",
              description:
                "Long-established university botanical garden with varied plant collections and greenhouses",
              category: "nature"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.413333318782387, 51.31257290297121]
            },
            properties: {
              id: 18,
              title: "Monument to the Battle of the Nations",
              description: "Monument to the Battle of the Nations",
              category: "viewpoint"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.414328016567456, 51.310424964207456]
            },
            properties: {
              id: 19,
              title: "Südfriedhof",
              description:
                "Beautiful and peaceful piece of land for a nice walk",
              category: "nature"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.37987171937242, 51.28409921003212]
            },
            properties: {
              id: 20,
              title: "Musentempel",
              description: "Beautiful pavillion in the middle of agra park",
              category: "nature"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.372152959866527, 51.300305128284876]
            },
            properties: {
              id: 21,
              title: "Wildpark",
              description: "Animal parl and forest",
              category: "nature"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.372840328212828, 51.3367783207128]
            },
            properties: {
              id: 22,
              title: "Ratskeller Leipzig",
              description:
                "Long-established German restauarant with an access to the tower of the New Town Hall",
              category: "restaurant"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.368838077203955, 51.33910992730234]
            },
            properties: {
              id: 23,
              title: "C’est la vie",
              description: "French fine dining",
              category: "restaurant"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.346673407968396, 51.33717783917968]
            },
            properties: {
              id: 24,
              title: "Richard Wagner Wiese",
              description: "Beautiful piece of nature",
              category: "nature"
            }
          }
        ]
      }
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaW5wcmFpc2VvZmJvcmVkb20iLCJhIjoiY2twY2Niem82MGpxcTJ2cnJsM2dqZjlrYyJ9.2Pgr3XNKf1M69FFcnaeJgg";

    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: this.center,
      zoom: this.zoom
    });

    this.initControls();

    this.addMarkers(this.map, this.icon);
    this.initList(this.spots);
  },

  methods: {
    initControls() {
      this.navigationControl = new mapboxgl.NavigationControl();
      this.map.addControl(this.navigationControl, "top-right");

      this.geolocateControl = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      });
      this.map.addControl(this.geolocateControl, "top-right");
      this.geolocateControl.on("geolocate", e => {
        const lon = e.coords.longitude;
        const lat = e.coords.latitude;
        this.position = [lon, lat];
      });
    },

    addMarkers() {
      this.spots.features.forEach(marker => {
        const el = document.createElement("img");
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.cursor = "pointer";
        el.src = this.icon;
        el.id = marker.properties.id;
        el.addEventListener("click", () => {
          console.log(el.id);
        });

        this.popup = new mapboxgl.Popup({ className: "romantic" }).setHTML(
          "<h3>" +
            marker.properties.title +
            "</h3><p>" +
            marker.properties.description +
            "</p>"
        );
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(this.popup)
          .addTo(this.map);
      });
    },
    //  getId() {
    //   this.spots.features.forEach((spot, i) => {
    //     spot.properties.id = i;
    //   });
    // },

    initList() {
      this.spots.features.forEach((spot, i) => {
        const list = document.getElementById("list");
        const listItem = list.appendChild(document.createElement("div"));

        listItem.id = "list-" + this.spots.features[i].properties.id;
        listItem.className = "item";

        const link = listItem.appendChild(document.createElement("a"));
        link.href = "#";
        link.className = "title";
        link.id = spot.properties.id;
        link.innerHTML = spot.properties.title;
        link.className = "title";

        const category = listItem.appendChild(document.createElement("div"));
        category.innerHTML = spot.properties.category;
        category.className = "category";

        link.addEventListener("click", this.listeningFunction);
      });
    },
    listeningFunction(event) {
      for (let i = 0; i < this.spots.features.length; i++) {
        if (event.target.id == this.spots.features[i].properties.id) {
          console.log(this.spots.features[i].geometry.coordinates);
          this.selectedItem = this.spots.features[i];

          this.map.flyTo({
            center: this.spots.features[i].geometry.coordinates,
            zoom: 17
          });
        }
      }
    }
  }
});
</script>

<style>
#map {
  height: 80vh;
}

.item {
  padding: 0.4rem 1.1rem;
  display: flex;
  justify-content: space-between;
}

.title {
  font-weight: 600;
}

.title:hover {
  color: #b33471;
  font-weight: 800;
}

.category {
  font-size: 0.9rem;
  color: #dba2bd;
}

::-webkit-scrollbar {
  width: 2px;
  height: 3px;
  border-left: 0;
  background: #e9e5e7;
}
::-webkit-scrollbar-track {
  background: none;
}

::-webkit-scrollbar-thumb {
  background: #dba2bd;
  border-radius: 0;
}

.romantic .mapboxgl-popup-content {
  max-width: 250px;
  box-shadow: 3px 3px 2px #dba2bd;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;
  background-color: #f5c9de;
  color: #79244d;
}
.romantic .mapboxgl-popup-content h3 {
  font-weight: 600;
}

.romantic .mapboxgl-popup-tip {
  border-top-color: #f5c9de;
}
</style>
