'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
    animations: _propTypes2.default.shape({
        enabled: _propTypes2.default.bool,
        easing: _propTypes2.default.oneOf(['linear', 'easein', 'easeout', 'easeinout']),
        speed: _propTypes2.default.number,
        animateGradually: _propTypes2.default.shape({
            enabled: _propTypes2.default.bool,
            delay: _propTypes2.default.number
        }),
        dynamicAnimation: _propTypes2.default.shape({
            enabled: _propTypes2.default.bool,
            speed: _propTypes2.default.number
        })
    }),
    background: _propTypes2.default.string,
    foreColor: _propTypes2.default.string,
    events: _propTypes2.default.shape({
        click: _propTypes2.default.func,
        beforeMount: _propTypes2.default.func,
        mounted: _propTypes2.default.func,
        updated: _propTypes2.default.func,
        selection: _propTypes2.default.func,
        dataPointSelection: _propTypes2.default.func,
        zoomed: _propTypes2.default.func,
        scrolled: _propTypes2.default.func
    }),
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    dropShadow: _propTypes2.default.shape({
        enabled: _propTypes2.default.bool,
        top: _propTypes2.default.number,
        left: _propTypes2.default.number,
        blur: _propTypes2.default.number,
        opacity: _propTypes2.default.number
    }),
    sparkline: _propTypes2.default.bool,
    stacked: _propTypes2.default.bool,
    stackType: _propTypes2.default.oneOf(['normal', '100%']),
    type: _propTypes2.default.oneOf(['line', 'area', 'bar', 'histogram', 'pie', 'donut', 'radialBar', 'scatter', 'bubble', 'heatmap']),
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    zoom: _propTypes2.default.shape({
        enabled: _propTypes2.default.bool,
        type: _propTypes2.default.oneOf(['x', 'y', 'xy']),
        resetIcon: _propTypes2.default.shape({
            offsetX: _propTypes2.default.number,
            offsetY: _propTypes2.default.number,
            fillColor: _propTypes2.default.string,
            strokeColor: _propTypes2.default.string
        }),
        selection: _propTypes2.default.shape({
            background: _propTypes2.default.string,
            border: _propTypes2.default.string
        })
    })
};

var defaultProps = exports.defaultProps = {
    animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
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
        scrolled: undefined
    },
    height: 400,
    dropShadow: {
        enabled: false,
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.5
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
            strokeColor: '#37474F'
        },
        selection: {
            background: '#90CAF9',
            border: '#0D47A1'
        }
    }
};