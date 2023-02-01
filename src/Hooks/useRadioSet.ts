import { useState } from "react";

export const useRadioSet = () => {
    const [volume, setVolume] = useState(0.5);
    const [url, setUrl] = useState<string>('https://streaming01.shockmedia.com.ar:10352/stream');
    //const audio = useRef<HTMLAudioElement>(null);
    const [elementAudio, setElementAudio] = useState<HTMLAudioElement | null | React.RefObject<HTMLAudioElement>>(null);


    return {
        volume, url, elementAudio,
        setVolume, setUrl, setElementAudio
    }
}
