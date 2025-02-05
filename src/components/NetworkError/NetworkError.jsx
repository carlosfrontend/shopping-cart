import PropTypes from 'prop-types'

export const NetworkError = ({error}) => {
    return <p>A network error was encountered {error.message}</p>
}

NetworkError.defaultProps = {
    error: PropTypes.number
}

NetworkError.propTypes = {
    error: PropTypes.object
}