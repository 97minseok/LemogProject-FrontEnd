import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FeedReplyInsert from "./FeedReplyInsert";
import "./FeedReply.css"
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedDelete from "./FeedDelete";
import FeedDetail from "./FeedDetail";

function FeedReply({feedNo}) {
    // let feedNo = props.feedNo;

    const [show, setShow] = useState(false);
    return (
        <>
            <IconButton aria-label="add to favorites" onClick={() => setShow(true)}>
                <FavoriteIcon />댓글 {feedNo}
            </IconButton>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        댓글 입니다
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <FeedReplyInsert feedNo={feedNo}/>
                        {/*<FeedDetail Feed={Feed}></FeedDetail>*/}
                    </Modal.Body>
            </Modal>
        </>
    );
}

export default FeedReply;