import React, { Component } from "react";
import DrawPitch from "../DrawPitch";
import { Toolbar, ToolbarGroup } from "material-ui/Toolbar";
import MenuItem from "material-ui/MenuItem";
import DropDownMenu from "material-ui/DropDownMenu";
import pos from "../../Positions.json";
import player from "../../PlayerData.json";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

class DreamTeam extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      open: false,
      open2: false,
      posX: "",
      posY: ""
    };
  }

  componentDidMount() {
    DrawPitch();
    this.DrawFormation(this.state.value);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen2 = () => {
    this.setState({ open2: true });
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };

  switchFormation = (event, index, value) => {
    this.setState({
      value
    });
    this.DrawFormation(value);
  };

  onCardClick = event => {
    var clickX = event.clientX;
    var clickY = event.clientY;

    if (
      clickX > pos[this.state.value].pos1W + 3 &&
      clickX < pos[this.state.value].pos1W + 93 &&
      clickY > pos[this.state.value].pos1H + 70 &&
      clickY < pos[this.state.value].pos1H + 190
    ) {
      this.coordinates(1);
      this.handleOpen();
    } else if (
      clickX > pos[this.state.value].pos2W + 3 &&
      clickX < pos[this.state.value].pos2W + 93 &&
      clickY > pos[this.state.value].pos2H + 70 &&
      clickY < pos[this.state.value].pos2H + 190
    ) {
      this.coordinates(2);
      this.handleOpen();
    } else if (
      clickX > pos[this.state.value].pos3W + 3 &&
      clickX < pos[this.state.value].pos3W + 93 &&
      clickY > pos[this.state.value].pos3H + 70 &&
      clickY < pos[this.state.value].pos3H + 190
    ) {
      this.coordinates(3);
      this.handleOpen();
    } else if (
      clickX > pos[this.state.value].pos4W + 3 &&
      clickX < pos[this.state.value].pos4W + 93 &&
      clickY > pos[this.state.value].pos4H + 70 &&
      clickY < pos[this.state.value].pos4H + 190
    ) {
      this.coordinates(4);
      this.handleOpen();
    } else if (
      clickX > pos[this.state.value].pos5W + 3 &&
      clickX < pos[this.state.value].pos5W + 93 &&
      clickY > pos[this.state.value].pos5H + 70 &&
      clickY < pos[this.state.value].pos5H + 190
    ) {
      this.coordinates(5);
      this.handleOpen();
    } else if (
      clickX > pos[this.state.value].pos6W + 3 &&
      clickX < pos[this.state.value].pos6W + 93 &&
      clickY > pos[this.state.value].pos6H + 70 &&
      clickY < pos[this.state.value].pos6H + 190
    ) {
      this.coordinates(6);
      this.handleOpen();
    } else if (
      clickX > pos[this.state.value].pos7W + 3 &&
      clickX < pos[this.state.value].pos7W + 93 &&
      clickY > pos[this.state.value].pos7H + 70 &&
      clickY < pos[this.state.value].pos7H + 190
    ) {
      this.coordinates(7);
      this.handleOpen();
    } else if (
      clickX > pos[this.state.value].pos8W + 3 &&
      clickX < pos[this.state.value].pos8W + 93 &&
      clickY > pos[this.state.value].pos8H + 70 &&
      clickY < pos[this.state.value].pos8H + 190
    ) {
      this.coordinates(8);
      this.handleOpen();
    } else if (
      clickX > pos[this.state.value].pos9W + 3 &&
      clickX < pos[this.state.value].pos9W + 93 &&
      clickY > pos[this.state.value].pos9H + 70 &&
      clickY < pos[this.state.value].pos9H + 190
    ) {
      this.coordinates(9);
      this.handleOpen();
    } else if (
      clickX > pos[this.state.value].pos10W + 3 &&
      clickX < pos[this.state.value].pos10W + 93 &&
      clickY > pos[this.state.value].pos10H + 70 &&
      clickY < pos[this.state.value].pos10H + 190
    ) {
      this.coordinates(10);
      this.handleOpen();
    } else if (
      clickX > pos[this.state.value].pos11W + 3 &&
      clickX < pos[this.state.value].pos11W + 93 &&
      clickY > pos[this.state.value].pos11H + 70 &&
      clickY < pos[this.state.value].pos11H + 190
    ) {
      this.coordinates(11);
      this.handleOpen();
    }
  };

  coordinates = numb => {
    if (numb === 1) {
      this.setState({
        posX: pos[this.state.value].pos1W,
        posY: pos[this.state.value].pos1H
      });
    } else if (numb === 2) {
      this.setState({
        posX: pos[this.state.value].pos2W,
        posY: pos[this.state.value].pos2H
      });
    } else if (numb === 3) {
      this.setState({
        posX: pos[this.state.value].pos3W,
        posY: pos[this.state.value].pos3H
      });
    } else if (numb === 4) {
      this.setState({
        posX: pos[this.state.value].pos4W,
        posY: pos[this.state.value].pos4H
      });
    } else if (numb === 5) {
      this.setState({
        posX: pos[this.state.value].pos5W,
        posY: pos[this.state.value].pos5H
      });
    } else if (numb === 6) {
      this.setState({
        posX: pos[this.state.value].pos6W,
        posY: pos[this.state.value].pos6H
      });
    } else if (numb === 7) {
      this.setState({
        posX: pos[this.state.value].pos7W,
        posY: pos[this.state.value].pos7H
      });
    } else if (numb === 8) {
      this.setState({
        posX: pos[this.state.value].pos8W,
        posY: pos[this.state.value].pos8H
      });
    } else if (numb === 9) {
      this.setState({
        posX: pos[this.state.value].pos9W,
        posY: pos[this.state.value].pos9H
      });
    } else if (numb === 10) {
      this.setState({
        posX: pos[this.state.value].pos10W,
        posY: pos[this.state.value].pos10H
      });
    } else if (numb === 11) {
      this.setState({
        posX: pos[this.state.value].pos11W,
        posY: pos[this.state.value].pos11H
      });
    }
  };
  changePicture(index) {
    this.handleClose();
    var canvas = document.getElementById("layer2");
    var c = canvas.getContext("2d");
    c.clearRect(this.state.posX, this.state.posY, 96, 124);
    c.font = "16pt Helvetica";
    c.textAlign = "center";
    c.fillStyle = "white";
    var image = new Image();
    image.src = player[index].Card;
    // save new img coords before next step
    image.onload = () => {
      c.drawImage(image, this.state.posX, this.state.posY, 96, 124);
      c.fillText(
        player[index].Lname,
        this.state.posX + 43,
        this.state.posY + 135
      );
    };
  }

  render() {
    const playerList = player.map((row, index) => (
      <ul onClick={() => this.changePicture(index)} key={index}>
        {row.Fname} {row.Lname}
      </ul>
    ));
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />
    ];
    const info = [
      <FlatButton label="Ok" primary={true} onClick={this.handleClose2} />
    ];
    return (
      <div>
        <div>
          <Dialog
            title="Player list"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          >
            {playerList}
          </Dialog>
        </div>
        <Toolbar
          style={{
            position: "absolute",
            width: 100,
            height: 60,
            right: 0,
            zIndex: 3
          }}
        >
          <ToolbarGroup firstChild={true}>
            <DropDownMenu
              value={this.state.value}
              onChange={this.switchFormation}
            >
              <MenuItem value={0} primaryText="4-4-2" />
              <MenuItem value={1} primaryText="4-3-3" />
              <MenuItem value={2} primaryText="3-4-3" />
              <MenuItem value={3} primaryText="5-3-2" />
            </DropDownMenu>
          </ToolbarGroup>
        </Toolbar>
        <div>
          <canvas id="layer1" style={{ position: "absolute", zIndex: 1 }} />
          <canvas id="layer2" style={{ position: "absolute", zIndex: 2 }} />
        </div>
        <div>
          <RaisedButton
            label="Info"
            backgroundColor="green"
            labelColor="white"
            style={{
              position: "absolute",
              width: 80,
              height: 60,
              right: 100,
              zIndex: 3
            }}
            onClick={this.handleOpen2}
          />
          <Dialog
            title="How to create your dream team"
            actions={info}
            modal={false}
            open={this.state.open2}
            onRequestClose={this.handleClose2}
            autoScrollBodyContent={true}
          >
            You can chooce formation on the top right. After that you can start
            choosing players by clicking the grey cards. It will open a dialog
            where you can choose witch player you want. To choose player just
            click on the player name in the list. Note that if you change the
            formation it will reset your team.
          </Dialog>
        </div>
      </div>
    );
  }
  DrawFormation = value => {
    var canvas = document.getElementById("layer2");
    var c = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.font = "16pt Helvetica";
    c.textAlign = "center";
    var image = new Image();
    image.src = "cards/emptyCard.png";
    image.onload = () => {
      //GK
      c.drawImage(image, pos[value].pos1W, pos[value].pos1H, 96, 124);
      c.fillText("", pos[value].pos1W + 43, pos[value].pos1H + 135);

      c.drawImage(image, pos[value].pos2W, pos[value].pos2H, 96, 124);
      c.fillText("", pos[value].pos2W + 43, pos[value].pos2H + 135);

      c.drawImage(image, pos[value].pos3W, pos[value].pos3H, 96, 124);
      c.fillText("", pos[value].pos3W + 43, pos[value].pos3H + 135);

      c.drawImage(image, pos[value].pos4W, pos[value].pos4H, 96, 124);
      c.fillText("", pos[value].pos4W + 43, pos[value].pos4H + 135);

      c.drawImage(image, pos[value].pos5W, pos[value].pos5H, 96, 124);
      c.fillText("", pos[value].pos5W + 43, pos[value].pos5H + 135);

      c.drawImage(image, pos[value].pos6W, pos[value].pos6H, 96, 124);
      c.fillText("", pos[value].pos6W + 43, pos[value].pos6H + 135);

      c.drawImage(image, pos[value].pos7W, pos[value].pos7H, 96, 124);
      c.fillText("", pos[value].pos7W + 43, pos[value].pos7H + 135);

      c.drawImage(image, pos[value].pos8W, pos[value].pos8H, 96, 124);
      c.fillText("", pos[value].pos8W + 43, pos[value].pos8H + 135);

      c.drawImage(image, pos[value].pos9W, pos[value].pos9H, 96, 124);
      c.fillText("", pos[value].pos9W + 43, pos[value].pos9H + 135);

      c.drawImage(image, pos[value].pos10W, pos[value].pos10H, 96, 124);
      c.fillText("", pos[value].pos10W + 43, pos[value].pos10H + 135);

      c.drawImage(image, pos[value].pos11W, pos[value].pos11H, 96, 124);
      c.fillText("", pos[value].pos11W + 43, pos[value].pos11H + 135);
    };
    canvas.addEventListener("click", this.onCardClick);
  };
}

export default DreamTeam;
