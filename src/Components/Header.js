import cloud from '../cloud.svg';
const Header = () => {
    return (
        <div className='header'>
            <div className="container logo-container">
                <img className="logo" src={cloud} ></img>
                <h3>Weather App</h3>
            </div>
        </div>
    )
}

export default Header
