import React from 'react';
import {
  Banner,
  MainMiddle,
  MainBottom,
  SearchBox,
  Boxcontainer,
  Icon

} from './MainStyle';
import { BiSearch } from "react-icons/bi";

export default function Mainpage() {
  return (

    <Banner>
      <MainMiddle>
        환영합니다
      </MainMiddle>
      <MainBottom>
          Find your Movies!
          <Boxcontainer>
            <SearchBox type="text"/>
            <Icon>
              <BiSearch size="25"/>
            </Icon>
          </Boxcontainer> 
      </MainBottom>
    </Banner>
  );
}