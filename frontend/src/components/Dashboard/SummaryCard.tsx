import Card from "../ui/Card";
import { Wheat, Sprout, Map, ClipboardList, } from "lucide-react";


export default function SummaryCard(){

    const cards = [
        {
            id:1,
            title : "Farms",
            value : "03",
            desc : "Total farms",
            icons : Sprout
        },
        {
            id:2,
            title : "Fields",
            value : 12,
            desc : "Total fields",
            icons : Map
        },
        {
            id:3,
            title : "Crops",
            value : "07",
            desc : "Total Crops",
            icons : Wheat
        },
        {
            id:4,
            title : "Tasks",
            value : "05",
            desc : "Total pending",
            icons : ClipboardList
        }
    ]



    return(
        <div className="p-4 m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card) => {
                const Icons = card.icons
                return(
                    <Card key={card.id} className="hover:scale-110 transition-all duration-300 hover:shadow:md">
                    
                    <div className="flex gap-3">
                        <Icons className="text-primary"/>
                        <h3 className="text-3xl -mt-2 font-semibold hover:text-4xl text-primary">{card.title}</h3>
                    </div>
                    <h2 className="text-3xl text-center mt-4 font-bold text-primary">{card.value}</h2>
                    <h6 className="text-xl text-center mt-2 font-medium text-primary">{card.desc}</h6>

                </Card>
                )
            })}
        </div>
    )
}