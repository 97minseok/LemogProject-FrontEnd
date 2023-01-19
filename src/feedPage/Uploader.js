import { useState } from 'react';
import "./uploader.css";
import axios from 'axios';
import {Button} from "react-bootstrap";
import preview_URL from './resources/test.jpg';

const Uploader = () => {

    const [image, setImage] = useState({
        image_file: "",
        preview_URL: "./resources/test.jpg",
    });

    let inputRef;

    const saveImage = (e) => {
        e.preventDefault();
        const fileReader = new FileReader();

        if(e.target.files[0]){
            fileReader.readAsDataURL(e.target.files[0])
        }
        fileReader.onload = () => {
            setImage(
                {
                    image_file: e.target.files[0],
                    preview_URL: fileReader.result
                }
            )
        }

    }

    const deleteImage = () => {
        setImage({
            image_file: "",
            preview_URL: "img/default_image.png",
        });
    }

    const sendImageToServer = async () => {
        if(image.image_file){
            const formData = new FormData()

            formData.append('file', image.image_file);

            await axios.post('/api/feed/upload', formData);
            alert("서버에 등록이 완료되었습니다!");
            setImage({
                image_file: "",
                preview_URL: "img/default_image.png",
            });
        }
        else{
            alert("사진을 등록하세요!")
        }
    }

    return (
        <div className="uploader-wrapper">
            <input type="file" accept="image/*"
                   onChange={saveImage}
                // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
                // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
                   onClick={(e)=>e.target.value = null}
                   ref={refParam => inputRef = refParam}
                   style={{ display: "none" }}
            />
            <div className="img-wrapper">
                <img src={image.preview_URL} />
            </div>

            <div className="upload-button">
                <Button type="primary" variant="contained" onClick={() => inputRef.click()}>
                    Preview
                </Button>
                <Button color="error" variant="contained" onClick={deleteImage}>
                    Delete
                </Button>
                <Button color="success" variant="contained" onClick={sendImageToServer}>
                    Upload
                </Button>
            </div>

        </div>
    );
}

export default Uploader;