import React, { Component } from 'react';
import { Process } from '../../services/process';
import { Key } from '../../model/Key';
import { PRD } from '../../json/proxy.config.json';
import { Row, Container, Col, Carousel, Navbar, Nav } from 'react-bootstrap';
import { label_ } from '../../styles/leters';
import { device } from '../../model/device';
import Burger from './Nav/Burger';

export class COMP_Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      h: [],
      c: [],
      st: true
    };
  }

  async componentDidMount() {
    this.setState({ h: await Process(Key, 'Header/Consulta') });
    this.setState({ c: await Process(Key, 'Carrusel/Consulta') });
  }

  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${PRD.assets}/bk_0.svg)`,
            backgroundSize: 'cover ',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <Container fluid>
            <Row className="my-auto shadow p-3 mb-4 rounded my-auto">
              {device.device.type === 'desktop' ? (
                <>
                  <Col>
                    <a href="/.">
                      {this.state.h.map((x, i) => {
                        return (
                          <img
                            key={i}
                            src={`${PRD.assets}${x.Contenido}`}
                            style={{ width: 'calc(25% - 1em)' }}
                          />
                        );
                      })}
                    </a>
                  </Col>

                  <Col className="ml-auto">
                    <Row className="justify-content-end">
                      <Col xs={3}>
                        <a href={`${PRD.land}#Cuota`}>
                          <label style={label_(3, 0)}>Pagar cuota</label>
                        </a>
                      </Col>

                      <Col xs={3}>
                        <a href={`${PRD.land}#Requisito`}>
                          <label style={label_(3, 0)}>Requisitos</label>
                        </a>
                      </Col>

                      <Col xs={3}>
                        <a href={`${PRD.land}#Ayuda`}>
                          <label style={label_(3, 0)}>Ayuda</label>
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </>
              ) : (
                <>
                  <Col className="p-2">
                    {this.state.h.map((x, i) => {
                      return (
                        <img
                          key={i}
                          src={`${PRD.assets}${x.Contenido}`}
                          style={{ width: '195px' }}
                        />
                      );
                    })}
                  </Col>

                  <Col xs={1} className="ml-auto my-auto">
                    <Burger />
                  </Col>
                </>
              )}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
