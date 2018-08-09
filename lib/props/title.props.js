'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
    text: _propTypes2.default.string,
    align: _propTypes2.default.oneOf(['left', 'center', 'right']),
    margin: _propTypes2.default.number,
    offsetX: _propTypes2.default.number,
    offsetY: _propTypes2.default.number,
    floating: _propTypes2.default.bool,
    style: _propTypes2.default.shape({
        fontSize: _propTypes2.default.string,
        color: _propTypes2.default.string
    })
};

var defaultProps = exports.defaultProps = {
    text: undefined,
    align: 'left',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
        fontSize: '16px',
        color: '#263238'
    }
};