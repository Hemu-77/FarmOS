

import Card from "../ui/Card"

export default function RecentFarms(){

    const farms = [
        {
            id : 1,
            title : "Farm 1"
        },{
            id : 2,
            title : "Farm 2"
        },{
            id : 3,
            title : "Farm 3"
        },{
            id : 4,
            title : "Farm 4"
        }
    ]


    return(
        <Card>
            <h1 className="text-3xl text-primary mb-4">Recent Farms</h1>
            {farms.map((farm) => (
                <div key={farm.id} className="flex items-center justify-between border-b border-border py-3">
                    <h6 className="text-lg text-primary">{farm.title}</h6>
                    <span className="text-lg text-primary">→</span>
                </div>
            ))}
        </Card>
    )
}