import {AppBar, Toolbar, styled} from "@mui/material"

// import routes for tabs
import { NavLink } from "react-router-dom";

// style css with styled mui
// change Header with component you want to style here <AppBar>
const Header = styled(AppBar)`
background: #111111`;

// for html style put that tag in coat ""
// here only change styled components
const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px; 
    color: inherit; 
     ${'' /*inherit color ->same as parent  */}
    text-decoration: none;
    ${'' /* remove underline from text-decoration */}
`

const NavBar = () => {
    return (
        // by default postion is fixed
        <Header position="static">
            <Toolbar>
            {/* to->eqaul to that route match */}
            <Tabs to='/'>code for interview</Tabs>
            <Tabs to='/all'>All Users </Tabs>
            <Tabs to='/add'>Add User</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;