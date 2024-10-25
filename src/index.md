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
        <p>There are <b>${Object.keys(stations).length}</b> bike stations.</p>
    </div>
    <div class="card" style="text-align: center;">
        <p>The network in <b>${network_info.city}</b> is called <b>${network_info.name}</b>.</p>
    </div>
    <div class="card" style="text-align: center;">
        <p>The network is located at <b>${network_info.longitude}</b>, <b>${network_info.latitude}</b>.</p>
    </div>
</div>

<div class="grid grid-cols-2">
    <div class="card" style="text-align: center;">See the <a href="/bike-types.html"><b>bike types dashboard page</b></a> for information on bike type availability at each of the stations in the network.</div>
    <div class="card" style="text-align: center;">See the <a href="/station-demand.html"><b>station demand visualization page</b></a> for information on the demand of the stations in the network.</b>.</div>
</div>