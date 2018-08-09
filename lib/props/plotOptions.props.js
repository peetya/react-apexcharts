'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
    bar: _propTypes2.default.shape({
        horizontal: _propTypes2.default.bool,
        endingShape: _propTypes2.default.oneOf(['flat', 'rounded', 'arrow']),
        columnWidth: _propTypes2.default.string,
        barHeight: _propTypes2.default.string,
        distributed: _propTypes2.default.bool,
        colors: _propTypes2.default.shape({
            ranges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
                from: _propTypes2.default.number,
                to: _propTypes2.default.number,
                color: _propTypes2.default.string
            })),
            backgroundBarColors: _propTypes2.default.arrayOf(_propTypes2.default.string),
            backgroundBarOpacity: _propTypes2.default.number
        }),
        dataLabels: _propTypes2.default.shape({
            position: _propTypes2.default.oneOf(['top', 'center', 'bottom'])
        })
    }),
    heatmap: _propTypes2.default.shape({
        radius: _propTypes2.default.number,
        enableShades: _propTypes2.default.bool,
        shadeIntensity: _propTypes2.default.number,
        colorScale: _propTypes2.default.shape({
            ranges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
                from: _propTypes2.default.number,
                to: _propTypes2.default.number,
                color: _propTypes2.default.string
            }))
        })
    }),
    pie: _propTypes2.default.shape({
        size: _propTypes2.default.number,
        donut: _propTypes2.default.shape({
            donutSize: _propTypes2.default.string,
            background: _propTypes2.default.string
        }),
        customScale: _propTypes2.default.number,
        offsetX: _propTypes2.default.number,
        offsetY: _propTypes2.default.number,
        dataLabels: _propTypes2.default.shape({
            offset: _propTypes2.default.number
        })
    }),
    radialBar: _propTypes2.default.shape({
        size: _propTypes2.default.number,
        inverseOrder: _propTypes2.default.bool,
        startAngle: _propTypes2.default.number,
        endAngle: _propTypes2.default.number,
        offsetX: _propTypes2.default.number,
        offsetY: _propTypes2.default.number,
        hollow: _propTypes2.default.shape({
            margin: _propTypes2.default.number,
            size: _propTypes2.default.string,
            background: _propTypes2.default.string,
            image: _propTypes2.default.string,
            imageWidth: _propTypes2.default.number,
            hollowImageOffsetX: _propTypes2.default.number,
            imageOffsetY: _propTypes2.default.number,
            imageClipped: _propTypes2.default.bool,
            position: _propTypes2.default.oneOf(['front', 'back']),
            dropShadow: _propTypes2.default.shape({
                enabled: _propTypes2.default.bool,
                top: _propTypes2.default.number,
                left: _propTypes2.default.number,
                blur: _propTypes2.default.number,
                opacity: _propTypes2.default.number
            })
        }),
        track: _propTypes2.default.shape({
            show: _propTypes2.default.bool,
            startAngle: _propTypes2.default.number,
            endAngle: _propTypes2.default.number,
            background: _propTypes2.default.string,
            width: _propTypes2.default.number,
            opacity: _propTypes2.default.number,
            margin: _propTypes2.default.number
        }),
        dataLabels: _propTypes2.default.shape({
            showOn: _propTypes2.default.oneOf(['always', 'hover']),
            name: _propTypes2.default.shape({
                show: _propTypes2.default.bool,
                fontSize: _propTypes2.default.string,
                color: _propTypes2.default.string,
                offsetY: _propTypes2.default.number
            }),
            value: _propTypes2.default.shape({
                show: _propTypes2.default.bool,
                fontSize: _propTypes2.default.string,
                color: _propTypes2.default.string,
                offsetY: _propTypes2.default.number,
                formatter: _propTypes2.default.func
            })
        })
    })
};

var defaultProps = exports.defaultProps = {
    bar: {
        horizontal: false,
        endingShape: 'flat',
        columnWidth: '70%',
        barHeight: '70%',
        distributed: false,
        colors: {
            ranges: [{
                from: 0,
                to: 0,
                color: undefined
            }],
            backgroundBarColors: [],
            backgroundBarOpacity: 1
        },
        dataLabels: {
            position: 'top'
        }
    },
    heatmap: {
        radius: 2,
        enableShades: true,
        shadeIntensity: 0.5,
        colorScale: {
            ranges: [{
                from: 0,
                to: 0,
                color: undefined
            }]
        }
    },
    pie: {
        size: undefined,
        donut: {
            size: '65%',
            background: 'transparent'
        },
        customScale: 0,
        offsetX: 0,
        offsetY: 0,
        dataLabels: {
            offset: 0
        }
    },
    radialBar: {
        size: undefined,
        inverseOrder: false,
        startAngle: 0,
        endAngle: 360,
        offsetX: 0,
        offsetY: 0,
        hollow: {
            margin: 5,
            size: '50%',
            background: 'transparent',
            image: undefined,
            width: 150,
            height: 150,
            offsetX: 0,
            offsetY: 0,
            clipped: true,
            position: 'front'
        },
        track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: '#f2f2f2',
            strokeWidth: '97%',
            opacity: 1,
            margin: 5,
            dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5
            }
        },
        dataLabels: {
            showOn: 'always',
            name: {
                show: true,
                fontSize: '22px',
                color: undefined,
                offsetY: -10
            },
            value: {
                show: true,
                fontSize: '16px',
                color: undefined,
                offsetY: 16,
                formatter: function formatter(val) {
                    return val + '%';
                }
            }
        }
    }
};