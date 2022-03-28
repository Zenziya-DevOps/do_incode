import React ,{ Component } from 'react'
import {colors} from '../../styles/colors'
import {Container,Row,Col} from 'react-bootstrap'
import {PRD} from '../../json/proxy.config.json'
import {label_} from '../../styles/leters'


import {device} from '../../model/device'


export class COMP_Footer extends Component {
    render(){
        return(
            <>
                <div style={{ backgroundColor:colors[8] }} className="pt-5" >
                    <Container fluid className="pt-5 pb-5" >
                        {device.device.type === "desktop" 
                        ?
                        <>
                            <Row className="pt-5 pb-5" >

                                <Col xs={0} className ="text-center my-auto"  >
                                    <a href="/.">
                                         <img src={`${PRD.assets}efectivoya__.svg`} className="img img-fluid" />
                                    </a>
                                </Col>

                                <Col xs={0} >
                                        <Col xs={12} >
                                            <a href={`${PRD.land}#Requisito`}>
                                                <label style={label_(0,0,'16px')} className="font-weight-bold" >Ayuda</label>
                                            </a>
                                        </Col>
                                        
                                        <Col xs={12} >
                                            <a href={`${PRD.land}#Ayuda`}>
                                                <label style={label_(0,0,'10px')} >Preguntas frecuentes</label>
                                            </a>
                                        </Col>
                                        
                                        <Col xs={12} >
                                            <a href={`${PRD.land}#Cuota`}>
                                                <label style={label_(0,0,'10px')} >¿Cómo pago mi cuota?</label>
                                            </a>
                                        </Col>
                                        
                                        <Col xs={12}>
                                            <a href={`${PRD.land}#Requisito`}>
                                            <label style={label_(0,0,'10px')} >Requisitos</label>
                                            </a>
                                        </Col>
                                </Col>

                                <Col xs={0} >
                                        <Col xs={12} >
                                            <label style={label_(0,0,'16px')} className="font-weight-bold" >Empresa</label>
                                        </Col>
                                        <Col xs={12} >
                                            <a href={`${PRD.land}#Quienes`}>
                                                <label style={label_(0,0,'10px')} >Quiénes somos</label>
                                            </a>
                                        </Col>
                                </Col>

                                <Col xs={device.device.type === "desktop" ? 0 : 6 } >
                                        <Col xs={12} >
                                            <a href="#"> 
                                                <label style={label_(0,0,'16px')} className="font-weight-bold" >Contacto</label>
                                            </a></Col>
                                        <Col xs={12} >
                                            <a href="mailto:info@efectivoya.do">
                                                <label style={label_(0,0,'10px')} >info@efectivoya.do</label>
                                            </a>
                                        </Col>
                                </Col>

                                </Row>

                                <hr className="pt-3" />

                                <Row className="text-center mt-4" >
                                <Col xs={4}>
                                    <label style={label_(1,0,'14px')}>©️ C.E.D. S.R.L / Todos los derechos reservados</label>
                                </Col>

                                <Col xs={2}> <a href={`${PRD.land}Privacidad`}> <u style={label_(0,0,'12px')} >Privacidad</u></a></Col>
                                <Col xs={2}> <a href={`${PRD.land}Consentimiento`}> <u style={label_(0,0,'12px')} >Consentimiento Informado</u> </a></Col>
                                <Col xs={2}> <a href={`${PRD.land}TYC`}> <u style={label_(0,0,'12px')} >Términos y condiciones</u> </a></Col>

                                <Col xs={2} > 


                                    <a className="p-2" href="https://www.facebook.com/Efectivo-Ya-RD-118939926624833">
                                        <img src={`${PRD.assets}facebook.svg`} className="img img-fluid" style={{width:'1.5em'}} /> 
                                    </a>

                                    <a className="p-2" href="https://www.instagram.com/efectivoya_rd/">
                                    <img src={`${PRD.assets}instagram.svg`} className="img img-fluid" style={{width:'1.5em'}} /> 
                                    </a>
                                </Col>
                                </Row>
                        </>
                        :
                        <>
                            <Row>
                                <Col xs={12} className="p-5">
                                    <a href="/." >
                                        <img src={`${PRD.assets}efectivoya_.svg`} className="img img-fluid" />
                                    </a>
                                </Col>

                                <Col xs={12} className="pl-5 pb-3 pt-3">
                                    <Row>
                                        <Col xs={12}>
                                            <label style={label_(0,0,'16px')} className="font-weight-bold" >Empresa</label>
                                        </Col>
                                        
                                        <Col xs={12}>
                                            <a href={`${PRD.land}#Quienes`}>
                                                <label style={label_(0,0,'10px')} >Quiénes somos</label>
                                            </a>
                                        </Col>

                                    </Row>
                                </Col>

                                <Col xs={12} className="pl-5 pb-3 pt-3">
                                    <Row>
                                        <Col xs={12}>
                                            <label style={label_(0,0,'16px')} className="font-weight-bold" >Ayuda</label>
                                        </Col>
                                        
                                        <Col xs={12} >
                                            <a href={`${PRD.land}#Ayuda`}>
                                                <label style={label_(0,0,'10px')} >Preguntas frecuentes</label>
                                            </a>
                                        </Col>
                                        
                                        <Col xs={12} >
                                            <a href={`${PRD.land}#Cuota`}>
                                                <label style={label_(0,0,'10px')} >¿Cómo pago mi cuota?</label>
                                            </a>
                                        </Col>
                                        
                                        <Col xs={12}>
                                            <a href={`${PRD.land}#Requisito`}>
                                            <label style={label_(0,0,'10px')} >Requisitos</label>
                                            </a>
                                        </Col>

                                    </Row>
                                </Col>

                                <Col xs={12} className="pl-5 pb-3 pt-3">
                                    <Row>
                                        <Col xs={12}>
                                            <label style={label_(0,0,'16px')} className="font-weight-bold" >Contacto</label>
                                        </Col>
                                        
                                        <Col xs={12} >
                                            <a href="mailto:info@efectivoya.do">
                                                <label style={label_(0,0,'10px')} >info@efectivoya.do</label>
                                            </a>
                                        </Col>


                                    </Row>
                                </Col>

                                <Col xs={12} className="pt-5" >
                                    <hr/>
                                </Col>

                                <Col xs={12} className="pl-4 pt-5 pb-3" > 

                                    <a className="p-4" href="https://www.facebook.com/Efectivo-Ya-RD-118939926624833">
                                        <img src={`${PRD.assets}facebook.svg`} className="img img-fluid" style={{width:'30px'}} /> 
                                    </a>

                                    <a className="p-4" href="https://www.instagram.com/efectivoya_rd/">
                                    <img src={`${PRD.assets}instagram.svg`} className="img img-fluid" style={{width:'30px'}} /> 
                                    </a>
                                </Col>

                                <Col xs={12} className="pl-5 pt-4"> <a href={`${PRD.land}Privacidad`} > <u style={label_(0,0,'12px')} >Privacidad</u></a></Col>
                                <Col xs={12} className="pl-5 pt-2"> <a href={`${PRD.land}TYC`}><u style={label_(0,0,'12px')} >Términos y condiciones</u></a></Col>
                                <Col xs={12} className="pl-5 pt-2"> <a href={`${PRD.land}Privacidad`}> <u style={label_(0,0,'12px')} >Consentimiento Informado</u></a></Col>

                                <Col xs={12}  className="pl-5 pt-4" >
                                    <label style={label_(1,0,'12px')}>©️ C.E.D. S.R.L / Todos los derechos reservados</label>
                                </Col>


                            </Row>
                        </>
                        }
                        
                    </Container>
                </div>
            </>
        )
    }
}