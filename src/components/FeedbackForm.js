import {useState} from 'react'

export default function FeebackForm() {
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (score < 5 && comment.length < 10) {
            alert("Please provide a valid comment")
        } else {
            setComment('')
            setScore('10')
        }
        return;
    }

    return (
        <div>			
        <form onSubmit={handleSubmit}>
            <h2>Feedback form</h2>
            <div>
                <label>Score: {score}✨</label>
                <input type='range' min="0"  max="10" 
                    value={score}
                    onChange={e => setScore(e.target.value)}
                />
            </div>
            <div>
                <label>Comment: </label>
                <textarea value={comment} onChange={e => setComment(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
	    </div>
    )
    
}