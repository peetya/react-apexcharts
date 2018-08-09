import PropTypes from 'prop-types';

export const propTypes = {
    show: PropTypes.bool,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    horizontalAlign: PropTypes.oneOf(['left', 'center', 'right']),
    verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
    floating: PropTypes.bool,
    fontSize: PropTypes.string,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    textAnchor: PropTypes.string,
    formatter: PropTypes.func,
    labels: PropTypes.shape({
        size: PropTypes.number,
        strokeColor: PropTypes.string,
        strokeWidth: PropTypes.number,
        offsetX: PropTypes.number,
        offsetY: PropTypes.number,
        radius: PropTypes.number,
        shape: PropTypes.oneOf(['circle', 'square']),
    }),
    itemMargin: PropTypes.shape({
        horizontal: PropTypes.number,
        vertical: PropTypes.number,
    }),
    containerMargin: PropTypes.shape({
        left: PropTypes.number,
        top: PropTypes.number,
    }),
    onItemClick: PropTypes.shape({
        toggleDataSeries: PropTypes.bool,
    }),
    onItemHover: PropTypes.shape({
        highlightDataSeries: PropTypes.bool,
    }),
};

export const defaultProps = {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    verticalAlign: 'middle',
    floating: false,
    fontSize: '14px',
    offsetX: 0,
    offsetY: 0,
    formatter: undefined,
    textAnchor: 'start',
    labels: {
        foreColor: '#333',
        useSeriesColors: true,
    },
    markers: {
        size: 6,
        strokeColor: '#fff',
        strokeWidth: 0,
        offsetX: 0,
        offsetY: 0,
        radius: 4,
        shape: 'circle',
    },
    itemMargin: {
        horizontal: 20,
        vertical: 5,
    },
    containerMargin: {
        left: 5,
        top: 0,
    },
    onItemClick: {
        toggleDataSeries: true,
    },
    onItemHover: {
        highlightDataSeries: true,
    },
};
