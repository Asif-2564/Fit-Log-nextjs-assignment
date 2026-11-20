import Banner from "@/app/components/Banner";
import AllFitData from "@/app/components/AllFitData";
import { getAllFitData } from "@/lib/api";
import { Exercise } from "@/types/allFitType";

export default async function Home() {
    const data= await getAllFitData();
    const fitData:Exercise[] = data;
    console.log(fitData);
  return (
    <div className="container mx-auto">
      <Banner/>
      <AllFitData fitData = {fitData}/>
    </div>
  );
}
