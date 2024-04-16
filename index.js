
// Function to find drivers whose names match the provided string, case insensitive
function findMatching(drivers, query) {
    const lowercaseQuery = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowercaseQuery);
}

// Function to find drivers whose names begin with the provided string, case insensitive
function fuzzyMatch(drivers, query) {
    const lowercaseQuery = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowercaseQuery));
}

// Function to return driver objects whose name property matches the provided string
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
