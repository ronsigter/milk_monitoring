import React, { useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPrescriptionBottle,
  faIcicles
} from '@fortawesome/free-solid-svg-icons';

import AddItem from './AddItem';

import { StateContext } from '../Context';

const Home = () => {
  const { state } = useContext(StateContext);

  const storedCapacity = state.storages
    .map((milk) => parseInt(milk.quantity))
    .reduce((total, quantity) => total + quantity, 0);
  const consumedCapacity = state.storages
    .filter((milk) => milk.state === 'done')
    .map((milk) => parseInt(milk.quantity))
    .reduce((total, quantity) => total + quantity, 0);
  const freezeCount = state.storages.filter((milk) => milk.state === 'freeze')
    .length;
  const thawedCount = state.storages.filter((milk) => milk.state === 'thawed')
    .length;

  const lastItem = state.storages.slice(-1)[0];

  return (
    <>
      <Row>
        <Col className='text-center justify-content-center align-items-center'>
          <a href='https://docs.google.com/spreadsheets/d/1C7HAwFojqKU5Yd4nFLwyPQg9iTNAoTNDAaSE1ftWuBM/edit#gid=0'>
            Google Sheet Link
          </a>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>Huling Bilang</Col>
              <Col>
                <p className='text-center'>{lastItem.id}</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>Huling petsa ng pag-iimbak</Col>
              <Col>
                <p className='text-center'>{lastItem.date}</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>
                Kabuuang gatas na naimbak{' '}
                <FontAwesomeIcon icon={faPrescriptionBottle} />
              </Col>
              <Col>
                <p className='text-center'>{storedCapacity} mL</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>Kabuuang gatas na nainom</Col>
              <Col>
                <p className='text-center'>{consumedCapacity} mL</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>
                Natitirang bilang ng mga pinatigas na gatas
                <FontAwesomeIcon icon={faIcicles} />
              </Col>
              <Col>
                <p className='text-center'>{freezeCount}</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} style={summaryStyle}>
          <Container>
            <Row>
              <Col>
                Kasalukuyang bilang ng mga tunaw na gatas sa loob ng palamigan
              </Col>
              <Col>
                <p className='text-center'>{thawedCount}</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <AddItem />
      </Row>
    </>
  );
};

const summaryStyle = {
  margin: '16px'
};

export default Home;
