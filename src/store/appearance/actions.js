import store from "~/store";
import {_setBackgroundColor, _setBowshadow, _setColor, _setFontSize} from "~/store/appearance/index";

export const setBackgroundColor = data => store.dispatch(_setBackgroundColor(data))
export const setColor = data => store.dispatch(_setColor(data))
export const setFontSize = data => store.dispatch(_setFontSize(data))
export const setBoxshadow = data => store.dispatch(_setBowshadow(data))
