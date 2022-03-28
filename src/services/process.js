import {PRD,Dat} from '../json/proxy.config.json'
const axios = require('axios');


export const Process = async (B,M) =>
{   
        const resp = await axios({
            method: 'post',
            port : PRD.port,
            url: `${PRD.BaseUri}${PRD.Prefix}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': PRD.Autorization,
                'amb':PRD.Amb,
                'method': M }, 
                data: JSON.stringify(B) 
            });   
			

        return resp.data
} 
