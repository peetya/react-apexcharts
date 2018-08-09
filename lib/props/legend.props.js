'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
    show: _propTypes2.default.bool,
    position: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
    horizontalAlign: _propTypes2.default.oneOf(['left', 'center', 'right']),
    verticalAlign: _propTypes2.default.oneOf(['top', 'middle', 'bottom']),
    floating: _propTypes2.default.bool,
    fontSize: _propTypes2.default.string,
    offsetX: _propTypes2.default.number,
    offsetY: _propTypes2.default.number,
    textAnchor: _propTypes2.default.string,
    formatter: _propTypes2.default.func,
    labels: _propTypes2.default.shape({
        size: _propTypes2.default.number,
        strokeColor: _propTypes2.default.string,
        strokeWidth: _propTypes2.default.number,
        offsetX: _propTypes2.default.number,
        offsetY: _propTypes2.default.number,
        radius: _propTypes2.default.number,
        shape: _propTypes2.default.oneOf(['circle', 'square'])
    }),
    itemMargin: _propTypes2.default.shape({
        horizontal: _propTypes2.default.number,
        vertical: _propTypes2.default.number
    }),
    containerMargin: _propTypes2.default.shape({
        left: _propTypes2.default.number,
        top: _propTypes2.default.number
    }),
    onItemClick: _propTypes2.default.shape({
        toggleDataSeries: _propTypes2.default.bool
    }),
    onItemHover: _propTypes2.default.shape({
        highlightDataSeries: _propTypes2.default.bool
    })
};

var defaultProps = exports.defaultProps = {
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
        useSeriesColors: true
    },
    markers: {
        size: 6,
        strokeColor: '#fff',
        strokeWidth: 0,
        offsetX: 0,
        offsetY: 0,
        radius: 4,
        shape: 'circle'
    },
    itemMargin: {
        horizontal: 20,
        vertical: 5
    },
    containerMargin: {
        left: 5,
        top: 0
    },
    onItemClick: {
        toggleDataSeries: true
    },
    onItemHover: {
        highlightDataSeries: true
    }
};