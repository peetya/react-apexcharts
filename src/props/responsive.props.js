import PropTypes from 'prop-types';

export const propTypes = PropTypes.arrayOf(PropTypes.shape({
    breakpoint: PropTypes.number,
    options: PropTypes.shape(), // TODO
}));

export const defaultProps = [
    {
        breakpoint: undefined,
        options: {},
    },
];
