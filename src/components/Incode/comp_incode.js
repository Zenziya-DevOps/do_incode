import React , { Component } from 'react'
import { Process } from '../../services/process'
import { Incode_ } from '../../model/incode_'
import { Modal , Spinner , Row , Col  } from 'react-bootstrap'
import { label_ } from '../../styles/leters'
import ReactDom from 'react-dom'
import  '../../css/Incode.css'

let onBoarding;
let session;


const container = document.getElementById("camera-container");

function createOnBoarding() {
  /* PRD  */
    const apiKey = "64993050ce0ea4c9273ba590e92005a1cea69e34";
    const apiURL = "https://saas-api.incodesmile.com/";
  
  /* DEV 
    const apiURL = "https://demo-api.incodesmile.com/";
    const apiKey = "f3df8f605f09f74f374a07fcd8aa4294cb6dca80";
    */
    return window.OnBoarding.create({
      apiKey: apiKey,
      apiURL: apiURL,
      lang: "es"
    });
  }

function createSession() {
    return onBoarding.createSession("ALL");
  }
  
function showError() {
    alert("Ah ocurrido al procesar la solicitud");
  }

async function renderFrontTutorial() {

    onBoarding.renderFrontTutorial(container, {
        onSuccess: renderFrontIDCamera,
        token: session
      });
      
  }

async function renderFrontIDCamera() {
    
    await Send_Zenziya_update();

    onBoarding.renderCamera("front", container, {
      onSuccess: renderBackTutorial,
      onError: showError,
      token: session,
      numberOfTries: 3
    });
  }

  async function renderBackTutorial() {
    onBoarding.renderBackTutorial(container, {
      onSuccess: renderBackIDCamera,
      token: session
    });
  }

function renderBackIDCamera() {
    onBoarding.renderCamera("back", container, {
      onSuccess: processId,
      onError: showError,
      token: session,
      numberOfTries: 3
    });
  }

function processId() {
    container.innerHTML = "<p>Loading...</p>";
    onBoarding.processId({ token: session.token }).then(() => {
      container.innerHTML = "";
      renderSelfieCamera();
    });
  }
  
function renderSelfieCamera() {
    onBoarding.renderCamera("selfie", container, {
      onSuccess: () => alert("Felicidades has completado todo el proceso."),
      onError: showError,
      token: session,
      numberOfTries: 3
    });
  }

async function app() {
  try 
  {
    onBoarding = createOnBoarding(); // initialize the instance    
    await onBoarding.warmup();
    const _session = await createSession();
    console.log(_session)
    session = _session;
    await renderFrontTutorial(); // render and start autodetect of the front ID camera
  }
  catch(error)
  {
    console.log(error.message)
  }
  
  }

async function Send_Zenziya_update(){

    Incode_.Inc_InterviewId = session.interviewId;
    Incode_.Inc_InterivewCode = session.interviewCode;
    Incode_.Inc_Token = session.token;

    await Process( Incode_ , 'Incode_?Ac=2' );
}



export class COMP_Incode extends Component {

    constructor(props){
        super(props)
        this.state = {       
            message         : 'Cargando..',
            ini             : true 
        }
    }

    async componentDidMount(){

        await Process( Incode_ , 'Incode_?Ac=0').then(x => 
            {
              x ??
                x.map( xx  =>  {

                    if(!xx.Inc_Initial){
                        app(xx.mp_id)
                        ReactDom.render(<></>,document.getElementById('z'))
                        this.setState({ini:false})
                    }
                    else{
                        this.setState({message:'Lo sentimos este link se encuentra expirado.'})
                    }
                })

          
            })

    }

    render(){
        return(
            <>
                <Modal show={this.state.ini} centered >
                    <Modal.Body style={label_(2,0)} className="p-5" >
                        <Row>
                            <Col>
                                <Spinner animation="grow" className="p-3" />
                                <label className="pl-2" > {this.state.message} </label>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}