import { useState } from "react"
import axios from 'axios';

const QnA = () => {
    const [showAnswer, setShowAnswer] = useState(false)
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setShowAnswer(!showAnswer);

        if (!showAnswer) {
            setLoading(true);
            try {
                const response = await axios.post('http://127.0.0.1:5000/api/answer', { question: question });
                setAnswer(response.data.answer);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
    };

    return (
      <>
        {!showAnswer ? <main className="question">
            <header>Ask DapurGPT A Question</header>
            <input type="text" placeholder="What should I eat today?" onChange={e => setQuestion(e.target.value)}/>
            <button onClick={handleClick}>Go!</button>
        </main> : null}
        {showAnswer ? <div className="answer">
            <p>{loading ? "Generating response this will take a minute..." : answer}</p>
            <button onClick={handleClick}>Ask again.</button>
        </div> : null}
      </>
    );
  };
  
export default QnA;
