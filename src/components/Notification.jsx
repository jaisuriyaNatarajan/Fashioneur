import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';

const NotificationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f8d7da;
    color: #721c24;
    padding: 10px;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
    margin: 10px 0;
`;

const NotificationMessage = styled.div`
    flex: 1;
    margin-left: 10px;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: #721c24;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        color: #f5c6cb;
    }
`;


const Notification = ({ message}) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (!isEmpty(message)) setShow(true);
        const timeout = setTimeout(() => {
            setShow(false);
        }, 5000);
        return () => clearTimeout(timeout);

    }, [message]);


    return (
        show && <NotificationContainer>
            <NotificationMessage>{message[message.length-1]}</NotificationMessage>
            <CloseButton onClick={() => setShow(false)} >&times;</CloseButton>
        </NotificationContainer>
    );
};

export default Notification;