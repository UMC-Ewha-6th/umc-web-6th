import styled from 'styled-components';
import { CartIcon } from '../assets/icons';
import { useSelector } from 'react-redux';

const Container = styled.div`
  width: 100%;
  height: 60px;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #4b44cf;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const Icon = styled.div`
  position: relative;
  width: 30px;
  cursor: pointer;
  color: white;
`;

const Circle = styled.div`
  position: absolute;
  left: 18px;
  bottom: 18px;
  width: 17px;
  height: 17px;
  text-align: center;
  border-radius: 100%;
  border: none;
  color: white;
  background-color: #8f89ff;
  font-size: 11px;
  font-weight: 600;
`;

export default function Header() {
  const { items, status } = useSelector((state) => state.player);
  let total = 0;

  items.map((item) => (total += item.amount));

  return (
    <Container>
      <Title>UMC PlayList</Title>
      <Icon>
        <CartIcon />
        <Circle>{total}</Circle>
      </Icon>
    </Container>
  );
}
