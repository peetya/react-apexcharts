import PropTypes from 'prop-types';

export const propTypes = {
    animations: PropTypes.shape({
        enabled: PropTypes.bool,
        easing: PropTypes.oneOf(['linear', 'easein', 'easeout', 'easeinout']),
        speed: PropTypes.number,
        animateGradually: PropTypes.shape({
            enabled: PropTypes.bool,
            delay: PropTypes.number,
        }),
        dynamicAnimation: PropTypes.shape({
            enabled: PropTypes.bool,
            speed: PropTypes.number,
        }),
    }),
    background: PropTypes.string,
    foreColor: PropTypes.string,
    events: PropTypes.shape({
        click: PropTypes.func,
        beforeMount: PropTypes.func,
        mounted: PropTypes.func,
        updated: PropTypes.func,
        selection: PropTypes.func,
        dataPointSelection: PropTypes.func,
        zoomed: PropTypes.func,
        scrolled: PropTypes.func,
    }),
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    dropShadow: PropTypes.shape({
        enabled: PropTypes.bool,
        top: PropTypes.number,
        left: PropTypes.number,
        blur: PropTypes.number,
        opacity: PropTypes.number,
    }),
    sparkline: PropTypes.bool,
    stacked: PropTypes.bool,
    stackType: PropTypes.oneOf(['normal', '100%']),
    type: PropTypes.oneOf(['line', 'area', 'bar', 'histogram', 'pie', 'donut', 'radialBar', 'scatter', 'bubble', 'heatmap']),
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    zoom: PropTypes.shape({
        enabled: PropTypes.bool,
        type: PropTypes.oneOf(['x', 'y', 'xy']),
        resetIcon: PropTypes.shape({
            offsetX: PropTypes.number,
            offsetY: PropTypes.number,
            fillColor: PropTypes.string,
            strokeColor: PropTypes.string,
        }),
        selection: PropTypes.shape({
            background: PropTypes.string,
            border: PropTypes.string,
        }),
    }),
};

export const defaultProps = {
    animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150,
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350,
        },
    },
    background: '#fff',
    foreColor: '#373d3f',
    events: {
        click: undefined,
        beforeMount: undefined,
        mounted: undefined,
        updated: undefined,
        selection: undefined,
        dataPointSelection: undefined,
        zoomed: undefined,
        scrolled: undefined,
    },
    height: 400,
    dropShadow: {
        enabled: false,
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.5,
    },
    sparkline: false,
    stacked: false,
    stackType: 'normal',
    type: 'line',
    width: '100%',
    zoom: {
        enabled: true,
        type: 'x',
        resetIcon: {
            offsetX: -10,
            offsetY: 0,
            fillColor: '#fff',
            strokeColor: '#37474F',
        },
        selection: {
            background: '#90CAF9',
            border: '#0D47A1',
        },
    },
};
