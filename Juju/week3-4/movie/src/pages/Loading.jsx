import React from 'react';
import { Oval }from 'react-loader-spinner';
import {LoadingContainer} from './pageStyle';

function Loading() {
    return (
        <LoadingContainer>
            <Oval
                type="Oval"
                color="#3d66ba"
                height={30}
                idth={30}
                timeout={3000}
            />
        </LoadingContainer>
    );
}

export default Loading;
