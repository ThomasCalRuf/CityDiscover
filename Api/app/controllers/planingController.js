const Planning = require('../models/planingModel');

exports.getAllPlannings = async (req, res) => {
  try {
    const plannings = await Planning.find({});
    res.status(200).json(plannings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.createPlanning = async (req, res) => {
  try {
    const newPlanning = new Planning(req.body);
    const savedPlanning = await newPlanning.save();
    res.status(201).json(savedPlanning);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Requête invalide" });
  }
};

exports.getPlanningById = async (req, res) => {
  try {
    const { id } = req.params;
    const planning = await Planning.findById(id);

    if (!planning) {
      return res.status(404).json({ message: "Planning introuvable" });
    }

    res.status(200).json(planning);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.deletePlanning = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlanning = await Planning.findByIdAndDelete(id);

    if (!deletedPlanning) {
      return res.status(404).json({ message: "Planning introuvable" });
    }

    res.status(200).json({ message: "Planning supprimé avec succès" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.updatePlanning = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPlanning = await Planning.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedPlanning) {
      return res.status(404).json({ message: "Planning introuvable" });
    }

    res.status(200).json(updatedPlanning);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
