import React , {Component} from 'react'
import {COMP_Header} from '../components/header/comp_header'
import {COMP_Incode} from '../components/Incode/comp_incode'
import {COMP_Footer} from '../components/footer/comp_footer'
import {PRD} from '../json/proxy.config.json'

                

export class Vw_Privacidad extends Component {



    render(){
        return(
            <div id="master" >
                
                <COMP_Header/>
                <COMP_Incode/>
                <COMP_Footer/>
            </div>
        )
    }
}