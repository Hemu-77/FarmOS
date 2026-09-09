
export const validatePolygon = ( geometry ) => {


        if(geometry === undefined || geometry === null){
            throw new Error("Invalid polygon")
        }

        if(geometry.type !== "polygon"){
            throw new Error(" Invalid Polygon")
        }

        if (geometry.coordinates.length === 0 || geometry.coordinates[0].length === 0){
            throw new Error(" Invalid Polygon")
        }

        if(geometry.coordinates[0][0][0] !== geometry.coordinates[0][geometry.coordinates[0].length - 1][0]
            || geometry.coordinates[0][0][1] !== geometry.coordinates[0][geometry.coordinates[0].length - 1][1]
        ){
            throw new Error("Invalid Polygon")
        }

        for ( const point of geometry.coordinates[0]){

            if(!Array.isArray(point) || point.length !== 2){
                throw new Error(" Invalid Polygon")
            }

            const longitude = point[0];
            const latitude = point[1];


            if( !Number.isFinite(longitude) 
                || !Number.isFinite(latitude)
                || longitude > 180 
                || longitude < -180 
                || latitude > 90 
                || latitude < -90
            ){
                throw new Error("Invalid Polygon")
            }
        }

        return true;
        
    

}