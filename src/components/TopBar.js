import React from "react";
import { motion } from "framer-motion";
import Logo from "../res/Logo.png";
import Image from "../res/Image.png";
import Identifier from "../res/Identifier.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBar = () => {
  const constraints = {
    top: -5,
    left: -10,
    right: 10,
    bottom: 10,
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="text-center">
            <motion.div
              style={{ width: "full", padding: 5 }}
              drag
              dragConstraints={constraints}
              dragElastic={0.8}
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={Logo}
                height={80}
                drag
                dragConstraints={constraints}
                dragElastic={0.8}
                animate={{
                  x: "30%",
                  y: "0%",
                }}
                transition={{
                  type: "spring",
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={Image}
                height={15}
                drag
                dragConstraints={constraints}
                dragElastic={0.8}
                animate={{
                  x: "85%",
                  y: "-100%",
                  rotate: 0,
                }}
                initial={{
                  rotate: 60,
                }}
                transition={{
                  type: "spring",
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={Identifier}
                height={30}
                drag
                dragConstraints={constraints}
                dragElastic={0.8}
                animate={{
                  x: "-5%",
                  y: "30%",
                  rotate: 0,
                }}
                initial={{
                  rotate: -10,
                }}
                transition={{
                  type: "spring",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <motion.div drag dragConstraints={constraints} dragElastic={0.8}>
              <Link to="/about" className="text-decoration-none text-white">
                <Button className="bg-danger bg-gradient">About</Button>
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopBar;
