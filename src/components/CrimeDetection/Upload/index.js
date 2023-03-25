
import { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabase = createClient("https://jijzprlwetjyagxihhwo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imppanpwcmx3ZXRqeWFneGloaHdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwODEwNzgsImV4cCI6MTk5MzY1NzA3OH0.mW1x1mpvKh65UtHn_mv5G5jlc0r6K0tHqZcbJQCgYKk");

const CDNURL = "https://jijzprlwetjyagxihhwo.supabase.co/storage/v1/object/public/videos/";

// https://ihbkpxujdzyblmtuzwdm.supabase.co/storage/v1/object/public/videos/testfile.mp4

function App() {
    const [videos, setVideos] = useState([]); // [video1, video2, video3]

    async function getVideos() {
        const { data, error } = await supabase
            .storage
            .from('videos') // videos/
            .list('')
        // data: [video1, video2, video3]
        // video1: "coopercodesvideo.mp4" CDNLINK.com/coopercodesvideo.mp4

        if (data !== null) {
            setVideos(data);
        } else {
            console.log(error);
            alert("Error grabbing files from Supabase");
        }
    }

    useEffect(() => {
        getVideos();
    }, []);

    async function uploadFile(e) {
        const videoFile = e.target.files[0];
        console.log("Upload!");

        const { error } = await supabase.storage
            .from('videos')
            .upload(uuidv4() + ".mp4", videoFile) // uuidv4() => ASDFASDFASDASFASDF.mp4

        if (error) {
            console.log(error);
            alert("Error uploading file to Supabase");
        }

        getVideos();
    }

    console.log(videos);

    return (
        <Container className='mt-5 flex items-center justify-center' style={{ width: "700px" }}>
            <Form.Group className="mb-3 mt-3">
                <Form.Label>Upload your video here!</Form.Label>
                <Form.Control type="file" accept="video/mp4" onChange={(e) => uploadFile(e)} />
            </Form.Group>

            <Row xs={1} className="g-4">
                {videos.map((video) => {
                    console.log(video);
                    if (video.name === ".emptyFolderPlaceholder") return null;

                    return (
                        <Col>
                            <Card>
                                <video height="380px" controls>
                                    <source src={CDNURL + video.name} type="video/mp4" />
                                </video>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}

export default App;