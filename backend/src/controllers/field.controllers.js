import fieldModel from "../models/field.model.js";
import FarmModel from "../models/farms.model.js";

export const addField = async( req, res) => {
    try{
        const {name, description} = req.body;
    const { farmId } = req.params;
    const userId = req.userId;

    const farm = await FarmModel.findOne({
        _id : farmId,
        owner : userId
    })

    if(!farm){
        return res.status(404).json({
            message : "Farm not found or you are not authorized to access it"
        })
    }

    const newField =  new fieldModel({name, farm : farmId, description})
    await newField.save();

    return res.status(201).json({
        message : "New Field Created Successfully",
        field : newField
    })
    
    }catch(err){
        console.log(err)
    return res.status(500).json({
        message: "Internal server error",
      });
    }



}

export const getAllFields = async(req, res) => {
    try {
        const {farmId } = req.params;
    const userId = req.userId;

    const farm = await FarmModel.findOne({
        _id : farmId,
        owner : userId
    })

    if(!farm){
        return res.status(404).json({
            message : "Fields not found or you are not authorized to access it"
        }) 
    }

    const fields = await fieldModel.find({farm : farmId})

    return res.status(200).json({
        message : "Field Found",
        fields
    })
        
    } catch (error) {
        console.log(error)
    return res.status(500).json({
        message: "Internal server error",
      });
        
    }


}

export const getOneField = async(req, res) => {
    try {
        const {farmId, fieldId} = req.params;
        const userId = req.userId;

        const farm = await FarmModel.findOne({
            _id : farmId,
            owner : userId
        })

        if(!farm){
            return res.status(404).json({
                message: "Farm not found or you are not authorized to access it"
            })
        }

        const field = await fieldModel.findOne({
            _id : fieldId,
            farm : farmId
        });

        if(!field){
            return res.status(404).json({
                message : "No Fields Found"
            })
        }

        return res.status(200).json({
            message : "Field found",
            field

        })
        
    } catch (error) {
        console.log(error)
    return res.status(500).json({
        message: "Internal server error",
      });
        
    }
}

export const updateField = async(req, res) => {
    try {
        const {name, description} = req.body;
        const {farmId, fieldId } = req.params;
        const userId = req.userId;

        if(name === undefined && description === undefined){
            return res.status(400).json({
                message: "At least one field is required to update"
            });
        }

        const farm = await FarmModel.findOne({
            _id : farmId,
            owner : userId
        })

        if(!farm){
            return res.status(404).json({
                message: "Farm not found or you are not authorized to access it"
            })
        }

        const field = await fieldModel.findOne({
            _id : fieldId,
            farm : farmId
        });

        if(!field){
            return res.status(404).json({
                message : "No Fields Found"
            })
        }

        if ( name !== undefined){
            field.name = name
        }

        if (description !== undefined){
            field.description = description
        }

        await field.save();

        return res.status(200).json({
            message : "Fields Updated Successfully",
            field 
        })


        
    } catch (error) {
        console.log(error)
    return res.status(500).json({
        message: "Internal server error",
      });
        
    }
}

export const deleteField = async(req,res) => {
   try {
    
        const {farmId, fieldId } = req.params;
        const userId = req.userId;

        const farm = await FarmModel.findOne({
            _id : farmId,
            owner : userId
        })

        if(!farm){
            return res.status(404).json({
                message: "Farm not found or you are not authorized to access it"
            })
        }

        const field = await fieldModel.findOneAndDelete({
            _id : fieldId,
            farm : farmId
        });

        if(!field){
            return res.status(404).json({
                message : "No Fields Found"
            })
        }

        

        return res.status(200).json({
            message : "Field Deleted Succesfully",
            field
        })

        


    
   } catch (error) {

    console.log(error)
    return res.status(500).json({
        message: "Internal server error",
      });
    
   }
}