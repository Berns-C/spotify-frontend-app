import React from 'react';
import { styled } from '@material-ui/core/styles';

const Div = styled('div')({
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    backgroundColor: 'rgba(255,255,0, 0.7)',
    padding: 30
});

const LoadingDiv = styled('div')({
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
});

const Login = props =>  <Div>
                            <LoadingDiv>
                            {props.children}
                            </LoadingDiv>
                        </Div>;

export default Login;