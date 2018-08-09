'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
    enabled: _propTypes2.default.bool,
    shared: _propTypes2.default.bool,
    followCursor: _propTypes2.default.bool,
    intersect: _propTypes2.default.bool,
    inverseOrder: _propTypes2.default.bool,
    custom: _propTypes2.default.func,
    fillSeriesColor: _propTypes2.default.bool,
    onDatasetHover: _propTypes2.default.shape({
        highlightDataSeries: _propTypes2.default.bool
    }),
    x: _propTypes2.default.shape({
        show: _propTypes2.default.bool,
        format: _propTypes2.default.string,
        formatter: _propTypes2.default.func
    }),
    y: _propTypes2.default.shape({
        formatter: _propTypes2.default.func,
        title: _propTypes2.default.shape({
            formatter: _propTypes2.default.func
        })
    }),
    z: _propTypes2.default.shape({
        formatter: _propTypes2.default.func,
        title: _propTypes2.default.string
    }),
    marker: _propTypes2.default.shape({
        show: _propTypes2.default.bool
    }),
    items: _propTypes2.default.shape({
        display: _propTypes2.default.string
    }),
    fixed: _propTypes2.default.shape({
        enabled: _propTypes2.default.bool,
        position: _propTypes2.default.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
        offsetX: _propTypes2.default.number,
        offsetY: _propTypes2.default.number
    })
};

var defaultProps = exports.defaultProps = {
    enabled: true,
    shared: true,
    followCursor: false,
    intersect: false,
    inverseOrder: false,
    custom: undefined,
    fillSeriesColor: false,
    onDatasetHover: {
        highlightDataSeries: false
    },
    x: {
        show: true,
        format: 'dd MMM',
        formatter: undefined
    },
    y: {
        formatter: undefined,
        title: {
            formatter: function formatter(seriesName) {
                return seriesName;
            }
        }
    },
    z: {
        formatter: undefined,
        title: 'Size: '
    },
    marker: {
        show: true
    },
    items: {
        display: 'flex'
    },
    fixed: {
        enabled: false,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0
    }
};