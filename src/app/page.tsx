import Contact from "@/components/widgets/Contact";
import MyExperience from "@/components/widgets/MyExperience";

export default function Page() {
  return (
    <>
    <h1 className="text-3xl font-bold underline ">
      <div> saad shamsd</div>  </h1>
    <div className="h-[100vh] bg-gradient-to-r from-sky-600 to-cyan-500 "></div>

    <section ><MyExperience  /></section>
    <Contact/>
    </>
  )
  }