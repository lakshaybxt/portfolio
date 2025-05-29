import {useState, useEffect} from 'react'

const TextChager = () => {

    const texts = ["Hi, I'm Lakshay", "Hi, I'm Lakshay", "Hi, I'm Lakshay"]
    const [currentText, setCurrentText] = useState("");
    const [endValue, setendValue] = useState(true);
    const [isForward, setIsForwards] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(texts[index].substring(0, endValue));
            if(isForward) {
                setendValue(prev => prev + 1);
            } else {
                setendValue(prev => prev - 1);
            }
            if(endValue > texts[index].length+10) {
                setIsForwards(false)
            }
            if(endValue < 2.1) {
                setIsForwards(true)
                setIndex(prev => prev&texts.length)
            }
        }, 200);

        return () => clearInterval(intervalId)
    }, [endValue, isForward, index, texts])
  return (
    <div className='transition ease duration-300'>{currentText}</div>
  )
}

export default TextChager