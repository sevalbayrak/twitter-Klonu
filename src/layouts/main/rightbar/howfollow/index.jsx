import SectionTopic from "~/componet/sectiontopic";
import { useAccount } from "~/store/auth/hooks";

import { userfollow } from "~/mores";

import Follow from "~/componet/follow";

export default function HowFollow(){
const user= useAccount()

    return(
        <SectionTopic title="Kimi takip etmeli" more={`/connect_people?user_id${user.id}`}>
            {userfollow.map((user,index)=>(
                <Follow user={user} key={index}/>
            ))}
            

        </SectionTopic>
    )
}