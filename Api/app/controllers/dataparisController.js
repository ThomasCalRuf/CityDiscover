const DataParis = require('../models/dataparisModel');

exports.getAllDataParis = async (req, res) => {
  try {
    const data = await DataParis.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.createDataParis = async (req, res) => {
  try {
    const newData = req.body; 
    const createdData = await DataParis.create(newData);
    res.status(201).json(createdData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.getDataParisById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await DataParis.findById(id);
    
    if (!data) {
      return res.status(404).json({ message: "Donnée introuvable" });
    }
    
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.deleteDataParis = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await DataParis.findByIdAndDelete(id);
    
    if (!deletedData) {
      return res.status(404).json({ message: "Donnée introuvable" });
    }
    
    res.status(200).json({ message: "Donnée supprimée avec succès" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.updateDataParis = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = await DataParis.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!updatedData) {
      return res.status(404).json({ message: "Donnée introuvable" });
    }
    
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
