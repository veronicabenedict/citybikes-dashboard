import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function station_demand_plot(network_data, station_data, {width} = {}) {
    // if needed, variables can be created here

    return Plot.plot({
        title: `Station Demand in the ${network_data["name"]}`,
        marks: [
            Plot.barY(station_data, {x:"name",y: "empty_slots", tooltip: true, sort: {x: "y"}}),
            // CHALLENGE 6.2
            // Your code here
            Plot.axisY({tickCount: 22, interval: 1, tickSpacing: 20})
        ],
        x: {
            // CHALLENGE 6.3
            label: "Station Name",
            labelAngle: -45,
            tickRotate: -45
        },
        y: {
            // CHALLENGE 6.4
            label: "Empty Slots"
        },
        // CHALLENGE 6.5
        marginLeft: 60,
        width: width || 800, 
        height: 400, 
        marginTop: 15,
        marginBottom: 200
    });
}