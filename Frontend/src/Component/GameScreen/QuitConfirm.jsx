import React, { useEffect } from 'react';
import './QuitConfirm.css';
import { useNavigate, useLocation } from 'react-router-dom';
import socket from '../../socket';

const QuitConfirm = () => {
    const location = useLocation();
    const roomId = location.state?.roomId || "EasterEgg";
    const username = location.state?.username || "Anonymous";
    console.log(username)
    const navigate = useNavigate();

    const onConfirm = () => {
        handleQuitGame();
    };

    const onCancel = () => {
        navigate(`/game/${roomId}`);
    };

    const handleQuitGame = () => {
        console.log(`Sending quitGame with roomId: ${roomId}, username: ${username}`);
        socket.emit('quitGame', { roomId, username });

        navigate('/');
    };

    return (
        <div className="overlay">
            <div className="modal">
                <p>You want to quit ?</p>
            </div>
            <div className="buttonGroup">
                <button className="confirmButton" onClick={onConfirm}>Yes</button>
                <button className="cancelButton" onClick={onCancel}>No</button>
            </div>
        </div>
    );
};

export default QuitConfirm;
