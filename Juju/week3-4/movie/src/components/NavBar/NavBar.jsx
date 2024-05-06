import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    BarContainer,
    BarWrap,
    BarWrapRight,
    BarTitle,
    BarItemWrap,
    BarItemWrap1,
    ListContainer,
    ItemList,
} from './NavBarStyle';

export default function NavBar() {
    const[contents,setContents] = useState('로그인');

    const changeContents = () => {
        setContents(prev => prev === "로그아웃" ? "로그인" : "로그아웃")
    }
  return (

    <BarContainer>
        <BarWrap>
            <BarWrapRight>
                <Link to='/popular'>
                    <BarTitle>UMC&nbsp;Movie</BarTitle>
                </Link>
                <ListContainer>
                    <ItemList>
                        <BarItemWrap1 onClick={changeContents}>{contents}</BarItemWrap1>
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