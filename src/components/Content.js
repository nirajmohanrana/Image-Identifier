import React, { useEffect, useRef, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { motion } from "framer-motion";
import "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

const Content = () => {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  const imageRef = useRef();
  const textInputRef = useRef();
  const fileInputRef = useRef();

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    } else {
      setImageURL(null);
    }
  };

  const identify = async () => {
    textInputRef.current.value = "";
    const results = await model.classify(imageRef.current, 5);
    console.log(results);
    setResults(results);
  };

  const handleOnChange = (e) => {
    setImageURL(e.target.value);
    setResults([]);
  };

  const triggerUpload = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    loadModel();
  }, []);

  useEffect(() => {
    if (imageURL) {
      setHistory([imageURL, ...history]);
    }
  }, [imageURL]);

  const constraints = {
    top: -5,
    left: -10,
    right: 10,
    bottom: 10,
  };

  return (
    <>
      <Container fluid className="w-60 m-5">
        <Row>
          <Col className="text-center">
            <div>
              <input
                type="file"
                accept="image/*"
                capture="camera"
                className="d-none"
                onChange={uploadImage}
                ref={fileInputRef}
              />
              <InputGroup>
                <Form.Control
                  placeholder="Paste Image URL"
                  aria-label="Add URL"
                  ref={textInputRef}
                  onChange={handleOnChange}
                />
                <Button disabled variant="outline-light">
                  OR
                </Button>
                <Button variant="outline-light" onClick={triggerUpload}>
                  Upload Image
                </Button>
              </InputGroup>
            </div>
            {imageURL && (
              <>
                <div
                  className="d-flex align-items-center justify-content-center w-100"
                  style={{ height: 350 }}
                >
                  <div
                    style={{
                      width: 400,
                      height: 300,
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                  >
                    <motion.img
                      src={imageURL}
                      whileHover={{ scale: 1.1 }}
                      alt="Upload Preview"
                      className="h-100"
                      style={{ borderRadius: "10px" }}
                      crossOrigin="anonymous"
                      ref={imageRef}
                    />
                  </div>
                </div>
                <Button variant="danger" size="sm" onClick={identify}>
                  IDENTIFY IMAGE
                </Button>
              </>
            )}
          </Col>
          <Col className="">
            {isModelLoading ? (
              <>
                <h4 className="text-white">Model is loading:</h4>
                <motion.div
                  animate={{
                    scale: [1, 1.4, 0.8, 1.2, 0.4, 1, 1.1, 0],
                    borderRadius: [
                      "20%",
                      "10%",
                      "50%",
                      "20%",
                      "50%",
                      "10%",
                      "20%",
                      "30%",
                    ],
                    rotate: [0, 180, -90, 270, 0, -360, 45, 0],
                    background: [
                      "rgba(72, 202, 228, 1) 0%,",
                      "rgba(2, 62, 138, 1) 100%",
                      "rgba(72, 202, 228, 1) 0%,",
                      "rgba(2, 62, 138, 1) 100%",
                      "rgba(72, 202, 228, 1) 0%,",
                      "rgba(2, 62, 138, 1) 100%",
                      "rgba(72, 202, 228, 1) 0%,",
                      "rgba(2, 62, 138, 1) 100%",
                    ],
                    border: "2px solid white",
                  }}
                  initial={{}}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                  }}
                  style={{
                    height: "30px",
                    width: "30px",
                    background: "#FFF",
                  }}
                ></motion.div>
              </>
            ) : (
              <>
                <h4 className="text-white">Results:</h4>
                {results.length > 0 && (
                  <div>
                    {results.map((result, index) => {
                      return (
                        <motion.div
                          drag
                          dragConstraints={constraints}
                          animate={{ x: 0, scale: 1 }}
                          initial={{ x: "-50%", scale: 0.1 }}
                          transition={{
                            ease: "easeInOut",
                          }}
                        >
                          <Card
                            border="primary"
                            bg="transparent"
                            style={{ width: "18rem" }}
                            className="mb-2"
                          >
                            {index === 0 && (
                              <Card.Header className="text-white fw-bolder">
                                <Badge pill bg="danger gradient">
                                  Best Guess
                                </Badge>
                              </Card.Header>
                            )}

                            <Card.Body>
                              <Card.Title className="text-uppercase text-white fw-bold">
                                {result.className}
                              </Card.Title>
                              <Card.Text className=" text-light fw-light">
                                Confidenece Level:{" "}
                                {(result.probability * 100).toFixed(2)}%
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Content;
