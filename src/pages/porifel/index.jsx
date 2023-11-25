import { useParams } from "react-router-dom"

export default function Porifel(){

    const {slug} = useParams()
    return(
        <div>
            Profile git -{slug}
        </div>
    )
}