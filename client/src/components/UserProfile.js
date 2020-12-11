import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import UserContext from "../context/UserContext";
import API from "../utils/API";

//Nav
import Navbar from "./Navbar";
import { Paper, Button } from "@material-ui/core";

// Job title icons
import defaultIcon from "../images/default.png";
import developerIcon from "../images/developer.png";
import engineerIcon from "../images/engineer.png";
import itIcon from "../images/IT.png";
import securityIcon from "../images/security.png";

const useStyles = makeStyles({
  cardStyles: {
    margin: "15px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#edf6f9",
    borderRadius: "15px",
    border: "solid 1.5px",
  },
  postStyles: {
    backgroundColor: "#fff",
    padding: "15px",
    margin: "10px",
    borderRadius: "25px",
    border: "solid 1.5px",
  },
  listItem: {
    listStyleType: "none",
  },
  span: {
    backgroundColor: "#db7500",
    borderRadius: "5px",
    color: "#fff",
    padding: "1px",
  },
  jobIcon: {
    width: "40%",
    height: "75%",
  },
});

export default function UserProfile(params) {
  console.log(params.location.pathname.slice(13));
  let userID = params.location.pathname.slice(13);
  console.log(userID);
  const [post, setPost] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const classes = useStyles();

  function loadUsers() {
    API.getUser(userID)
      .then((res) => {
        console.log(res);
        setPost(res.data.posts);
        setUserInfo(res.data)
        console.log(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  
  
  //let newUser = loadUsers();
  //console.log(newUser);
  console.log(post);
  console.log(userInfo)
  let githubLink = `https://github.com/${userInfo.github}`;

  useEffect(() => {
    loadUsers();
  }, []);

  const { userData } = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} sm={6}>
            <Card className={classes.cardStyles} style={{ width: "90%" }}>
              <CardContent>
                <Typography variant="h1" class="coders-font">
                  <i class="fas fa-id-badge"></i> {userInfo.userName}
                </Typography>
                <br></br>

                <img
                  alt="user-icon"
                  class="profile-picture"
                  className={classes.jobIcon}
                  src={
                    userInfo.jobTitle === "developer" ||
                    userInfo.jobTitle === "Developer"
                      ? developerIcon
                      : userInfo.jobTitle === "engineer" ||
                        userInfo.jobTitle === "Engineer"
                      ? engineerIcon
                      : userInfo.jobTitle === "IT" ||
                        userInfo.jobTitle === "it"
                      ? itIcon
                      : userInfo.jobTitle === "security" ||
                        userInfo.jobTitle === "Security"
                      ? securityIcon
                      : defaultIcon
                  }
                ></img>
              </CardContent>
            </Card>
          </Grid>

          {/* User's profile information with links to websites */}
          <Grid item xs={12} sm={6}>
            <Card
              className={classes.cardStyles}
              style={{ height: 350, width: "90%" }}
            >
              <CardContent>
                <Typography variant="h4">
                  {userInfo.firstName} {userInfo.lastName}
                </Typography>
                <Typography variant="h6">{userInfo.jobTitle}</Typography>
                <br></br>
                <Typography>Contact Me:</Typography>
                <Typography variant="h6">
                  <Link href={githubLink}>
                    <i class="fab fa-github-square"></i> GitHub:{" "}
                    {userInfo.reduceRightgithub}
                  </Link>
                  <br></br>
                  <Link href={userInfo.linkedin}>
                    <i class="fab fa-linkedin"></i> Linkedin:{" "}
                    {userInfo.linkedin}
                  </Link>
                  <br></br>
                  <Link href="#">
                    <i class="fas fa-envelope-square"></i> Email:{" "}
                    {userInfo.email}
                  </Link>
                  <br></br>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card className={classes.cardStyles} style={{ width: "90%" }}>
              <CardContent>
                <div>
                  <Typography variant="h1" class="coders-font">
                    @{userInfo.userName}'s
                    <br></br>
                    Corner:
                  </Typography>
                  {post.map((p) => (
                    <div className={classes.postStyles} key={p._id}>
                      <div className={classes.span}>
                        <i class="fas fa-code"></i>
                      </div>
                      <h3>{p.post}</h3>
                      <p>{p.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}