import React from 'react';
import {
  BorderStyled,
  ImageStyled,
  ProgressStyled,
  RowDetail,
  HappinessImage,
} from './styles';
import { Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { addData, deleteData } from '../../redux/actions/pokemon.action';

export const Card = ({ children, item, close }) => {
  const dispatch = useDispatch();
  const HP = item.hp ? item.hp : 0;
  const reAttacks = item.attacks?.map((item) => {
    return item.damage.replace(/[^0-9]/, '');
  });
  const Weakness = item.weaknesses?.length === 1 ? 100 : 0;
  const Damage = reAttacks?.reduce((a, b) => {
    return Number(a) || 0 + Number(b) || 0;
  }, 0);
  const countHap = (HP / 10 + Damage / 10 + 10 - Weakness) / 5;
  const onAdd = (item) => {
    dispatch(addData(item));
  };
  const onDelete = (id) => {
    dispatch(deleteData(id));
  };
  return (
    <BorderStyled>
      <Row>
        <Col xs={7}>
          <ImageStyled src={item.imageUrl} alt="img" />
        </Col>
        <Col xs={17}>
          <Row justify="space-between">
            <Col>{item.name}</Col>
            <Col>
              {close ? (
                <a onClick={() => onDelete(item.id)}>X</a>
              ) : (
                <a onClick={() => onAdd(item)}>Add</a>
              )}
            </Col>
          </Row>
          <RowDetail>
            <Col xs={2}>HP</Col>
            <Col xs={22}>
              <ProgressStyled
                percent={item.hp !== 'None' && item.hp}
                showInfo={false}
              />
            </Col>
          </RowDetail>
          <RowDetail>
            <Col xs={2}>STR</Col>
            <Col xs={22}>
              <ProgressStyled
                percent={
                  item.attacks?.length * 50 <= 100
                    ? item.attacks?.length * 50
                    : 0
                }
                showInfo={false}
              />
            </Col>
          </RowDetail>
          <RowDetail>
            <Col xs={2}>WEAK</Col>
            <Col xs={22}>
              <ProgressStyled
                percent={item.weaknesses?.length === 1 ? 100 : 0}
                showInfo={false}
              />
            </Col>
          </RowDetail>
          <RowDetail>
            {console.log(HP, Damage, Weakness, countHap)}
            <HappinessImage src="cute.png"></HappinessImage>
          </RowDetail>
        </Col>
      </Row>
    </BorderStyled>
  );
};
