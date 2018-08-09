'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _annotations = require('./annotations.props');

var _chart = require('./chart.props');

var _colors = require('./colors.props');

var _fill = require('./fill.props');

var _grid = require('./grid.props');

var _labels = require('./labels.props');

var _legend = require('./legend.props');

var _markers = require('./markers.props');

var _plotOptions = require('./plotOptions.props');

var _responsive = require('./responsive.props');

var _series = require('./series.props');

var _states = require('./states.props');

var _stroke = require('./stroke.props');

var _subtitle = require('./subtitle.props');

var _theme = require('./theme.props');

var _title = require('./title.props');

var _tooltip = require('./tooltip.props');

var _xaxis = require('./xaxis.props');

var _yaxis = require('./yaxis.props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
    options: _propTypes2.default.shape({
        annotations: _propTypes2.default.shape(_annotations.propTypes),
        chart: _propTypes2.default.shape(_chart.propTypes),
        colors: _colors.propTypes,
        fill: _propTypes2.default.shape(_fill.propTypes),
        grid: _propTypes2.default.shape(_grid.propTypes),
        labels: _labels.propTypes,
        legend: _propTypes2.default.shape(_legend.propTypes),
        markers: _propTypes2.default.shape(_markers.propTypes),
        plotOptions: _propTypes2.default.shape(_plotOptions.propTypes),
        responsive: _responsive.propTypes,
        series: _series.propTypes,
        states: _propTypes2.default.shape(_states.propTypes),
        stroke: _propTypes2.default.shape(_stroke.propTypes),
        subtitle: _propTypes2.default.shape(_subtitle.propTypes),
        theme: _propTypes2.default.shape(_theme.propTypes),
        title: _propTypes2.default.shape(_title.propTypes),
        tooltip: _propTypes2.default.shape(_tooltip.propTypes),
        xaxis: _propTypes2.default.shape(_xaxis.propTypes),
        yaxis: _propTypes2.default.shape(_yaxis.propTypes)
    })
};

var defaultProps = exports.defaultProps = {
    options: {
        annotations: _annotations.defaultProps,
        chart: _chart.defaultProps,
        colors: _colors.defaultProps,
        fill: _fill.defaultProps,
        grid: _grid.defaultProps,
        labels: _labels.defaultProps,
        legend: _legend.defaultProps,
        markers: _markers.defaultProps,
        plotOptions: _plotOptions.defaultProps,
        responsive: _responsive.defaultProps,
        series: _series.defaultProps,
        states: _states.defaultProps,
        stroke: _stroke.defaultProps,
        subtitle: _subtitle.defaultProps,
        theme: _theme.defaultProps,
        title: _title.defaultProps,
        tooltip: _tooltip.defaultProps,
        xaxis: _xaxis.defaultProps,
        yaxis: _yaxis.defaultProps
    }
};