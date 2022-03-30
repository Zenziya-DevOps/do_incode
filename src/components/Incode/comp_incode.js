import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Modal, Spinner, Row, Col } from 'react-bootstrap';
import { Incode_ } from '../../model/incode_';
import { label_ } from '../../styles/leters';
import '../../css/Incode.css';

let onBoarding;
let session;

const container = document.getElementById('camera-container');

export default function COMP_Incode() {
  function createOnBoarding() {
    /* PRD  */
    const apiKey = '64993050ce0ea4c9273ba590e92005a1cea69e34';
    const apiURL = 'https://saas-api.incodesmile.com/';

    /* DEV
  const apiURL = 'https://demo-api.incodesmile.com/';
  const apiKey = 'f3df8f605f09f74f374a07fcd8aa4294cb6dca80';
*/
    return window.OnBoarding.create({
      apiKey,
      apiURL,
      lang: 'es'
    });
  }

  function createSession() {
    return onBoarding.createSession('ALL');
  }

  function showError() {
    alert('Ah ocurrido al procesar la solicitud');
  }

  async function renderFrontTutorial() {
    onBoarding.renderFrontTutorial(container, {
      onSuccess: renderFrontIDCamera,
      token: session
    });
  }

  async function renderFrontIDCamera() {
    await Send_Zenziya_update();

    onBoarding.renderCamera('front', container, {
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
    onBoarding.renderCamera('back', container, {
      onSuccess: processId,
      onError: showError,
      token: session,
      numberOfTries: 3
    });
  }

  function processId() {
    container.innerHTML = '<p>Loading...</p>';
    onBoarding.processId({ token: session.token }).then(() => {
      container.innerHTML = '';
      renderSelfieCamera();
    });
  }

  function renderSelfieCamera() {
    onBoarding.renderCamera('selfie', container, {
      onSuccess: () => {
        alert('Felicidades has completado todo el proceso.');
        debugger;
      },
      onError: showError,
      token: session,
      numberOfTries: 3
    });
  }

  const [ini, setIni] = useState(true);
  const [message] = useState('Cargando..');
  const [searchParams] = useSearchParams();

  function Send_Zenziya_update() {
    Incode_.Inc_InterviewId = session.interviewId;
    Incode_.Inc_InterivewCode = session.interviewCode;
    Incode_.Inc_Token = session.token;

    for (const entry of searchParams.entries()) {
      console.log(entry);
    }

    debugger;

    //await Process(Incode_, 'Incode_?Ac=2'); //Complete_Mp
  }

  useEffect(async () => {
    try {
      onBoarding = createOnBoarding(); // initialize the instance
      await onBoarding.warmup();
      const _session = await createSession();
      console.log(_session);
      session = _session;
      await renderFrontTutorial(); // render and start autodetect of the front ID camera
      setIni(false);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <Modal show={ini} centered>
      <Modal.Body style={label_(2, 0)} className="p-5">
        <Row>
          <Col>
            <Spinner animation="grow" className="p-3" />
            <label className="pl-2"> {message} </label>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
