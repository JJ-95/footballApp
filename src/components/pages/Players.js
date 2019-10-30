import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter
} from "material-ui/Table";
import { Link } from "react-router-dom";
import PlayerData from "../../PlayerData.json";

class PlayerTable extends React.Component {
  constructor() {
    super();
    this.state = {
      stripedRows: true,
      showCheckboxes: false,
      id: ""
    };
  }

  render() {
    return (
      <div>
        <Table style={{ textAlign: "center" }}>
          <TableHeader displaySelectAll={this.state.showCheckboxes}>
            <TableRow>
              <TableHeaderColumn
                colSpan="3"
                tooltip="Super Header"
                style={{ textAlign: "center" }}
              >
                Players
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Position">Position</TableHeaderColumn>
              <TableHeaderColumn tooltip="Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Nationality">
                Nationality
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Club">Club</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            stripedRows={this.state.stripedRows}
            displayRowCheckbox={this.state.showCheckboxes}
          >
            {PlayerData.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.Position}</TableRowColumn>
                <TableRowColumn>
                  <Link to={`/players/${index}/${row.Lname}`}>
                    {row.Fname} {row.Lname}
                  </Link>
                </TableRowColumn>

                <TableRowColumn>{row.Nationality}</TableRowColumn>
                <TableRowColumn>{row.Club}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableRowColumn>Position</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Nationality</TableRowColumn>
              <TableRowColumn>Club</TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

export default PlayerTable;
