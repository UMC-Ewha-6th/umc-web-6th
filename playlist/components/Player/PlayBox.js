import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { decrease, increase, remove } from '../../redux/cartSlice';

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-right: 50px;
`;

const Img = styled.img`
  height: 60px;
`;

const TitleBox = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 9px;
  font-weight: 600;
`;

const Price = styled.div`
  color: gray;
`;

const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8px;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Amount = styled.div`
  font-size: 10px;
  font-weight: 600;
`;

export default function PlayBox({ src, title, singer, price, id, amount }) {
  const dispatch = useDispatch();

  const onDecrease = (amount, id) => {
    if (amount === 1) {
      dispatch(remove(id));
    } else {
      dispatch(decrease(id));
    }
  };

  return (
    <Container>
      <Box>
        <Img src={src} alt={title} />
        <TitleBox>
          <div>
            {title} | {singer}
          </div>
          <Price>{price}</Price>
        </TitleBox>
      </Box>
      <AmountBox>
        <Arrow onClick={() => dispatch(increase(id))}>△</Arrow>
        <Amount>{amount}</Amount>
        <Arrow onClick={() => onDecrease(amount, id)}>▽</Arrow>
      </AmountBox>
    </Container>
  );
}
