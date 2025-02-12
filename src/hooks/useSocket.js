import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = () => {
  const SOCKET_URL = 'http://localhost:3001';
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      setConnectionStatus('Connected');
    });

    newSocket.on('disconnect', () => {
      setConnectionStatus('Disconnected');
    });

    newSocket.on('connect_error', (error) => {
      console.error('Connection error:', error);
      setConnectionStatus('Error');
    });

    newSocket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => newSocket.close();
  }, []);

  const sendMessage = (message) => {
    if (socket && message) {
      socket.emit('broadcast', message);
    }
  }

  return { messages, sendMessage, connectionStatus };
};

export default useSocket;