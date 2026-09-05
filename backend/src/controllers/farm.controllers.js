import FarmModel from "../models/farms.model.js";

export const createFarm = async(req,res) => {
    try{
        const {name, description} = req.body;
    const owner = req.userId;

    const newFarm = new FarmModel({name, owner, description});
    await newFarm.save()

    return res.status(201).json({
        message: `Farm: ${name} created successfully`,
      });
    }catch(err){
        console.log(err)
    return res.status(500).json({
        message: "Internal server error",
      });
    }
}

export const getFarms = async(req,res) => {
    try{
        const owner = req.userId;

        const farms = await FarmModel.find({owner});

        if(farms.length === 0){
            return res.status(200).json({
                message : `No Farms found, please add farms to see in the list`
            })
        }else{
            return res.status(200).json({
                farms : farms
            })
        }



    }catch(err){
        console.log(err)
    return res.status(500).json({
        message: "Internal server error",
      });
    }
}


export const getFarmById = async(req,res) => {
    try {
      const owner = req.userId;
      const { farmId } = req.params;

      //console.log(owner, farmId);
      

      const farm = await FarmModel.findOne({ _id: farmId, owner});

      if(!farm){
        return res.status(404).json({
            message : "No Farms found"
        })
      }else{
        return res.status(200).json({
            farm : farm
        })
      }
        
    } catch (error) {
        console.log(error)
    return res.status(500).json({
        message: "Internal server error",
      });
    }
}

export const updateFarm = async(req, res) => {
    try {
        const {name, description} = req.body;
        const owner = req.userId;
        const {farmId} = req.params;

        if (name === undefined && description === undefined) {
            return res.status(400).json({
                message: "At least one field is required to update"
            });
        }

        const farm = await FarmModel.findOne({ _id : farmId, owner})

        if(farm){

          if( name !== undefined){
            farm.name = name;
          }
          if( description !== undefined){
            farm.description = description;
          }
          await farm.save()
          return res.status(200).json({
            message : "Farm Updated Successfully",
            farm : farm
          })
        }else{
            return res.status(404).json({
                message: "Farm not found"
            });

        }



        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
          });
        
    }
}

export const deleteFarm = async(req,res) => {
    try {
        const owner = req.userId;
        const {farmId} = req.params;

        const farm = await FarmModel.findOneAndDelete({ _id : farmId, owner})

        if(!farm){
            return res.status(404).json({
                message: "Farm not found"
            });
        }else{
            
            return res.status(200).json({
                message : "Farm deleted Successfully",
                DeletedFarm : farm
            })
        }

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
          });
        
    }
}