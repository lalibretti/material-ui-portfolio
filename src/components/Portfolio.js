import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
// import project2 from "../images/html-css-javascript.jpg";
// import project3 from "../images/javascript-fullstack.jpg";
// import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#234",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Search API: Find a Giphy",
    description: `A giphy search tool. Utilizing the giphy search API to display results from a search query. Styling with tailwind. `,
    image: project1, link:'https://lalibretti.github.io/search-api/'
  },
  {
    name: "Stock Trading App ",
    description: `Search for stock value and track value of stocks in a portfolio. Powered by React, Node.js, sequelize, database by mySQL`,
    image: project6, link:"https://fierce-refuge-74060.herokuapp.com/"
  },
  {
    name: "Quiz Creator",
    description: `Create a question sorted by category, add answers for each question. Powered by React, Node.js, sequelize, database by mySQL `,
    image: project6, link:"https://infinite-tundra-04126.herokuapp.com/"
  },
  {
    name: "Task List",
    description: `Create, add/delete and sort tasks in a list. Created with React, styling with Tailwind.`,
    image: project5, link: 'https://github.com/lalibretti/task-list'
  }
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Share
                </Button> */}
                <Button size="small" color="primary">
                  Live Demo {project.link}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
