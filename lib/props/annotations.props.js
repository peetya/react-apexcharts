'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
    position: _propTypes2.default.oneOf(['front', 'back']),
    yaxis: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        y: _propTypes2.default.number,
        borderType: _propTypes2.default.oneOf(['solid', 'dotted']),
        borderColor: _propTypes2.default.string,
        offsetX: _propTypes2.default.number,
        offsetY: _propTypes2.default.number,
        yAxisIndex: _propTypes2.default.number,
        label: _propTypes2.default.shape({
            borderColor: _propTypes2.default.string,
            borderWidth: _propTypes2.default.number,
            text: _propTypes2.default.string,
            textAnchor: _propTypes2.default.string,
            position: _propTypes2.default.oneOf(['top', 'bottom']),
            offsetX: _propTypes2.default.number,
            offsetY: _propTypes2.default.number,
            style: _propTypes2.default.shape({
                background: _propTypes2.default.string,
                color: _propTypes2.default.string,
                fontSize: _propTypes2.default.string,
                cssClass: _propTypes2.default.string,
                padding: _propTypes2.default.shape({
                    left: _propTypes2.default.number,
                    right: _propTypes2.default.number,
                    top: _propTypes2.default.number,
                    bottom: _propTypes2.default.number
                })
            })
        })
    })),
    xaxis: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        x: _propTypes2.default.number,
        borderType: _propTypes2.default.oneOf(['solid', 'dotted']),
        borderColor: _propTypes2.default.string,
        offsetX: _propTypes2.default.number,
        offsetY: _propTypes2.default.number,
        label: _propTypes2.default.shape({
            borderColor: _propTypes2.default.string,
            borderWidth: _propTypes2.default.number,
            text: _propTypes2.default.string,
            textAnchor: _propTypes2.default.string,
            position: _propTypes2.default.oneOf(['top', 'bottom']),
            orientation: _propTypes2.default.oneOf(['vertical', 'horizontal']),
            offsetX: _propTypes2.default.number,
            offsetY: _propTypes2.default.number,
            style: _propTypes2.default.shape({
                background: _propTypes2.default.string,
                color: _propTypes2.default.string,
                fontSize: _propTypes2.default.string,
                cssClass: _propTypes2.default.string
            })
        })
    })),
    point: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        x: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        y: _propTypes2.default.number,
        yAxisIndex: _propTypes2.default.number,
        seriesIndex: _propTypes2.default.number,
        marker: _propTypes2.default.shape({
            size: _propTypes2.default.number,
            fillColor: _propTypes2.default.string,
            strokeColor: _propTypes2.default.string,
            strokeWidth: _propTypes2.default.number,
            offsetX: _propTypes2.default.number,
            offsetY: _propTypes2.default.number,
            shape: _propTypes2.default.oneOf(['circle', 'square']),
            radius: _propTypes2.default.number
        }),
        label: _propTypes2.default.shape({
            borderColor: _propTypes2.default.string,
            borderWith: _propTypes2.default.number,
            text: _propTypes2.default.string,
            textAnchor: _propTypes2.default.string,
            offsetX: _propTypes2.default.number,
            offsetY: _propTypes2.default.number,
            style: _propTypes2.default.shape({
                background: _propTypes2.default.string,
                color: _propTypes2.default.string,
                fontSize: _propTypes2.default.string,
                cssClass: _propTypes2.default.string,
                padding: _propTypes2.default.shape({
                    left: _propTypes2.default.number,
                    right: _propTypes2.default.number,
                    top: _propTypes2.default.number,
                    bottom: _propTypes2.default.number
                })
            })
        })
    }))
};

var defaultProps = exports.defaultProps = {
    position: 'front',
    yaxis: [{
        y: 0,
        borderType: 'solid',
        borderColor: '#B8D3DD',
        offsetX: 0,
        offsetY: -3,
        yAxisIndex: 0,
        label: {
            borderColor: '#c2c2c2',
            borderWidth: 1,
            text: undefined,
            textAnchor: 'end',
            position: 'top',
            offsetX: 0,
            offsetY: 0,
            style: {
                background: '#fff',
                color: '#777',
                fontSize: '12px',
                cssClass: 'apexcharts-yaxis-annotation-label',
                padding: {
                    left: 5,
                    right: 5,
                    top: 0,
                    bottom: 2
                }
            }
        }
    }],
    xaxis: [{
        x: 0,
        borderType: 'solid',
        borderColor: '#B8D3DD',
        offsetX: 0,
        offsetY: 0,
        label: {
            borderColor: '#c2c2c2',
            borderWidth: 1,
            text: undefined,
            textAnchor: 'middle',
            position: 'top',
            orientation: 'vertical',
            offsetX: 0,
            offsetY: 0,
            style: {
                background: '#fff',
                color: '#777',
                fontSize: '12px',
                cssClass: 'apexcharts-xaxis-annotation-label'
            }
        }
    }],
    point: [{
        x: 0,
        y: null,
        yAxisIndex: 0,
        seriesIndex: 0,
        marker: {
            size: 0,
            fillColor: '#fff',
            strokeColor: '#333',
            strokeWidth: 3,
            shape: 'circle',
            radius: 2
        },
        label: {
            borderColor: '#c2c2c2',
            borderWidth: 1,
            text: undefined,
            textAnchor: 'middle',
            offsetX: 0,
            offsetY: -15,
            style: {
                background: '#fff',
                color: '#777',
                fontSize: '12px',
                cssClass: 'apexcharts-point-annotation-label',
                padding: {
                    left: 5,
                    right: 5,
                    top: 0,
                    bottom: 2
                }
            }
        }
    }]
};