import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {
    BarContainer,
    BarWrap,
    BarWrapRight,
    BarTitle,
    BarItemWrap,
    ListContainer,
    ItemList,
    BarItemWrap2
} from './NavBarStyle';
import { useAuth } from '../AuthContext';



export default function NavBar() {

    
    const { isLoggedIn, logout } = useAuth();
    

    return (

    <BarContainer>
        <BarWrap>
            <BarWrapRight>
                <Link to='/'>
                    <BarTitle>UMC&nbsp;Movie</BarTitle>
                </Link>
                <ListContainer isLoggedIn={isLoggedIn}>
                    {isLoggedIn ? (
                        <ItemList>
                            <BarItemWrap2 onClick={logout}>로그아웃</BarItemWrap2>
                        </ItemList>
                    ) : (
                        <>
                        <ItemList>
                        <Link to='/login'>
                            <BarItemWrap>로그인</BarItemWrap>
                        </Link>
                    </ItemList>
                    <ItemList>
                        <Link to='/signup'>
                            <BarItemWrap>회원가입</BarItemWrap>
                        </Link>
                    </ItemList>
                        </>
                    )}
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