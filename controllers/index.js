const { Location } = require("../models/location");



exports.createLocation = async (req, res) => {
	try {
		const { location, male, female } = req.body;

		const result = await Location.findOne({ location })

		if (result) return res.status(409).json({ message: "This location already exists" })

		const newLocation = new Location({ location, male, female })

		newLocation.population = parseInt(male, 10) + parseInt(female, 10)

		const savedLocation = await newLocation.save()

		return res.status(201).json(savedLocation)
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}


exports.getLocations = async (req, res) => {
	try {
		const locations = await Location.find()

		return res.status(200).json(locations)
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}


exports.updateLocation = async (req, res) => {
	try {
		const { locationId } = req.params;

		await Location.findByIdAndUpdate(locationId, { $set: req.body })

		const location = await Location.findById(locationId)

		if (!location) {
			return res.status(404).send({ message: 'Location does not exist' })
		}

		location.population = parseInt(location.male, 10) + parseInt(location.female, 10)

		await location.save();

		return res.status(200).json(location)
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}



exports.deleteLocation = async (req, res) => {
	try {
		const { locationId } = req.params;
		const location = await Location.findByIdAndRemove(locationId);

		if (!location) {
			return res.status(404).send({ message: 'Location does not exist' })
		}
		return res.status(200).send({ message: 'Location successfully deleted'})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}









