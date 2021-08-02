import React from "react";
import axios from "axios";

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
        
        axios
            .get("http://streaming.ntttd-ccs.com:8080/test/Hello")
            .then(res => this.setState({message: res.data.message}))
            .catch(err => alert(err));
    }
    
    render() {
        return <p>{this.state.message}</p>;
    }
}

export default Hello;
