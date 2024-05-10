import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    BarContainer,
    BarWrap,
    BarWrapRight,
    BarTitle,
    BarItemWrap,
    ListContainer,
    ItemList,
} from './NavBarStyle';

export default function NavBar() {

  return (

    <BarContainer>
        <BarWrap>
            <BarWrapRight>
                <Link to='/'>
                    <BarTitle>UMC&nbsp;Movie</BarTitle>
                </Link>
                <ListContainer>
                    <ItemList>
                        <Link to='/signup'>
                            <BarItemWrap>회원가입</BarItemWrap>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link to='/popular'>
                            <BarItemWrap>Popular</BarItemWrap>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link to='/nowplaying'>
                            <BarItemWrap>Nowplaying</BarItemWrap>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link to='/toprated'>
                            <BarItemWrap>Toprated</BarItemWrap>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link to='/upcoming'>
                            <BarItemWrap>Upcoming</BarItemWrap>
                        </Link>
                    </ItemList>
                </ListContainer>
            </BarWrapRight>
        </BarWrap>
    </BarContainer>
  );

}