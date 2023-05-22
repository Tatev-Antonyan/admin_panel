import { useParams } from "react-router";
import { useState } from "react";

export const UserDetails = ({data}) => {
    const { id } = useParams();

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const onClickHandler = () => {
        setComments((comments) => [...comments, comment]);
    };
    const onChangeHandler = (e) => {
        setComment(e.target.value);
    };


    return(
        <div>
             {data.filter((i) => i.id === +id).map((i, k) => {
                    return(
                        <div key={k} className={'user_details'}>
                            <h1 style={{textAlign: 'center'}}>User Details</h1>
                            <p><b>Name: &nbsp;</b> {i.name}</p>
                            <p><b>Email: &nbsp;</b> {i.email}</p>
                            <p><b>Gender: &nbsp;</b> {i.gender}</p>
                            <p><b>Status: &nbsp;</b> {i.status}</p>
                        </div>
                )
                })
                }  

                <div className='main-container'>
                <div className="comment-flexbox">
                <h3 className="comment-text">Comment</h3>
                <textarea
                    value={comment}
                    onChange={onChangeHandler}
                    className="input-box"
                    />
                <button onClick={onClickHandler} className="comment-button">
                    Submit
                </button>
                 </div>
                    {comments.map((text) => (
                        <div className="comment-container">{text}</div>
                    ))}

                </div>     
        </div>
    )
}