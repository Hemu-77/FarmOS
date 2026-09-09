import { validatePolygon } from "../validations/geoJson.validation.js"

export const validatePolygonBody = (req, res, next) => {

    try{
        const { geometry } = req.body;

    if(validatePolygon(geometry)){
        next();
    }

    
    }catch(err){
        return res.status(400).json({
            message : 'ImProper Polygon'
        })
    }
    

}