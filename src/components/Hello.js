import React from "react";
import axios from "axios";
import { Buffer } from "buffer";

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
        
        const url_base = "aHR0cDovL3N0cmVhbWluZy5udHR0ZC1jY3MuY29tOjgwODAvdGVzdC9IZWxsbwo";
        let url = Buffer.from(url_base, 'base64').toString();
        axios
            .get(url)
            .then(res => this.setState({message: res.data.message}))
            .catch(err => alert(err));
    }
    
    render() {
        return <p>{this.state.message}</p>;
    }
}

export default Hello;
