import PropTypes from 'prop-types';

export const propTypes = {
    size: PropTypes.number,
    colors: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeOpacity: PropTypes.number,
    fillOpacity: PropTypes.number,
    radius: PropTypes.number,
    shape: PropTypes.oneOf(['circle', 'square']),
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    hover: PropTypes.shape({
        size: PropTypes.number,
    }),
};

export const defaultProps = {
    size: 0,
    colors: undefined,
    strokeColor: '#fff',
    strokeWidth: 2,
    strokeOpacity: 0.9,
    fillOpacity: 1,
    shape: 'circle',
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    hover: {
        size: 6,
    },
};
