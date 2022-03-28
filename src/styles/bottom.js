import { head } from 'lodash'
import {colors} from './colors'

export const Btn_ = (Arrcolor,ArrBcolor,ArrFcolor,Wd ,hd) => {
    return {
        backgroundColor : colors[Arrcolor],
        borderColor : colors[ArrBcolor],
        color: colors[ArrFcolor],
        width : Wd,
        borderRadius:'10px',
        margin : 'auto',
        padding : '0.8em'
    }
}