
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";


type DashboardLayoutProps = {
    children: React.ReactNode;
};


export default function DashBoardLayout({children} : DashboardLayoutProps){
    return(
        <main className="flex">
            <Sidebar/>

            <section className="flex-1">
                <Navbar/>
                    {children}
               
            </section>
        </main>
    )
}