import PropTypes from 'prop-types';

export const propTypes = {
    normal: PropTypes.shape({
        filter: PropTypes.shape({
            type: PropTypes.oneOf(['none', 'lighten', 'darken']),
            value: PropTypes.number,
        }),
    }),
    hover: PropTypes.shape({
        filter: PropTypes.shape({
            type: PropTypes.oneOf(['none', 'lighten', 'darken']),
            value: PropTypes.number,
        }),
    }),
    active: PropTypes.shape({
        allowMultipleDataPointsSelection: PropTypes.bool,
        filter: PropTypes.shape({
            type: PropTypes.oneOf(['none', 'lighten', 'darken']),
            value: PropTypes.number,
        }),
    }),
};

export const defaultProps = {
    normal: {
        filter: {
            type: 'none',
            value: 0,
        },
    },
    hover: {
        filter: {
            type: 'lighten',
            value: 0.15,
        },
    },
    active: {
        allowMultipleDataPointsSelection: false,
        filter: {
            type: 'darken',
            value: 0.35,
        },
    },
};
