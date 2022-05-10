import React from "react";
import "./Api.css";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function MovieCard(props) {
  return (
    <div className="paper-grid">
      <Card className="card">
        <CardContent>
          <div className="img-grid">
            <div className="arrow-grid">
              <Button>
                <ArrowDropUpIcon />
              </Button>
              <div style={{ fontSize: "25px" }}>
                {props.movieInfo.totalVoted}
              </div>
              <Button>
                <ArrowDropDownIcon />
              </Button>
              <Typography style={{ fontSize: "16px" }}>
                <b>Votes</b>
              </Typography>
            </div>
            <img
              src={props.movieInfo.poster}
              alt="movie poster"
              className="grid-img"
            />
            <div>
              <Typography className="title">
                <b>{props.movieInfo.title}</b>
              </Typography>
              <Typography>
                <b>Genre</b>: {props.movieInfo.genre}
              </Typography>
              <Typography>
                <b>Language:</b>
                {props.movieInfo.language}
              </Typography>
              <Typography>
                <b>Starring:</b> {props.movieInfo.stars}
              </Typography>
              <Typography style={{ color: "skyblue" }}>
                {props.movieInfo.pageViews} views | Votedby{" "}
                {props.movieInfo.totalVoted} people
              </Typography>
            </div>
          </div>
          <div className="watchbutton">
            <Button variant="contained" color="primary" className="watchbutton">
              Watch Trailer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default MovieCard;
