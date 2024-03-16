import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";

const MarketingPage=()=>{
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center flex-1 px-6">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
    );
}
export default MarketingPage;