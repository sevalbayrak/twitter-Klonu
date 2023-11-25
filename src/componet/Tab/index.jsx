import { useEffect, useState } from "react"
import Content from "./content"
import item from "./item"
import items from "./items"
import PropTypes from'prop-types'
import { TabContext } from "./context"



export default function Tab({children ,activeTab}){
    const itemss = children.filter(c=> c.type === items)
    
	const contents = children.filter(c => c.type === Content)
    const [active, setActive] = useState(activeTab)
    const content = contents.find(c => c.props.id === active)

    useEffect(() => {
		setActive(activeTab)
	}, [activeTab])

	const data = {
		active,
		setActive
	}



    console.log(children)
    return (
		<TabContext.Provider value={data}>
            <div className=" sticky top-[3.313rem] z-10 bg-[color:var(--background-primary)]  ">
			{itemss}
            </div>
			{content}
		</TabContext.Provider>
      
	)
}
Tab.Item = item
Tab.Items = items
Tab.Content = Content
Tab.propTypes = {
	children: PropTypes.arrayOf(
		PropTypes.node
	),
	activeTab: PropTypes.string.isRequired
}