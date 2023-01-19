import React from 'react';
import './Feed.css'
// import feedImg from './resources/test.jpg';
function Feed(props) {

    let{userNo,feedNo,feedContent,feedAt}=props;

    return (
        <div className="te">
            <div className="a">
                <p>피드시간 : {feedAt}</p>
            </div>

            <div className="b">
                <p>피드번호 : {feedNo}</p>
                {/*<img src={feedImg} alt="feedImg"/>*/}

            </div>
            <div className="f">
                <span className="c">
                    <span>이름 : {userNo}</span>
                </span>

                <span className="d">
                    <button style={{textAlign:"right"}}>📢</button>
                    <span>♡</span>
                </span>
            </div>
            <div className="e">
                <p>피드내용 : {feedContent}</p>
            </div>
        </div>
    );
}

export default Feed;