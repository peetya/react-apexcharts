import PropTypes from 'prop-types';

export const propTypes = {
    text: PropTypes.string,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    margin: PropTypes.number,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    floating: PropTypes.bool,
    style: PropTypes.shape({
        fontSize: PropTypes.string,
        color: PropTypes.string,
    }),
};

export const defaultProps = {
    text: undefined,
    align: 'left',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
        fontSize: '14px',
        color: '#9699a2',
    },
};
