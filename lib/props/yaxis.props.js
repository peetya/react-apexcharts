'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
    opposite: _propTypes2.default.bool,
    tickAmount: _propTypes2.default.number,
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    labels: _propTypes2.default.shape({
        show: _propTypes2.default.bool,
        maxWidth: _propTypes2.default.number,
        style: _propTypes2.default.shape({
            color: _propTypes2.default.string,
            fontSize: _propTypes2.default.string,
            cssClass: _propTypes2.default.string
        }),
        offsetX: _propTypes2.default.number,
        offsetY: _propTypes2.default.number,
        formatter: _propTypes2.default.func
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
        width: _propTypes2.default.number,
        offsetX: _propTypes2.default.number,
        offsetY: _propTypes2.default.number
    }),
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
        position: _propTypes2.default.oneOf(['back', 'front']),
        stroke: _propTypes2.default.shape({
            color: _propTypes2.default.string,
            width: _propTypes2.default.number,
            dashArray: _propTypes2.default.number
        })
    }),
    tooltip: _propTypes2.default.shape({
        enabled: _propTypes2.default.bool,
        offsetX: _propTypes2.default.number
    })
};

var defaultProps = exports.defaultProps = {
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
            cssClass: 'apexcharts-yaxis-label'
        },
        offsetX: 0,
        offsetY: 0,
        formatter: function formatter(val) {
            return val;
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
        width: 6,
        offsetX: 0,
        offsetY: 0
    },
    title: {
        text: undefined,
        rotate: -90,
        offsetX: 0,
        offsetY: 0,
        style: {
            color: undefined,
            fontSize: '12px',
            cssClass: 'apexcharts-yaxis-title'
        }
    },
    crosshairs: {
        show: true,
        position: 'back',
        stroke: {
            color: '#b6b6b6',
            width: 1,
            dashArray: 0
        }
    },
    tooltip: {
        enabled: true,
        offsetX: 0
    }
};