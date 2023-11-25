import SkinyHeader from "~/componet/SkinyHeader";
import Tab from "~/componet/Tab";
import ForYou from "./for-you";

export default function home(){
    return(
        <>
           <SkinyHeader title='Anasayfa'>
            

           </SkinyHeader>
           <Tab activeTab="for-you">
           <Tab.Items>
						<Tab.Item id="for-you">
							Sana özel
						</Tab.Item>
						<Tab.Item id="followings">
							Takip edilenler
						</Tab.Item>
					</Tab.Items>
            <Tab.Content id="for-you">
               <ForYou/>
            </Tab.Content>
            <Tab.Content id="followings">
                2 contet
            </Tab.Content>
           </Tab>


        </>
    )
}