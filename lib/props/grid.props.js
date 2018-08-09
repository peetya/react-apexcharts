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
    borderColor: _propTypes2.default.string,
    strokeDashArray: _propTypes2.default.number,
    position: _propTypes2.default.oneOf(['front', 'back']),
    xaxis: _propTypes2.default.shape({
        lines: _propTypes2.default.shape({
            show: _propTypes2.default.bool,
            offsetX: _propTypes2.default.number,
            offsetY: _propTypes2.default.number
        })
    }),
    yaxis: _propTypes2.default.shape({
        lines: _propTypes2.default.shape({
            show: _propTypes2.default.bool,
            offsetX: _propTypes2.default.number,
            offsetY: _propTypes2.default.number
        })
    }),
    row: _propTypes2.default.shape({
        colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
        opacity: _propTypes2.default.number
    }),
    column: _propTypes2.default.shape({
        colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
        opacity: _propTypes2.default.number
    }),
    padding: _propTypes2.default.shape({
        top: _propTypes2.default.number,
        right: _propTypes2.default.number,
        bottom: _propTypes2.default.number,
        left: _propTypes2.default.number
    })
};

var defaultProps = exports.defaultProps = {
    show: true,
    borderColor: '#90A4AE',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
        lines: {
            show: false,
            offsetX: 0,
            offsetY: 0
        }
    },
    yaxis: {
        lines: {
            show: false,
            offsetX: 0,
            offsetY: 0
        }
    },
    row: {
        colors: undefined,
        opacity: 0.5
    },
    column: {
        colors: undefined,
        opacity: 0.5
    },
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
};