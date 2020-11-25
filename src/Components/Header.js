import { Link } from 'react-router-dom';
import cloud from '../cloud.svg';
const Header = () => {
    return (
        <div className='header'>
            <div className="container ">
               <Link to='/' className="logo-container">
                <img className="logo" src={cloud} ></img>
                <h3>Weather App</h3>
               </Link>
            </div>
        </div>
    )
}

export default Header
