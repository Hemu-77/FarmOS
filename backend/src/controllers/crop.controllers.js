import cropModel from "../models/crop.model.js";
import fieldModel from "../models/field.model.js";

import { verifyFieldAccess } from "../services/farmFieldSevices.js";


export const addCrop = async(req,res) => {
    try {
       const { name, description, plantedDate, expectedHarvestDate, actualHarvestDate } = req.body;
       const {fieldId, farmId} = req.params;
       const userId = req.userId;

       const fieldPresence = await verifyFieldAccess(userId, farmId, fieldId)

       if(!fieldPresence){
            return res.status(404).json({
                message : "No fields found to add crop"
            })
       }

       const newCrop = new cropModel({ name, field : fieldId, description, plantedDate, expectedHarvestDate, actualHarvestDate});
       await newCrop.save();

       return res.status(201).json({
            message : "New Crop Saved Successfully",
            newCrop
       })} catch (error) {
        console.log(error)
        return res.status(500).json
        ({
            message: "Internal server error",
        });
    }
}

export const getAllCrop = async(req,res) => {
    try {

      
       const {fieldId, farmId} = req.params;
       const userId = req.userId;

       const fieldPresence = await verifyFieldAccess(userId, farmId, fieldId)

       if(!fieldPresence){
            return res.status(404).json({
                message : "No fields found to add crop"
            })
       }

       const crops = await cropModel.find({ field : fieldId})

       if( crops.length === 0){
          return res.status(200).json({
            message : "No Crops found so add crops"
          })
       }

       return res.status(200).json({
        crops
       })

        
    } catch (error) {
        console.log(error)
        return res.status(500).json
        ({
            message: "Internal server error",
        });
        
    }
}



export const getOneCrop = async(req,res) => {
    try {

      
       const {fieldId, farmId, cropId} = req.params;
       const userId = req.userId;

       const fieldPresence = await verifyFieldAccess(userId, farmId, fieldId)

       if(!fieldPresence){
            return res.status(404).json({
                message : "Field not found or you are not authorized to access it"
            })
       }

       const crop = await cropModel.findOne({ 
        _id : cropId,
        field : fieldId
        })

       if( !crop){
          return res.status(404).json({
            message : "No Crops found"
          })
       }

       return res.status(200).json({
        crop
       })

        
    } catch (error) {
        console.log(error)
        return res.status(500).json
        ({
            message: "Internal server error",
        });
        
    }
}

export const updateCropField = async(req, res) => {

    try {
       const { name, description, plantedDate, expectedHarvestDate, actualHarvestDate } = req.body;
       const {fieldId, farmId, cropId} = req.params;
       const userId = req.userId;

       if (name === undefined && description === undefined && plantedDate === undefined && expectedHarvestDate === undefined && actualHarvestDate === undefined){
        return res.status(400).json({
            message: "At least one field is required to update"
        });
       }

       const fieldPresence = await verifyFieldAccess(userId, farmId, fieldId)

       if(!fieldPresence){
            return res.status(404).json({
                message : "No fields found or User unauthorized"
            })
       }

       const crop = await cropModel.findOne({ 
        _id : cropId,
        field : fieldId
        })

       if( !crop){
          return res.status(404).json({
            message : "No Crops found"
          })
       }

       if(name !== undefined){
         crop.name = name
       }

       if(description !== undefined){
        crop.description = description
       }

       if(plantedDate !== undefined){
        crop.plantedDate = plantedDate
       }

      if(expectedHarvestDate !== undefined){
        crop.expectedHarvestDate = expectedHarvestDate
       }

      if(actualHarvestDate !== undefined){
        crop.actualHarvestDate = actualHarvestDate
       }

       await crop.save()

       return res.status(200).json({
        message : "Crop Updated Successfully",
        crop
       })




        
    } catch (error) {
        console.log(error)
        return res.status(500).json
        ({
            message: "Internal server error",
        });
        
    }
}

export const deleteCrop = async(req, res) => {
    try {

        const {fieldId, farmId, cropId} = req.params;
        const userId = req.userId;

       const fieldPresence = await verifyFieldAccess(userId, farmId, fieldId)

       if(!fieldPresence){
            return res.status(404).json({
                message : "Field not found or you are not authorized to access it"
            })
       }

       const deletedCrop = await cropModel.findOneAndDelete({ 
        _id : cropId,
        field : fieldId
        })

       if( !deletedCrop){
          return res.status(404).json({
            message : "No Crops found"
          })
       }

       return res.status(200).json({
        deletedCrop
       })

        
    } catch (error) {
        console.log(error)
        return res.status(500).json
        ({
            message: "Internal server error",
        });
        
    }
}