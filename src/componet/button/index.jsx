import { createElement } from "react";
import classNames from "classnames";
import PropTypes from'prop-types'

export default function Button({size,children , normal,className , ...props}){
    return createElement('button', {
        className:classNames(' rounded-full flex items-center hover:bg[#1a8cd9] justify-center font-bold transition-color',{
          'px-4 h-9'  : size ==='normal',
          ' px-4 h-8'  : size ==='small',
          'bg-[color:var(--color-primary)]  ' : normal ==='primay',
          'bg-white text-black':normal==='white',
          'px-4 h-[52px] text-[17px] w-full': size ==='large',
          "border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]": normal === 'white-outline',
			[className]: true
         

        }),
        ...props
    },children)

 
}
Button.propTypes = {
    size: PropTypes.oneOf(['normal','small','large']),
     normal: PropTypes.oneOf(['primay', 'white']),
     props: PropTypes.object,
}

Button.defaultProps = {
    size :'normal',
    normal:'primay'
}



