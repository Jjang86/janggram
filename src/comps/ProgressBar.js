import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <motion.div className='progress-bar'
            inital={{ width: 0 }}
            animate={{ width: progress + '%' }}
        >
            progress
        </motion.div>
    )
}

export default ProgressBar;