export const extractLocations = (event) => {
  var extractLocations = event.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};