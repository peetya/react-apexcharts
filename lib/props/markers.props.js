'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
    size: _propTypes2.default.number,
    colors: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
    strokeColor: _propTypes2.default.string,
    strokeWidth: _propTypes2.default.number,
    strokeOpacity: _propTypes2.default.number,
    fillOpacity: _propTypes2.default.number,
    radius: _propTypes2.default.number,
    shape: _propTypes2.default.oneOf(['circle', 'square']),
    offsetX: _propTypes2.default.number,
    offsetY: _propTypes2.default.number,
    hover: _propTypes2.default.shape({
        size: _propTypes2.default.number
    })
};

var defaultProps = exports.defaultProps = {
    size: 0,
    colors: undefined,
    strokeColor: '#fff',
    strokeWidth: 2,
    strokeOpacity: 0.9,
    fillOpacity: 1,
    shape: 'circle',
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    hover: {
        size: 6
    }
};