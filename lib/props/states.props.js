'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
    normal: _propTypes2.default.shape({
        filter: _propTypes2.default.shape({
            type: _propTypes2.default.oneOf(['none', 'lighten', 'darken']),
            value: _propTypes2.default.number
        })
    }),
    hover: _propTypes2.default.shape({
        filter: _propTypes2.default.shape({
            type: _propTypes2.default.oneOf(['none', 'lighten', 'darken']),
            value: _propTypes2.default.number
        })
    }),
    active: _propTypes2.default.shape({
        allowMultipleDataPointsSelection: _propTypes2.default.bool,
        filter: _propTypes2.default.shape({
            type: _propTypes2.default.oneOf(['none', 'lighten', 'darken']),
            value: _propTypes2.default.number
        })
    })
};

var defaultProps = exports.defaultProps = {
    normal: {
        filter: {
            type: 'none',
            value: 0
        }
    },
    hover: {
        filter: {
            type: 'lighten',
            value: 0.15
        }
    },
    active: {
        allowMultipleDataPointsSelection: false,
        filter: {
            type: 'darken',
            value: 0.35
        }
    }
};