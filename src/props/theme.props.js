import PropTypes from 'prop-types';

export const propTypes = {
    palette: PropTypes.oneOf([...Array(10).keys()].map(n => `palette${n + 1}`)),
    monochrome: PropTypes.shape({
        enabled: PropTypes.bool,
        color: PropTypes.string,
        shadeTo: PropTypes.oneOf(['light', 'dark']),
        shadeIntensity: PropTypes.number,
    }),
};

export const defaultProps = {
    palette: 'palette1',
    monochrome: {
        enabled: false,
        color: '#255aee',
        shadeTo: 'light',
        shadeIntensity: 0.65,
    },
};
