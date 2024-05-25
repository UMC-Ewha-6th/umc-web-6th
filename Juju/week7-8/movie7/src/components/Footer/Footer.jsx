
import React from 'react';
import styled from 'styled-components';

const FooterUrl = styled.div`
    position: fixed;
    z-index: 999;
    text-align: right;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(29, 30, 87);

    margin-top : 60px;
    padding : 15px;
`

export default function Footer(){
    return(
        <FooterUrl>
            https://www.makeus.in/umc
        </FooterUrl>
    );
}