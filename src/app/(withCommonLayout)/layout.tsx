import Footer from "@/components/shered/Footer";
import Nav from "@/components/shered/Nav";


const CommonLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Nav/>
            <div className="min-h-screen">
            {children} 
            </div>
           
           <Footer/>
        </>
    );
};

export default CommonLayout;