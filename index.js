// Function to find matching drivers based on the provided query (case insensitive)
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

// Function to find drivers whose names begin with the provided letters
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Function to find driver objects whose name property matches the provided string argument
function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}
