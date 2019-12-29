import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import CardHeader from "@material-ui/core/CardHeader";
import "./Login.css";
import { Link } from "react-router-dom";

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

export default class EventsList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card className="card">
        <CardActionArea component={Link} to={"/event/1"}>
          <CardHeader
            title={this.props.data.title}
            subheader={`Start Date:${new Date(
              this.props.data.startDate
            ).toLocaleDateString()} End Date: ${new Date(
              this.props.data.endDate
            ).toLocaleDateString()}`}
          />
          <CardMedia className="card-image" image={this.props.data.urlLogo} />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Buy the ticket
          </Button>
          <Button size="small" color="primary">
            Check more details about the event
          </Button>
        </CardActions> */}
      </Card>
    );
  }
}
