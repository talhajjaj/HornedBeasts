import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ModelHornedbeats from './ModelHornedbeats';


class HornedBeast extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            click: 0
        }

    }

    clickFunc = () => {
        this.setState({
            click: this.state.click + 1
        })
    }
    
    decrease = () =>{
        this.setState({
            click: this.state.click - 1
        })
    }



    render() {
        return (
            <div style={{ textAlign: "center" }}>
                {/* <h2> {this.props.title} </h2>
                <p> {this.props.description} </p>
                <img src={this.props.image_url} alt={"alsa"} width={300} /> */}

                
                <Card style={{ width: '18rem', textAlign: "center" }}>
                    <Card.Img variant="top" src={this.props.image_url} alt={"alsa"} width={300} />
                    <Card.Body>
                        <Card.Title> {this.props.title} </Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            Number of Selects {this.state.click}
                        </Card.Text>
                        <ModelHornedbeats selectFun={this.clickFunc} decrease={this.decrease}  img_src={this.props.image_url} img_desc={this.props.description} img_title={this.props.title} />
                        {/* <Button onClick={this.clickFunc} variant="primary"> Select Item </Button> */}
                    </Card.Body>
                </Card>


            </div>
        )
    }
}


export default HornedBeast;