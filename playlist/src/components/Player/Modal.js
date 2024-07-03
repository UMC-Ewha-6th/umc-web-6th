import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { close } from '../../redux/modalSlice';
import { remove } from '../../redux/cartSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.8);
  z-index: 11;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100px;
  background-color: white;
  color: black;
  border-radius: 10px;
  border: none;
  gap: 16px;
  z-index: 12;
`;

const Question = styled.div`
  font-size: 10px;
  font-weight: 600;
`;

const Buttons = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 4px 8px;
  border: 1px solid gray;
  border-radius: 3px;
  font-size: 10px;
  cursor: pointer;
`;

export default function Modal() {
  const boolean = useSelector((state) => state.modal);
  const { items, status, error } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const onRemove = () => {
    items.map((item) => dispatch(remove(item.id)));
    dispatch(close());
  };

  return (
    <>
      {boolean.isOpen ? (
        <Container>
          <Box>
            <Question>담아두신 모든 음반을 삭제하시겠습니까?</Question>{' '}
            <Buttons>
              <Button onClick={onRemove}>네</Button>
              <Button onClick={() => dispatch(close())}>아니요</Button>
            </Buttons>
          </Box>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
