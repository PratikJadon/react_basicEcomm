import { Component } from "react"
import Cards from "./Cards"

class MainContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoaded : false,
            items : []
        }
    }

    async componentDidMount(){
        await fetch("https://fakestoreapi.com/products").then(res=> res.json()).then(json =>{
            this.setState({
                isLoaded : true,
                items : json
            })
        })
    }
    
    render(){
        var {isLoaded , items} = this.state;
        
        if(!isLoaded){
            return <div>Loading....</div>
        }
        else{
            var str = this.props.filterSearch;
            var found = false;
            
            const products = items.map(item =>{
                if(found === false) {
                    found = (item.title.includes(str) !== false) ? true : false
                    found = found && (item.category === this.props.category || this.props.category === "all") ? true : false
                }
                return ((item.category === this.props.category || this.props.category === "all") &&
                (item.title.includes(str) !== false || str==="") 
                && <Cards img = {item.image} name = {item.title} description = {item.description} />)
            })
            return(
                <div className="maincontent">
                {found === true ?  products : <div>No Result Found</div>}
                </div>
            )
        }  
    }
}

export default MainContent