import React, {Component} from "react";
import Display from "../design/Display";
import Settings from "../design/Settings";

class Dashboard extends Component {

    state = {
        tshirtColor: 'black',
        upperText: 'This is Upper text',
        lowerText: 'This is Lower text',
        memeImg: ''
    }

    handleTshirtColor = (event) => (
        this.setState({
            tshirtColor: event.target.id
        })
    )

    handleUpperText = (event) => (
        this.setState({
            upperText: event.target.value
        })
    )

    handleLowerText = (event) => (
        this.setState({
            lowerText: event.target.value
        })
    )

    render() {
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
                        <Display display={this.state}/>
                    </div>
                    <div className="col-lg-4">
                        <Settings
                            color={this.handleTshirtColor}
                            upperText={this.handleUpperText}
                            lowerText={this.handleLowerText}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
