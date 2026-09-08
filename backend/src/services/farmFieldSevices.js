import FarmModel from "../models/farms.model.js";
import fieldModel from "../models/field.model.js";

export const verifyFieldAccess = async(userId, farmId, fieldId) => {
    try {
        const farm = await FarmModel.findOne({
            _id : farmId,
            owner : userId
       })

       if(!farm){
        return false;
       }

       const field = await fieldModel.findOne({
            _id : fieldId,
            farm : farmId
       })

       if(!field){
        return false;
       }

       return field;
        
    } catch (error) {
        console.log(error)
        throw error;
        
    }
}