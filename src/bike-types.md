<!-- PROVIDED: This controls the theme of the page! [OPTIONAL] Feel free to change and play around with the theme to find one you like for this page! -->
<!-- HINT: Reference the documentation given in the instructions! -->
---
toc: false
theme: [light, wide, alt, cotton]
---



<!-- PROVIDED: Header/Page Title -->
# Bike Types Dashboard



<!-- PROVIDED Code: Imports the component used for this page's visualization. -->

```js
// imports modules to be used
import {bike_type_plot} from "./components/bike-type-plot.js";
```

<!-- CHALLENGE 4.1 -->
<!-- YOUR TURN: Add code to load the data from stations.json.js-->
<!-- HINT: Use a FileAttachment like we did in Lab 2: Observable Dashboard! -->
<!-- Imports the data from the stations data loader -->
```js
// this variable stores the loaded stations data from the data loader
// this returns a Map!
const stations_map = FileAttachment('./data/stations.json').json();
```


<!-- CHALLENGE 4.2 -->
<!-- YOUR TURN: Add code to create a dropdown/selector for all the stations in the network -->
<!-- HINT: Reference the documentation given in the instructions! -->
```js
// selector dropdown for stations
// do not use multiple: true for the selector
// this data of the selected station is stored in select_station and passed into bike-type-plot.js component for visualization!
const stations_m = new Map(Object.entries(stations_map));
const selected_station = view(Inputs.select(Array.from(stations_m.keys()), {label: "Select a station"}));
```



<!-- PROVIDED code: Displays the visualization you made in bike-type-plot.js.-->

```js
console.log(selected_station)
const free_bikes_available = selected_station.get("free_bikes");
```

<div class="grid grid-cols-1">
  <div class="card" style="display: flex; justify-content: center; align-items: center;">
  <!-- conditionally displays a message or a visualization depending on bike availability at selected station -->
    ${free_bikes_available === 0 
      ? html`<h2 style="color: red;"> 🚫 There are no bikes available currently at this station. 🚫</h2>`
      : bike_type_plot(selected_station)}

  </div>
</div>