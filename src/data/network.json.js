// Function to fetch data from the specified API endpoint
async function json(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
  return await response.json();
}

// Variable to store the returned json from the API
const pgh_network = await json(`https://api.citybik.es/v2/networks/pittsburgh`);

//helper function to display the data
function display(network_data) {
console.log("Network Data:");
network_data.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
}

// Function to parse the data and place it into a dictionary
function parse_network(data){
  // Map is a non-primitive type in JS that can be used as a dictionary 
  // station_data is a dictionary to store all station data
  const network_data = new Map();
  
  // CHALLENGE 1.1
  // Your code here
  // use .set() to add the data to the Map
  network_data.set('name',data.network.name);
  network_data.set('city', data.network.location.city);
  network_data.set('latitude',data.network.location.latitude);
  network_data.set('longitude',data.network.location.longitude);
  display(network_data)
  // Convert the Map to a plain object that can be indexed into similar to a dictionary and an array before returning
  return Object.fromEntries(network_data);
}

// stores the output of the parsed data
const network_info = parse_network(pgh_network);

// used for getting the output quickly in the terminal, equivalent to CURL
process.stdout.write(JSON.stringify(network_info));

export const networkData = network_info;