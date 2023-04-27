import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/brain3.png';
import PagesNavBar from './PagesNavBar';


const components = ["Class", "Dashboard"]

const routes = ["class", "dashboard"]

const Sidenav = () => {

    return (
        <div>
            <div className="side-nav">
                <Link to='./class'><img src={logo} alt="brain-palace" className="sidenav-logo"></img></Link>

                <Link to='./class'><p>Class</p></Link>
                <Link to='./dashboard'><p>Dashboard</p></Link>
                <Link to='./class'><p>Class</p></Link>
                <Link to='./class'><p>Class</p></Link>
                <Link to='./class'><p>Class</p></Link>
                <Link to='./class'><p>Class</p></Link>
                <Link to='./class'><p>Class</p></Link>
                <Link to='./class'><p>Class</p></Link>


            </div>
            <PagesNavBar />

        </div>

    )
}

export default Sidenav;