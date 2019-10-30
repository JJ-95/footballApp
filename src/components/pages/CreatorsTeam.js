import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DrawPitch from "../DrawPitch";
import player from "../../PlayerData.json";
import pos from "../../Positions.json";

class CreatorsTeam extends Component {
  componentDidMount() {
    DrawPitch();
    this.drawCards();
  }

  constructor() {
    super();
    this.image = null;
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <canvas id="layer1" />
        </div>
      </MuiThemeProvider>
    );
  }

  drawCards() {
    var canvas = document.getElementById("layer1");
    var c = canvas.getContext("2d");
    c.font = "16pt Helvetica";
    c.textAlign = "center";
    var image = new Image();
    image.src = player[0].Card;
    image.onload = () => {
      c.drawImage(image, pos[1].pos1W, pos[1].pos1H, 96, 124);
      c.fillText(player[0].Lname, pos[1].pos1W + 43, pos[1].pos1H + 135);
    };
    var image2 = new Image();
    image2.src = player[4].Card;
    image2.onload = () => {
      c.drawImage(image2, pos[1].pos2W, pos[1].pos2H, 96, 124);
      c.fillText(player[4].Lname, pos[1].pos2W + 43, pos[1].pos2H + 135);
    };
    var image3 = new Image();
    image3.src = player[1].Card;
    image3.onload = () => {
      c.drawImage(image3, pos[1].pos3W, pos[1].pos3H, 96, 124);
      c.fillText(player[1].Lname, pos[1].pos3W + 43, pos[1].pos3H + 135);
    };
    var image4 = new Image();
    image4.src = player[2].Card;
    image4.onload = () => {
      c.drawImage(image4, pos[1].pos4W, pos[1].pos4H, 96, 124);
      c.fillText(player[2].Lname, pos[1].pos4W + 43, pos[1].pos4H + 135);
    };
    var image5 = new Image();
    image5.src = player[3].Card;
    image5.onload = () => {
      c.drawImage(image5, pos[1].pos5W, pos[1].pos5H, 96, 124);
      c.fillText(player[3].Lname, pos[1].pos5W + 43, pos[1].pos5H + 135);
    };
    var image6 = new Image();
    image6.src = player[7].Card;
    image6.onload = () => {
      c.drawImage(image6, pos[1].pos6W, pos[1].pos6H, 96, 124);
      c.fillText(player[7].Lname, pos[1].pos6W + 43, pos[1].pos6H + 135);
    };
    var image7 = new Image();
    image7.src = player[8].Card;
    image7.onload = () => {
      c.drawImage(image7, pos[1].pos7W, pos[1].pos7H, 96, 124);
      c.fillText(player[8].Lname, pos[1].pos7W + 43, pos[1].pos7H + 135);
    };
    var image8 = new Image();
    image8.src = player[9].Card;
    image8.onload = () => {
      c.drawImage(image8, pos[1].pos8W, pos[1].pos8H, 96, 124);
      c.fillText(player[9].Lname, pos[1].pos8W + 43, pos[1].pos8H + 135);
    };
    var image9 = new Image();
    image9.src = player[12].Card;
    image9.onload = () => {
      c.drawImage(image9, pos[1].pos9W, pos[1].pos9H, 96, 124);
      c.fillText(player[12].Lname, pos[1].pos9W + 43, pos[1].pos9H + 135);
    };
    var image10 = new Image();
    image10.src = player[11].Card;
    image10.onload = () => {
      c.drawImage(image10, pos[1].pos10W, pos[1].pos10H, 96, 124);
      c.fillText(player[11].Lname, pos[1].pos10W + 43, pos[1].pos10H + 135);
    };
    var image11 = new Image();
    image11.src = player[10].Card;
    image11.onload = () => {
      c.drawImage(image11, pos[1].pos11W, pos[1].pos11H, 96, 124);
      c.fillText(player[10].Lname, pos[1].pos11W + 43, pos[1].pos11H + 135);
    };
  }
}

export default CreatorsTeam;
