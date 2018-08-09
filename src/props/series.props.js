import PropTypes from 'prop-types';

export const propTypes = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.shape({
            x: PropTypes.string,
            y: PropTypes.number,
        }),
    ])),
}));

export const defaultProps = [
    {
        name: 'Series 1',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
];
