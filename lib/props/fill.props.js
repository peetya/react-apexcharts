'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
    colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
    opacity: _propTypes2.default.number,
    type: _propTypes2.default.oneOf(['solid', 'gradient', 'pattern', 'image']),
    gradient: _propTypes2.default.shape({
        shade: _propTypes2.default.oneOf(['light', 'dark']),
        type: _propTypes2.default.oneOf(['horizontal', 'vertical', 'diagonal1', 'diagonal2']),
        shadeIntensity: _propTypes2.default.number,
        gradientToColors: _propTypes2.default.arrayOf(_propTypes2.default.string),
        inverseColors: _propTypes2.default.bool,
        opacityFrom: _propTypes2.default.number,
        opacityTo: _propTypes2.default.number,
        stops: _propTypes2.default.arrayOf(_propTypes2.default.number)
    }),
    image: _propTypes2.default.shape({
        src: _propTypes2.default.arrayOf(_propTypes2.default.string),
        width: _propTypes2.default.number,
        height: _propTypes2.default.number
    }),
    pattern: _propTypes2.default.shape({
        style: _propTypes2.default.oneOf(['verticalLines', 'horizontalLines', 'slantedLines', 'squares', 'circles']),
        width: _propTypes2.default.number,
        height: _propTypes2.default.number,
        strokeWidth: _propTypes2.default.number
    })
};

var defaultProps = exports.defaultProps = {
    colors: undefined,
    opacity: 0.9,
    type: 'solid',
    gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100]
    },
    image: {
        src: [],
        width: undefined,
        height: undefined
    },
    pattern: {
        style: 'verticalLines',
        width: 6,
        height: 6,
        strokeWidth: 2
    }
};