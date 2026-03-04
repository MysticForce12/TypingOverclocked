import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateRoom = ({ initialTime, setDifficulty, motionProps, whileTap }) => {

    const location = useLocation();
    const roomId = location.state?.roomId || 'No Room ID';

    const navigate = useNavigate();

    const handleCreateClick = () => {

        setTimeout(() => {
            navigate(`/${roomId}/in-queue`, {
                state: {
                    initialTime,
                    setDifficulty,
                    roomId,
                }
            });
        }, 300);


    };

    return (
        <motion.button
            {...motionProps}
            whileTap={whileTap}
            className="Play" onClick={handleCreateClick} >
            CREATE
        </motion.button >
    );
};

export default CreateRoom;