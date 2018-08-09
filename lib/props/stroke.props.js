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
    curve: _propTypes2.default.oneOf(['smooth', 'straight']),
    lineCap: _propTypes2.default.oneOf(['butt', 'square', 'round']),
    colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.any)] // TODO
    ),
    strokeDashArray: _propTypes2.default.number
};

var defaultProps = exports.defaultProps = {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    strokeDashArray: 0
};