import PropTypes from 'prop-types';

export const propTypes = {
    show: PropTypes.bool,
    curve: PropTypes.oneOf(['smooth', 'straight']),
    lineCap: PropTypes.oneOf(['butt', 'square', 'round']),
    colors: PropTypes.arrayOf(PropTypes.string),
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.any), // TODO
    ]),
    strokeDashArray: PropTypes.number,
};

export const defaultProps = {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    strokeDashArray: 0,
};
