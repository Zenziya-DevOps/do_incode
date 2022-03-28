import React from 'react';
import styled from 'styled-components';
import {colors} from '../../../styles/colors'
import {label_} from '../../../styles/leters'
import {PRD} from '../../../json/proxy.config.json'



const Ul = styled.ul`
  display: inline-block;
	width:30px;
	height: 20px;
	position: relative;
	z-index: 2;

  list-style: none;
  display: relative;
  flex-flow: row nowrap;
  
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${colors[0]} ;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <a></a>
    
      <li>
        <a style={label_(3,0)} href={`${PRD.land}#Ayuda`} >
          <img src={`${PRD.assets}pf.svg`} className="img img-fluid pr-3"  />
          Preguntas frecuentes
          </a>
      </li>
      
      <li>
        <a style={label_(3,0)} href={`${PRD.land}#Cuota`}>
          <img src={`${PRD.assets}cc.svg`} className="img img-fluid pr-3"  />
          Pagar cuota</a>
      </li>
      
      <li>
        <a style={label_(3,0)} href={`${PRD.land}#Quienes`} >
          <img src={`${PRD.assets}cp.svg`} className="img img-fluid pr-3"  />
          ¿Quienes somos?</a>
      </li>
      
      <li>
        <a style={label_(3,0)} href={`${PRD.land}#Requisito`}>
          <img src={`${PRD.assets}rq.svg`} className="img img-fluid pr-3"  />
          Requisitos</a>
      </li>
      
    </Ul>
  )
}

export default RightNav