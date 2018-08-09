import PropTypes from 'prop-types';
import { propTypes as annotationPropTypes, defaultProps as annotationDefaultProps } from './annotations.props';
import { propTypes as chartPropTypes, defaultProps as chartDefaultProps } from './chart.props';
import { propTypes as colorsPropTypes, defaultProps as colorsDefaultProps } from './colors.props';
import { propTypes as fillPropTypes, defaultProps as fillDefaultProps } from './fill.props';
import { propTypes as gridPropTypes, defaultProps as gridDefaultProps } from './grid.props';
import { propTypes as labelsPropTypes, defaultProps as labelsDefaultProps } from './labels.props';
import { propTypes as legendPropTypes, defaultProps as legendDefaultProps } from './legend.props';
import { propTypes as markersPropTypes, defaultProps as markersDefaultProps } from './markers.props';
import { propTypes as plotOptionsPropTypes, defaultProps as plotOptionsDefaultProps } from './plotOptions.props';
import { propTypes as responsivePropTypes, defaultProps as responsiveDefaultProps } from './responsive.props';
import { propTypes as seriesPropTypes, defaultProps as seriesDefaultProps } from './series.props';
import { propTypes as statesPropTypes, defaultProps as statesDefaultProps } from './states.props';
import { propTypes as strokePropTypes, defaultProps as strokeDefaultProps } from './stroke.props';
import { propTypes as subtitlePropTypes, defaultProps as subtitleDefaultProps } from './subtitle.props';
import { propTypes as themePropTypes, defaultProps as themeDefaultProps } from './theme.props';
import { propTypes as titlePropTypes, defaultProps as titleDefaultProps } from './title.props';
import { propTypes as tooltipPropTypes, defaultProps as tooltipDefaultProps } from './tooltip.props';
import { propTypes as xaxisPropTypes, defaultProps as xaxisDefaultProps } from './xaxis.props';
import { propTypes as yaxisPropTypes, defaultProps as yaxisDefaultProps } from './yaxis.props';

export const propTypes = {
    options: PropTypes.shape({
        annotations: PropTypes.shape(annotationPropTypes),
        chart: PropTypes.shape(chartPropTypes),
        colors: colorsPropTypes,
        fill: PropTypes.shape(fillPropTypes),
        grid: PropTypes.shape(gridPropTypes),
        labels: labelsPropTypes,
        legend: PropTypes.shape(legendPropTypes),
        markers: PropTypes.shape(markersPropTypes),
        plotOptions: PropTypes.shape(plotOptionsPropTypes),
        responsive: responsivePropTypes,
        series: seriesPropTypes,
        states: PropTypes.shape(statesPropTypes),
        stroke: PropTypes.shape(strokePropTypes),
        subtitle: PropTypes.shape(subtitlePropTypes),
        theme: PropTypes.shape(themePropTypes),
        title: PropTypes.shape(titlePropTypes),
        tooltip: PropTypes.shape(tooltipPropTypes),
        xaxis: PropTypes.shape(xaxisPropTypes),
        yaxis: PropTypes.shape(yaxisPropTypes),
    }),
};

export const defaultProps = {
    options: {
        annotations: annotationDefaultProps,
        chart: chartDefaultProps,
        colors: colorsDefaultProps,
        fill: fillDefaultProps,
        grid: gridDefaultProps,
        labels: labelsDefaultProps,
        legend: legendDefaultProps,
        markers: markersDefaultProps,
        plotOptions: plotOptionsDefaultProps,
        responsive: responsiveDefaultProps,
        series: seriesDefaultProps,
        states: statesDefaultProps,
        stroke: strokeDefaultProps,
        subtitle: subtitleDefaultProps,
        theme: themeDefaultProps,
        title: titleDefaultProps,
        tooltip: tooltipDefaultProps,
        xaxis: xaxisDefaultProps,
        yaxis: yaxisDefaultProps,
    },
};
