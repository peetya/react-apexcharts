'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
    type: _propTypes2.default.oneOf(['categories', 'datetime']),
    categories: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])),
    labels: _propTypes2.default.shape({
        show: _propTypes2.default.bool,
        rotate: _propTypes2.default.number,
        rotateAlways: _propTypes2.default.bool,
        trim: _propTypes2.default.bool,
        maxHeight: _propTypes2.default.number,
        style: _propTypes2.default.shape({
            color: _propTypes2.default.number,
            fontSize: _propTypes2.default.string,
            cssClass: _propTypes2.default.string
        }),
        offsetX: _propTypes2.default.number,
        offsetY: _propTypes2.default.number,
        format: _propTypes2.default.string,
        formatter: _propTypes2.default.func,
        dateTimeFormatter: _propTypes2.default.shape({
            year: _propTypes2.default.string,
            month: _propTypes2.default.string,
            day: _propTypes2.default.string,
            hour: _propTypes2.default.string
        })
    }),
    axisBorder: _propTypes2.default.shape({
        show: _propTypes2.default.bool,
        color: _propTypes2.default.string,
        offsetX: _propTypes2.default.number,
        offsetY: _propTypes2.default.number
    }),
    axisTicks: _propTypes2.default.shape({
        show: _propTypes2.default.bool,
        borderType: _propTypes2.default.oneOf(['solid', 'dotted']),
        color: _propTypes2.default.string,
        height: _propTypes2.default.number,
        offsetX: _propTypes2.default.number,
        offsetY: _propTypes2.default.number
    }),
    tickAmount: _propTypes2.default.number,
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    range: _propTypes2.default.number,
    floating: _propTypes2.default.bool,
    position: _propTypes2.default.oneOf(['bottom', 'top']),
    title: _propTypes2.default.shape({
        text: _propTypes2.default.string,
        offsetX: _propTypes2.default.number,
        offsetY: _propTypes2.default.number,
        style: _propTypes2.default.shape({
            color: _propTypes2.default.string,
            fontSize: _propTypes2.default.string,
            cssClass: _propTypes2.default.string
        })
    }),
    crosshairs: _propTypes2.default.shape({
        show: _propTypes2.default.bool,
        width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['tickWidth', 'barWidth'])]),
        position: _propTypes2.default.oneOf(['back', 'front']),
        opacity: _propTypes2.default.number,
        stroke: _propTypes2.default.shape({
            color: _propTypes2.default.string,
            width: _propTypes2.default.number,
            dashArray: _propTypes2.default.number
        }),
        fill: _propTypes2.default.shape({
            type: _propTypes2.default.oneOf(['solid', 'gradient']),
            color: _propTypes2.default.string,
            gradient: _propTypes2.default.shape({
                colorFrom: _propTypes2.default.string,
                colorTo: _propTypes2.default.string,
                stops: _propTypes2.default.arrayOf(_propTypes2.default.number),
                opacityFrom: _propTypes2.default.number,
                opacityTo: _propTypes2.default.number
            })
        }),
        dropShadow: _propTypes2.default.shape({
            enabled: _propTypes2.default.bool,
            top: _propTypes2.default.number,
            left: _propTypes2.default.number,
            blur: _propTypes2.default.number,
            opacity: _propTypes2.default.number
        })
    }),
    tooltip: _propTypes2.default.shape({
        enabled: _propTypes2.default.bool,
        offsetY: _propTypes2.default.number
    })
};

var defaultProps = exports.defaultProps = {
    type: 'categories',
    categories: [],
    labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        trim: true,
        maxHeight: 120,
        style: {
            color: undefined,
            fontSize: '12px',
            cssClass: 'apexcharts-xaxis-label'
        },
        offsetX: 0,
        offsetY: 0,
        format: undefined,
        formatter: undefined,
        datetimeFormatter: {
            year: 'yyyy',
            month: "MMM 'yy",
            day: 'dd MMM',
            hour: 'HH:mm'
        }
    },
    axisBorder: {
        show: true,
        color: '#78909C',
        offsetX: 0,
        offsetY: 0
    },
    axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#78909C',
        height: 6,
        offsetX: 0,
        offsetY: 0
    },
    tickAmount: undefined,
    min: undefined,
    max: undefined,
    range: undefined,
    floating: false,
    position: 'bottom',
    title: {
        text: undefined,
        offsetX: 0,
        offsetY: 0,
        style: {
            color: undefined,
            fontSize: '12px',
            cssClass: 'apexcharts-xaxis-title'
        }
    },
    crosshairs: {
        show: true,
        width: 1,
        position: 'back',
        opacity: 0.9,
        stroke: {
            color: '#b6b6b6',
            width: 0,
            dashArray: 0
        },
        fill: {
            type: 'solid',
            color: '#B1B9C4',
            gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
            }
        },
        dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 1,
            opacity: 0.4
        }
    },
    tooltip: {
        enabled: true,
        offsetY: 0
    }
};