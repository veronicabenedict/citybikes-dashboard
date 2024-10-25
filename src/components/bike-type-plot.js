import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function bike_type_plot(data, {width} = {}) {
    // if needed, variables can be created here
    console.log(data);
    const plot_data = [
        {type: "Normal Bikes", count: data.normal_bikes},
        {type: "E-Bikes", count: data.ebikes}
    ];
    const color_scale = d3.scaleOrdinal()
        .domain("Normal Bikes", "E-Bikes")
        .range(["#1f77b4", "#ff7f0e"]);
    const total_num_slots = data.normal_bikes + data.ebikes + data.empty_slots;
    return Plot.plot({
        title: `Bike Type Availability at ${data.name}`,
        marks: [
            // CHALLENGE 7.2
            Plot.barY(plot_data, {x: "type", y: "count", tip: true, fill: data => color_scale(data.type) }),
            Plot.axisY({tickCount: total_num_slots, interval: 1, labelAnchor: "center"}),
        ],
        x: {
            // CHALLENGE 7.3
            label: "Bike Type"
        },
        y:{
            // CHALLENGE 7.4
            label: "Number of Bikes",
            domain: [0, total_num_slots],
            grid: true,
            ticks: d3.range(0, total_num_slots + 1, 1)
        },
        color: {
            // CHALLENGE 7.5
            legend: true,
            domain: ["Normal Bikes", "E-Bikes"],
            range: color_scale.range()
        }
    })
}
