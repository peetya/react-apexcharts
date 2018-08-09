import PropTypes from 'prop-types';

export const propTypes = {
    enabled: PropTypes.bool,
    shared: PropTypes.bool,
    followCursor: PropTypes.bool,
    intersect: PropTypes.bool,
    inverseOrder: PropTypes.bool,
    custom: PropTypes.func,
    fillSeriesColor: PropTypes.bool,
    onDatasetHover: PropTypes.shape({
        highlightDataSeries: PropTypes.bool,
    }),
    x: PropTypes.shape({
        show: PropTypes.bool,
        format: PropTypes.string,
        formatter: PropTypes.func,
    }),
    y: PropTypes.shape({
        formatter: PropTypes.func,
        title: PropTypes.shape({
            formatter: PropTypes.func,
        }),
    }),
    z: PropTypes.shape({
        formatter: PropTypes.func,
        title: PropTypes.string,
    }),
    marker: PropTypes.shape({
        show: PropTypes.bool,
    }),
    items: PropTypes.shape({
        display: PropTypes.string,
    }),
    fixed: PropTypes.shape({
        enabled: PropTypes.bool,
        position: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
        offsetX: PropTypes.number,
        offsetY: PropTypes.number,
    }),
};

export const defaultProps = {
    enabled: true,
    shared: true,
    followCursor: false,
    intersect: false,
    inverseOrder: false,
    custom: undefined,
    fillSeriesColor: false,
    onDatasetHover: {
        highlightDataSeries: false,
    },
    x: {
        show: true,
        format: 'dd MMM',
        formatter: undefined,
    },
    y: {
        formatter: undefined,
        title: {
            formatter: seriesName => seriesName,
        },
    },
    z: {
        formatter: undefined,
        title: 'Size: ',
    },
    marker: {
        show: true,
    },
    items: {
        display: 'flex',
    },
    fixed: {
        enabled: false,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0,
    },
};
