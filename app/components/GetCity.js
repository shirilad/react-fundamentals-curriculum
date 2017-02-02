var React = require('react');
var PropTypes = React.PropTypes;


var styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 300
    },
    button: {
        margin: 10
    }
}

function Button (props) {
    return (
        <button type='button'
                className='btn btn-success'
                style={styles.button}
                onClick={props.onSubmitCity}>
            {props.children}
        </button>
    )
}

function Input (props) {
    return (
        <input className='form-control'
               onChange={props.onUpdateCity}
               placeholder='St. George, Utah'
               type='text'
               value={props.city}
        />
    )
}

function GetCity (props) {
    return (
        <div style={styles.container}>
            <Input onUpdateCity={props.onUpdateCity} city={props.city} />
            <Button onSubmitCity={props.onSubmitCity}>
                Get Weather
            </Button>
        </div>
    )
}

GetCity.propTypes = {
    onSubmitCity: PropTypes.func.isRequired,
    onUpdateCity: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired
};

module.exports = GetCity;