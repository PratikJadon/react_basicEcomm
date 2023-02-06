import MainContent from "./MainContent";
import React from 'react'
import DropDowns from "./DropDowns";
import Search from "./Search";

const App=()=>{
    const [navState,setNavState] = React.useState({
        item : "",
        category: "all",
        searchField : ""
    })

    const changecet=(categ)=>{
        setNavState(prevState =>  {
            return {...prevState,
                    category : categ
                    }
        }) 
    }

    const submitSearch=(e,searchfields)=>{
        e.preventDefault();
        setNavState(prevState=> {
            return {
                ...prevState,
                searchField : searchfields
            }
        })
    }

    return(
        <>
        <div className="nav_bar">
        <DropDowns handleChange={changecet}/>
        <Search serachF={navState.searchField} searchUpdate={changecet} subSearch={submitSearch}/>
        </div>
        <MainContent category={navState.category} filterSearch={navState.searchField}/>
        </>
    )
}

export default App;