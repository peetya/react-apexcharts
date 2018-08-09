'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    data: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number), _propTypes2.default.shape({
        x: _propTypes2.default.string,
        y: _propTypes2.default.number
    })]))
}));

var defaultProps = exports.defaultProps = [{
    name: 'Series 1',
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
}];