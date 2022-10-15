import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Profile from "../res/Profile.jfif";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion, useMotionValue, useTransform } from "framer-motion";

const About = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(y, [-100, 100], [-30, 30]);

  return (
    <>
      <div>
        <motion.div
          style={{
            perspective: 2000,
          }}
        >
          <motion.div
            className="mx-auto position-relative"
            style={{
              width: "15rem",
              height: "20rem",
              marginTop: "100px",
              x,
              y,
              rotateX,
              rotateY,
              z: 100,
              border: " 2px groove #ff1f00",
              borderRadius: "10px",
            }}
            drag
            dragElastic={0.16}
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            whileTap={{ cursor: "grabbing" }}
          >
            <div
              className="position-absolute w-100 h-100"
              style={{
                background:
                  "rgb(34,193,195) linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
                overflow: "hidden",
                borderRadius: "10px",
              }}
            >
              <div
                className="position-absolute bg-white rounded-circle"
                style={{
                  width: "300px",
                  height: "300px",
                  top: "-80px",
                  right: "-120px",
                }}
              />
            </div>

            <motion.img
              src={Profile}
              className="position-absolute bg-white rounded-circle"
              alt="Profile"
              style={{
                width: "100px",
                height: "100px",
                top: "10%",
                left: "30%",
                boxShadow: "-1px 10px 5px 0px rgba(0,0,0,0.75)",
                x,
                y,
                rotateX,
                rotateY,
                zIndex: 1000,
              }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            />
            <Card.Body
              className="position-absolute text-center"
              style={{
                top: "45%",
                left: "10%",
              }}
            >
              <motion.div
                style={{
                  x,
                  y,
                  rotateX,
                  rotateY,
                  // rotate: "-25deg",
                  zIndex: 1000,
                }}
              >
                <Card.Title>
                  <motion.p className="fw-bolder">Niraj Rana</motion.p>
                </Card.Title>
                <Card.Subtitle className="text-primary">
                  Mantra Prashansak
                </Card.Subtitle>
                <Card.Text className="">Doing some random stuffs</Card.Text>
                <a
                  href="https://github.com/nirajmohanrana"
                  className="text-decoration-none text-secondary fs-3 mx-2"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/niraj-rana-2a0384193/"
                  className="text-decoration-none text-primary fs-3 mx-2"
                >
                  <BsLinkedin />
                </a>
              </motion.div>
            </Card.Body>
          </motion.div>
        </motion.div>
        <Card className="mx-auto text-center mt-5" style={{ width: "45rem" }}>
          <Link to="/">
            <Button size="sm" variant="outline-primary" className="mt-3">
              Home
            </Button>
          </Link>
          <Card.Body>
            <Card.Title className="font-monospace fs-6">
              Logo Image Credits:
            </Card.Title>

            <div className="d-flex justify-content-center font-monospace fs-6">
              <p className="mx-2">
                Dog:{" "}
                <a
                  className=""
                  href="https://pixabay.com/users/huoadg5888-8934889/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3715733"
                >
                  huoadg5888
                </a>
              </p>
              <p className="mx-2">
                Cat:{" "}
                <a
                  className=""
                  href="https://pixabay.com/users/susannp4-1777190/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2083492"
                >
                  Susann Mielke
                </a>
              </p>
              <p className="mx-2">
                Parrot:{" "}
                <a
                  className=""
                  href="https://pixabay.com/users/amyirizarry02-1905330/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4887736"
                >
                  Amy Irizarry
                </a>
              </p>
              <p className="mx-2">
                Duck:{" "}
                <a
                  className=""
                  href="https://pixabay.com/users/wfranz-7477911/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6568845"
                >
                  Franz W.
                </a>
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default About;
