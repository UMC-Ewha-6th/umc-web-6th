import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Credit from "./Credit";
const Credits = ({id}) => {
  const [credits, setCredits] = useState({
    cast: [],
    crew: [],
  });
  const {cast, crew} = credits;

  const fetchCredits = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=ko&page=2`;

      const res = await axios.get(url,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTI2NmZmNWQ3Yzg5MjMzYTczNjY4M2JjOGM0MDY1NiIsInN1YiI6IjY2MzIwOWM2OTlkNWMzMDEyYzU2MTlkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2qOb1Crs3dV9TzXJdzFn5T4tKWZ1kyMwqE0ZAGCYbKY`,
          },
        }
      );

      setCredits({...credits, cast: res.data.cast, crew: res.data.crew});
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(()=>{
    fetchCredits();
  }, [id]);

  return (
    <Container>
      <Content>
        <Credit credits={cast} />
      </Content>
      <Content>
        <Credit credits={crew} />
      </Content>
    </Container>
  )
}

export default Credits;

const Container = styled.div`
  display: flex;
  justify-content: center;
  
  width: 100%;
  height: 50%;

  margin: 50px;
`;

const Content = styled.div`
  width: 50%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin: 0px 30px;

`;