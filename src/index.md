<!-- PROVIDED: This controls the theme of the page! [OPTIONAL] Feel free to change and play around with the theme to find one you like for this page! -->
<!-- HINT: Reference the documentation given in the instructions! -->
---
toc: false
theme: [light, wide, alt, cotton]
---



<!-- PROVIDED: Header/Page Title -->
# CityBikes Dashboard Home
<br>


<!-- CHALLENGE 3.1 -->
<!-- YOUR TURN: Add code to load the data from stations.json.js-->
<!-- HINT: Use a FileAttachment like we did in Lab 2: Observable Dashboard! -->
<!-- Imports the data from the network and stations data loaders -->
```js
// loads the network data from the data loader
// this returns an array!
const network_info = FileAttachment('./data/network.json').json();
```

```js
// loads the stations data from the data loader
// this returns a Map!
const stations = FileAttachment('./data/stations.json').json();
```


<!-- CHALLENGE 3.2 -->
<!-- YOUR TURN: Add a grid with three cards of information here -->
<!-- Reference the instructions for what information to display in each card. -->
<!-- HINT: You will have to use string interpolation like this `This is a ${interpolated_value}`! -->
<!-- HINT: Reference the .set() method documentation for getting data from a Map in JS linked in the instructions. ! -->

<div class="grid grid-cols-3">
    <div class="card" style="text-align: center;">
        <h3>Number of Stations</h3>
        <p>This network has ${Object.keys(stations).length} bike stations</p>
    </div>
    <div class="card" style="text-align: center;">
        <h3>Network Information</h3>
        <p>The network is located in ${network_info.city} and is called ${network_info.name}.</p>
    </div>
    <div class="card" style="text-align: center;">
        <h3>Network Location</h3>
        <p>The network is located at ${network_info.longitude} longitude and ${network_info.latitude} latitude.</p>
    </div>


</div>