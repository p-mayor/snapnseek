import React, { Component } from "react"
import { Feed, Card, Image, Button, Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import UserImage from "./UserImage"
import moment from "moment"

export class HomeTargetItem extends Component {
    render() {
        let neighborhood
        switch (this.props.target.neighborhood) {
            case "A":
                neighborhood = "NorthWest Indy"
                break
            case "B":
                neighborhood = "NorthEast Indy"
                break
            case "C":
                neighborhood = "SouthWest Indy"
                break
            case "D":
                neighborhood = "SouthEast Indy"
                break
            default:
                neighborhood = "NorthWest Indy"
        }

        return (
            <Feed className="feedstyle">
                <br />
                <UserImage userId={this.props.target.userId} size="mini" />
                <Feed.User style={{ color: "black" }}>
                    {this.props.displayName}
                </Feed.User>
                <Feed.Date>
                    {moment(this.props.target.createdAt).fromNow()}
                </Feed.Date>

                <Feed.Content style={{ paddingBottom: "10px" }}>
                    <Feed.Summary style={{ paddingBottom: "5px" }} />
                    <Card style={{ margin: "auto", width: "90%" }}>
                        <Card.Header className="break-word">
                            {this.props.target.title}
                        </Card.Header>
                        <Card.Content>
                            <Image src={this.props.target.pictureURL} />
                            <Feed.Extra className="break-word">
                                {this.props.target.text}
                            </Feed.Extra>
                        </Card.Content>
                        <Card.Content>
                            <Feed.Extra className="break-word">
                                Neighborhood: {neighborhood}
                            </Feed.Extra>
                        </Card.Content>
                        <Card.Content extra style={{ margin: "auto" }}>
                            <Link to={`targets/${this.props.target.id}`}>
                                <Button animated compact positive>
                                    <Button.Content visible>
                                        Check it Out
                                    </Button.Content>
                                    <Button.Content hidden>
                                        <Icon name="arrow right" />
                                    </Button.Content>
                                </Button>
                            </Link>
                        </Card.Content>
                    </Card>
                </Feed.Content>
            </Feed>
        )
    }
}

export default connect(
    ({ auth }) => ({
        isLoading: auth.loginLoading,
        err: auth.loginError,
        token: auth.login.token,
        userId: auth.login.id
    }),
    null
)(HomeTargetItem)
