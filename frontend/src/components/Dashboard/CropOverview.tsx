
import Card from "../ui/Card"

export default function CropOverview(){
    const crops = [
        {
            id : 1,
            name : "Paddy",
            status : "Undone",
            percentage : 78
        },{
            id : 2,
            name : "SugarCane",
            status : "Done",
            percentage : 44
        },{
            id : 3,
            name : "Ragi",
            status : "Done",
            percentage : 98
        },{
            id : 4,
            name : "Tomato",
            status : "Undone",
            percentage : 12
        }
    ]

    return(
        <Card>
            <h1 className="text-3xl text-primary">Crop Overview</h1>
            {crops.map((crop) => (
                <div key={crop.id} className="border-b border-border py-6 ">
                    <div className="flex items-center justify-between gap-3">
                    <div className="group">
                        <h6 className="text-lg text-primary group-hover:first:text-2xl transition-all duration-300 ease-in-out">{crop.name}</h6>
                        <p>Status : <span className={`${crop.status === "Done" ? `text-success` : `text-danger`}`}>{crop.status}</span></p>
                        
                    </div>
                   
                    <div>
                        <h3 className="text-xl text-primary">{crop.percentage}%</h3>
                    </div>
                </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-red-500 border border-black">
                    <div className="bg-primary h-4 rounded-full transition-all duration-300 ease-in-out" style={{width : `${crop.percentage}%`}}>
                    
                </div>
                </div>
                </div>
            ))}
        </Card>
    )
}