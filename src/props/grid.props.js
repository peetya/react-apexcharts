import PropTypes from 'prop-types';

export const propTypes = {
    show: PropTypes.bool,
    borderColor: PropTypes.string,
    strokeDashArray: PropTypes.number,
    position: PropTypes.oneOf(['front', 'back']),
    xaxis: PropTypes.shape({
        lines: PropTypes.shape({
            show: PropTypes.bool,
            offsetX: PropTypes.number,
            offsetY: PropTypes.number,
        }),
    }),
    yaxis: PropTypes.shape({
        lines: PropTypes.shape({
            show: PropTypes.bool,
            offsetX: PropTypes.number,
            offsetY: PropTypes.number,
        }),
    }),
    row: PropTypes.shape({
        colors: PropTypes.arrayOf(PropTypes.string),
        opacity: PropTypes.number,
    }),
    column: PropTypes.shape({
        colors: PropTypes.arrayOf(PropTypes.string),
        opacity: PropTypes.number,
    }),
    padding: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number,
    }),
};

export const defaultProps = {
    show: true,
    borderColor: '#90A4AE',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
        lines: {
            show: false,
            offsetX: 0,
            offsetY: 0,
        },
    },
    yaxis: {
        lines: {
            show: false,
            offsetX: 0,
            offsetY: 0,
        },
    },
    row: {
        colors: undefined,
        opacity: 0.5,
    },
    column: {
        colors: undefined,
        opacity: 0.5,
    },
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
};
