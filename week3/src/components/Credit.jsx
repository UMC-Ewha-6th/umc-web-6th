import styled from "styled-components";

const Credit = ({credits}) => {
  const noImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";

  return (
    <>
      {credits && credits.map((e) => (
        <Container key={e.credit_id}>
          <img src={e.profile_path ? "https://image.tmdb.org/t/p/original" + e.profile_path : noImg} />
          <p>{e.name}</p>
        </Container>
      ))}
    </>
  )
}

export default Credit;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contetn: center;
  align-items: center;

  width: 100px;
  height: 100px;

  p {
    font-size: 10px;
    margin-top: 10px;
    opacity: 0.8;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    opacity: 1;
  }
`;