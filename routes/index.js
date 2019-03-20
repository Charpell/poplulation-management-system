const { createLocation, getLocations, updateLocation, deleteLocation } = require("../controllers")


const routes = (app) => {
	app.post('/api/v1/location', createLocation)
	app.get('/api/v1/location', getLocations)
	app.put('/api/v1/location/:locationId', updateLocation)
	app.delete('/api/v1/location/:locationId', deleteLocation)
}


module.exports = routes;