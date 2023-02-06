import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

class DropDowns extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            isLoaded : false,
            items : [],
            categ : "electronics"
        }
    }

    componentDidMount(){
        fetch("https://fakestoreapi.com/products/categories").then(res => res.json()).then(json =>{
            this.setState({
                isLoaded : true,
                items : json,
            })
        })
    }

    render(){
        var {isLoaded , items} = this.state
        var categ = items.map(item =>{
            return <option value={item}>{item}</option>
        })
        if(!isLoaded){
            return(
                <>
                <label htmlFor='cars'></label>
                    <select name="cars" id="cars">
                    <option value="Loading">Loading...</option>
                </select> 
                </>
            )
        }else{
            return(
                <>
                <label htmlFor="cars"></label>
                <select name="cars" id="cars" onChange={()=>this.props.handleChange(document.getElementById("cars").value)}>
                <option value="all">All</option>
                    {categ}
                </select> 
                </>
            )
        }
    }
}
export default DropDowns;