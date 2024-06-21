import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import musicData from './musicData';
import styled from 'styled-components';

const MusicListContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const MusicItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const MusicImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 8px;
`;

const MusicInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const MusicTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const MusicSinger = styled.div`
  font-size: 14px;
  color: #555;
`;

const MusicPrice = styled.div`
  font-size: 14px;
  color: #999;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const MusicList = () => {
  const dispatch = useDispatch();

  return (
    <MusicListContainer>
      <h2>Music List</h2>
      <ul>
        {musicData.map(item => (
          <MusicItem key={item.id}>
            <MusicImage src={item.img} alt={item.title} />
            <MusicInfo>
              <MusicTitle>{item.title}</MusicTitle>
              <MusicSinger>{item.singer}</MusicSinger>
              <MusicPrice>₩ {item.price}</MusicPrice>
            </MusicInfo>
            <AddButton onClick={() => dispatch(addItem(item))}>Add to Cart</AddButton>
          </MusicItem>
        ))}
      </ul>
    </MusicListContainer>
  );
};

export default MusicList;
