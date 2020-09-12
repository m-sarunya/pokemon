import React, { Component, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Modal, Button, Input } from 'antd';
import { Card } from './components';
import dataPo from './mock/cards.json';

const COLORS = {
  Psychic: '#f8a5c2',
  Fighting: '#f0932b',
  Fairy: '#c44569',
  Normal: '#f6e58d',
  Grass: '#badc58',
  Metal: '#95afc0',
  Water: '#3dc1d3',
  Lightning: '#f9ca24',
  Darkness: '#574b90',
  Colorless: '#FFF',
  Fire: '#eb4d4b',
};

export default function App() {
  const pokemonReducer = useSelector((state) => state.pokemonReducer);
  const [pokemonData] = useState(dataPo.cards);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [searchData, setSearchData] = useState(dataPo.cards);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };
  const onSearch = (e) => {
    const result = pokemonData.filter((item) => {
      const name = item.name.toUpperCase();
      const type = item.type.toUpperCase();
      const value = e.target.value.toUpperCase();
      return name.indexOf(value) >= 0 || type.indexOf(value) >= 0;
    });
    setSearchData(result);
  };

  return (
    <div className="App">
      <Modal
        visible={visible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        closable={false}
      >
        <Input onChange={onSearch} enterButton></Input>
        {searchData?.map((item, index) => (
          <Card item={item}></Card>
        ))}
      </Modal>

      {pokemonReducer?.map((item) => (
        <Card item={item} close={true}></Card>
      ))}
      <Button
        type="primary"
        onClick={() => showModal()}
        className="positionBtnModal"
      >
        Open Modal
      </Button>
    </div>
  );
}
