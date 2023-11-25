import Topics from "~/componet/topics.index";
import { topics } from "../../sidebar/util/conxt";

import SectionTopic from "~/componet/sectiontopic";

export default function Topic(){
return(
    <SectionTopic title="İlgini çekebilecek gündemler" more="/trends">

{topics.map((item,index)=><Topics  item={item} key={index}/>)}

    </SectionTopic>

)
}