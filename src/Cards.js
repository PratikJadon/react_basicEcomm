import { Component } from "react";

 class Cards extends Component {
     render(){
        let prop = this.props;
            return (
                <div className="main_Card">
                <img src={prop.img} alt="temp" width="100%" height="200px" ></img>
                <div className="card_stats">
                <p className="card_name"><b>Name</b> : {prop.name.slice(0,40)}</p>
                <p className="card_description"><b>Description</b> : {prop.description}</p>
                </div>
        </div>
        );
    }
}

export default Cards;
