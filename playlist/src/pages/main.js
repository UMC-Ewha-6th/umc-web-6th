import styled from 'styled-components';
import PlayBox from '../components/Player/PlayBox';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../redux/modalSlice';
import { useEffect, useState } from 'react';
import Modal from '../components/Player/Modal';
import { getMusicList } from '../redux/cartSlice';
import { BeatLoader } from 'react-spinners';

const Container = styled.div`
  width: 100;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const List = styled.div`
  dispaly: flex;
  flex-direction: column;
  margin: 30px 0;
`;

const Hr = styled.hr`
  width: 100%;
  background-color: black;
  border: 0;
  height: 1px;
`;

const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

const Text = styled.div`
  font-size: 9px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 9px;
  font-weight: 600;
  text-align: center;
  width: 100px;
  height: 25px;
  border: 1px solid red;
  border-radius: 2px;
  color: red;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Msg = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: gray;
  margin-top: 30px;
`;

const Loading = styled.div`
  font-size: 20px;
  font-weight: 600;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export default function MainPage() {
  const { items, status } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const [isExist, setIsExist] = useState(true);
  let totalPrice = 0;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getMusicList());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (items.length === 0) {
      setIsExist(false);
    } else {
      setIsExist(true);
    }
  });

  return (
    <Container>
      <Modal />
      {status === 'loading' ? (
        <Loading>
          <BeatLoader color="#4b44cf" size={15} />
          Loading...
        </Loading>
      ) : (
        <>
          {isExist ? (
            <>
              <Title>당신이 선택한 음반</Title>
              <List>
                {items.map((item, idx) => {
                  const amount = item.amount;
                  totalPrice += amount * item.price;
                  return (
                    <PlayBox
                      key={idx}
                      src={item.img}
                      title={item.title}
                      singer={item.singer}
                      price={item.price}
                      id={item.id}
                      amount={item.amount}
                    />
                  );
                })}
              </List>
              <Hr />
              <TotalPrice>
                <Text>총 가격</Text>
                <Text>₩ {totalPrice}</Text>
              </TotalPrice>
              <Button onClick={() => dispatch(open())}>장바구니 초기화</Button>
            </>
          ) : (
            <Msg>고객님이 좋아하는 음반을 담아보세요~!</Msg>
          )}{' '}
        </>
      )}
    </Container>
  );
}
