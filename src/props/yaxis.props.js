import PropTypes from 'prop-types';

export const propTypes = {
    opposite: PropTypes.bool,
    tickAmount: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    labels: PropTypes.shape({
        show: PropTypes.bool,
        maxWidth: PropTypes.number,
        style: PropTypes.shape({
            color: PropTypes.string,
            fontSize: PropTypes.string,
            cssClass: PropTypes.string,
        }),
        offsetX: PropTypes.number,
        offsetY: PropTypes.number,
        formatter: PropTypes.func,
    }),
    axisBorder: PropTypes.shape({
        show: PropTypes.bool,
        color: PropTypes.string,
        offsetX: PropTypes.number,
        offsetY: PropTypes.number,
    }),
    axisTicks: PropTypes.shape({
        show: PropTypes.bool,
        borderType: PropTypes.oneOf(['solid', 'dotted']),
        color: PropTypes.string,
        width: PropTypes.number,
        offsetX: PropTypes.number,
        offsetY: PropTypes.number,
    }),
    range: PropTypes.number,
    floating: PropTypes.bool,
    position: PropTypes.oneOf(['bottom', 'top']),
    title: PropTypes.shape({
        text: PropTypes.string,
        offsetX: PropTypes.number,
        offsetY: PropTypes.number,
        style: PropTypes.shape({
            color: PropTypes.string,
            fontSize: PropTypes.string,
            cssClass: PropTypes.string,
        }),
    }),
    crosshairs: PropTypes.shape({
        show: PropTypes.bool,
        position: PropTypes.oneOf(['back', 'front']),
        stroke: PropTypes.shape({
            color: PropTypes.string,
            width: PropTypes.number,
            dashArray: PropTypes.number,
        }),
    }),
    tooltip: PropTypes.shape({
        enabled: PropTypes.bool,
        offsetX: PropTypes.number,
    }),
};

export const defaultProps = {
    opposite: false,
    tickAmount: 6,
    min: 6,
    max: 6,
    labels: {
        show: true,
        maxWidth: 160,
        style: {
            color: undefined,
            fontSize: '12px',
            cssClass: 'apexcharts-yaxis-label',
        },
        offsetX: 0,
        offsetY: 0,
        formatter: val => val,
    },
    axisBorder: {
        show: true,
        color: '#78909C',
        offsetX: 0,
        offsetY: 0,
    },
    axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#78909C',
        width: 6,
        offsetX: 0,
        offsetY: 0,
    },
    title: {
        text: undefined,
        rotate: -90,
        offsetX: 0,
        offsetY: 0,
        style: {
            color: undefined,
            fontSize: '12px',
            cssClass: 'apexcharts-yaxis-title',
        },
    },
    crosshairs: {
        show: true,
        position: 'back',
        stroke: {
            color: '#b6b6b6',
            width: 1,
            dashArray: 0,
        },
    },
    tooltip: {
        enabled: true,
        offsetX: 0,
    },
};
