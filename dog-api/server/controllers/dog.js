
import DogModel from "../models/dog.js";

export const addDog = async (req, res) => {
    const dog = req.body;
    const newDog = new DogModel({
        ...dog,
        creator: req.userId,
        createdAt: new Date().toISOString(),
      });

      try {
        await newDog.save();
        res.status(201).json(newDog);
      } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
      } 
};

export const getDogs = async (req, res) => {
    try {
      const dogs = await DogModel.find();
      res.status(200).json(dogs);
    } catch (error) {
      res.status(404).json({ message: "Something went wrong" });
    }
  };


  
