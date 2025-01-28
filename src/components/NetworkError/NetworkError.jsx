import PropTypes from 'prop-types'

export const NetworkError = ({error}) => {
    return <p>A network error was encountered {error.message}</p>
}

NetworkError.propTypes = {
    error: PropTypes.object
}