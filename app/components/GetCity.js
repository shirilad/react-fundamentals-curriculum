var React = require('react');
var PropTypes = React.PropTypes;


var styles = {
    button: {
        margin: 10
    }
}

function getContainerStyles (props) {
    return {
        display: 'flex',
        flexDirection: props.direction || 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 300
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
        <div style={getContainerStyles(props)}>
            <Input onUpdateCity={props.onUpdateCity} city={props.city} />
            <Button onSubmitCity={props.onSubmitCity}>
                Get Weather
            </Button>
        </div>
    )
}

GetCity.propTypes = {
    direction: PropTypes.string,
    onSubmitCity: PropTypes.func.isRequired,
    onUpdateCity: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired
};

module.exports = GetCity;