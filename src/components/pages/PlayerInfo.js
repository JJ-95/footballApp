import React from "react";
import PlayerData from "../../PlayerData.json";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Card, CardMedia, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { NavLink } from "react-router-dom";

const PlayerInfo = ({ match }) => {
  const player = PlayerData[match.params.id];
  return (
    <MuiThemeProvider>
      <Card style={{ width: 300, height: 500, position: "absolute", right: 0 }}>
        <CardMedia>
          <img alt="playerImg" src={player.Image} />
        </CardMedia>
        <CardText>
          Name: {player.Fname} {player.Lname}
        </CardText>
        <CardText>Number: {player.Number}</CardText>
        <CardText>Position: {player.Position}</CardText>
        <CardText>Nationality: {player.Nationality}</CardText>
        <CardText>Club: {player.Club}</CardText>
      </Card>

      <iframe
        src={player.Video}
        style={{ width: 800, height: 500, position: "absolute", right: 350 }}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
      <NavLink to="/players">
        <RaisedButton label="Back" />
      </NavLink>
    </MuiThemeProvider>
  );
};

export default PlayerInfo;
