import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";


const Search=(props)=>{
    return(
        <Form className="d-flex" onSubmit={(e)=>props.subSearch(e,document.getElementById("inp_search").value)}>
            <Form.Control
              id="inp_search"
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
    )
}

export default Search;