import Priemun from "~/componet/priemun";
import Search from "./search";
import Topic from "./topic";
import HowFollow from "./howfollow";
import Footer from "./footer";

export default function rightbar(){
    return(
        <aside className="w-[350px]  mr-2.5 ">
            <Search/>
            <Priemun/>
            <Topic/>
            <HowFollow/>
            <Footer/>
        </aside>
    );
}