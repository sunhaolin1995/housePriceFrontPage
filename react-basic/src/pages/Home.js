import React, { Component } from "react";
import axios from "axios";
import HouseList from "../components/HouseList";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios
            .get("/api/houses")
            .then((response) => {
                this.setState({ data: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <h1>房源列表</h1>
                <HouseList data={data} />
            </div>
        );
    }
}

export default Home;
