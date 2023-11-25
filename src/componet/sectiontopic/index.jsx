import { Link } from "react-router-dom"
import  PropTypes from'prop-types'


export default function SectionTopic({title,children,more}){
    return(
        <section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl  border border-[color:var(--background-secondary)]">
<h5 className=" py-3 px-4 text-[color:var(--color-base)] text-lx font-extrabold leading-6 flex items-center  text-[20px]">
    {title}
</h5>
<div className="grid">
    {children}
</div>
{more &&(
    <Link to={more} className="h-[52px] px-4 text-[color:var(--color-primary)] text-[15px] hover:bg-[color:var(--background-third)] flex items-center">
    Daha fazla göster
    </Link>
)}
</section>
    )

}
SectionTopic.propTypes = {
	title: PropTypes.string.isRequired,
    
	children: PropTypes.node.isRequired,
	more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

