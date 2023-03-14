import About from "@/components/widgets/About";
import Contact from "@/components/widgets/Contact";
import Footer from "@/components/widgets/Footer";
import Header from "@/components/widgets/Header";
import Home from "@/components/widgets/Home";
import MyExperience from "@/components/widgets/MyExperience";

export default function Page() {
  return (
    <>
   
     <Header/>
     <Home/>
       <MyExperience  />
   <About/>
    <Contact/>
    <Footer/> 
    </>
  )
  }