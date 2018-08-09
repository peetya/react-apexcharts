import PropTypes from 'prop-types';

export const propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string),
    opacity: PropTypes.number,
    type: PropTypes.oneOf(['solid', 'gradient', 'pattern', 'image']),
    gradient: PropTypes.shape({
        shade: PropTypes.oneOf(['light', 'dark']),
        type: PropTypes.oneOf(['horizontal', 'vertical', 'diagonal1', 'diagonal2']),
        shadeIntensity: PropTypes.number,
        gradientToColors: PropTypes.arrayOf(PropTypes.string),
        inverseColors: PropTypes.bool,
        opacityFrom: PropTypes.number,
        opacityTo: PropTypes.number,
        stops: PropTypes.arrayOf(PropTypes.number),
    }),
    image: PropTypes.shape({
        src: PropTypes.arrayOf(PropTypes.string),
        width: PropTypes.number,
        height: PropTypes.number,
    }),
    pattern: PropTypes.shape({
        style: PropTypes.oneOf(['verticalLines', 'horizontalLines', 'slantedLines', 'squares', 'circles']),
        width: PropTypes.number,
        height: PropTypes.number,
        strokeWidth: PropTypes.number,
    }),
};

export const defaultProps = {
    colors: undefined,
    opacity: 0.9,
    type: 'solid',
    gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
    },
    image: {
        src: [],
        width: undefined,
        height: undefined,
    },
    pattern: {
        style: 'verticalLines',
        width: 6,
        height: 6,
        strokeWidth: 2,
    },
};
