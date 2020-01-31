import React, {Component} from "react";
import Display from "../design/Display";
import Settings from "../design/Settings";
import { storage } from "../../config/firebaseConfig"

class Dashboard extends Component {

    state = {
        tshirtColor: 'black',
        upperText: '',
        lowerText: '',
        memeImg: '',
        url: ''
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

    handleImageUpload = (event) =>{
        if (event.target.files[0]){
            const image = (event.target.files[0])
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
            (snapshot) => {
                console.log(snapshot);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    this.setState({url})
                })
            }
            )
        }
    }

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
                            uploadImage={this.handleImageUpload}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
