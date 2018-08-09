'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var propTypes = exports.propTypes = {
    palette: _propTypes2.default.oneOf([].concat(_toConsumableArray(Array(10).keys())).map(function (n) {
        return 'palette' + (n + 1);
    })),
    monochrome: _propTypes2.default.shape({
        enabled: _propTypes2.default.bool,
        color: _propTypes2.default.string,
        shadeTo: _propTypes2.default.oneOf(['light', 'dark']),
        shadeIntensity: _propTypes2.default.number
    })
};

var defaultProps = exports.defaultProps = {
    palette: 'palette1',
    monochrome: {
        enabled: false,
        color: '#255aee',
        shadeTo: 'light',
        shadeIntensity: 0.65
    }
};