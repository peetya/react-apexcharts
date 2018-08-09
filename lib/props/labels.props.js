'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = _propTypes2.default.arrayOf(_propTypes2.default.string);

var defaultProps = exports.defaultProps = ['Apples', 'Oranges', 'Berries', 'Grapes'];