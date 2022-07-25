import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLastDrumPadTouched } from '../../reducers/drum'
import './styles.scss'

function DrumPad({ name, sound, alternativeSound }) {
    const [audioSrc, setAudioSrc] = useState(sound)

    const audioRef = useRef()

    const bank = useSelector((state) => state.drum.bank)
    const volume = useSelector((state) => state.drum.volume)
    const powered = useSelector((state) => state.drum.powered)

    const dispatch = useDispatch()


    useEffect(() => {
        setAudioSrc(bank === 'guitar' ? sound : alternativeSound)
    }, [bank])

    useEffect(() => {
        audioRef.current.load()
    }, [audioSrc])

    useEffect(() => {
        audioRef.current.volume = volume
    }, [volume])

    function handleClick() {
        dispatch(changeLastDrumPadTouched(name))
        
        function playAudio() {
            if (powered)
                audioRef.current.play()
        }

        playAudio()
    }


    return (
        <div className="drum-pad" onClick={handleClick}>
            {name}

            <audio hidden ref={audioRef}>
                <source src={audioSrc} type="audio/mp3" />
            </audio>
        </div>
    )
}

export default DrumPad