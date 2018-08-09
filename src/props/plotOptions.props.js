import PropTypes from 'prop-types';

export const propTypes = {
    bar: PropTypes.shape({
        horizontal: PropTypes.bool,
        endingShape: PropTypes.oneOf(['flat', 'rounded', 'arrow']),
        columnWidth: PropTypes.string,
        barHeight: PropTypes.string,
        distributed: PropTypes.bool,
        colors: PropTypes.shape({
            ranges: PropTypes.arrayOf(PropTypes.shape({
                from: PropTypes.number,
                to: PropTypes.number,
                color: PropTypes.string,
            })),
            backgroundBarColors: PropTypes.arrayOf(PropTypes.string),
            backgroundBarOpacity: PropTypes.number,
        }),
        dataLabels: PropTypes.shape({
            position: PropTypes.oneOf(['top', 'center', 'bottom']),
        }),
    }),
    heatmap: PropTypes.shape({
        radius: PropTypes.number,
        enableShades: PropTypes.bool,
        shadeIntensity: PropTypes.number,
        colorScale: PropTypes.shape({
            ranges: PropTypes.arrayOf(PropTypes.shape({
                from: PropTypes.number,
                to: PropTypes.number,
                color: PropTypes.string,
            })),
        }),
    }),
    pie: PropTypes.shape({
        size: PropTypes.number,
        donut: PropTypes.shape({
            donutSize: PropTypes.string,
            background: PropTypes.string,
        }),
        customScale: PropTypes.number,
        offsetX: PropTypes.number,
        offsetY: PropTypes.number,
        dataLabels: PropTypes.shape({
            offset: PropTypes.number,
        }),
    }),
    radialBar: PropTypes.shape({
        size: PropTypes.number,
        inverseOrder: PropTypes.bool,
        startAngle: PropTypes.number,
        endAngle: PropTypes.number,
        offsetX: PropTypes.number,
        offsetY: PropTypes.number,
        hollow: PropTypes.shape({
            margin: PropTypes.number,
            size: PropTypes.string,
            background: PropTypes.string,
            image: PropTypes.string,
            imageWidth: PropTypes.number,
            hollowImageOffsetX: PropTypes.number,
            imageOffsetY: PropTypes.number,
            imageClipped: PropTypes.bool,
            position: PropTypes.oneOf(['front', 'back']),
            dropShadow: PropTypes.shape({
                enabled: PropTypes.bool,
                top: PropTypes.number,
                left: PropTypes.number,
                blur: PropTypes.number,
                opacity: PropTypes.number,
            }),
        }),
        track: PropTypes.shape({
            show: PropTypes.bool,
            startAngle: PropTypes.number,
            endAngle: PropTypes.number,
            background: PropTypes.string,
            width: PropTypes.number,
            opacity: PropTypes.number,
            margin: PropTypes.number,
        }),
        dataLabels: PropTypes.shape({
            showOn: PropTypes.oneOf(['always', 'hover']),
            name: PropTypes.shape({
                show: PropTypes.bool,
                fontSize: PropTypes.string,
                color: PropTypes.string,
                offsetY: PropTypes.number,
            }),
            value: PropTypes.shape({
                show: PropTypes.bool,
                fontSize: PropTypes.string,
                color: PropTypes.string,
                offsetY: PropTypes.number,
                formatter: PropTypes.func,
            }),
        }),
    }),
};

export const defaultProps = {
    bar: {
        horizontal: false,
        endingShape: 'flat',
        columnWidth: '70%',
        barHeight: '70%',
        distributed: false,
        colors: {
            ranges: [
                {
                    from: 0,
                    to: 0,
                    color: undefined,
                },
            ],
            backgroundBarColors: [],
            backgroundBarOpacity: 1,
        },
        dataLabels: {
            position: 'top',
        },
    },
    heatmap: {
        radius: 2,
        enableShades: true,
        shadeIntensity: 0.5,
        colorScale: {
            ranges: [
                {
                    from: 0,
                    to: 0,
                    color: undefined,
                },
            ],
        },
    },
    pie: {
        size: undefined,
        donut: {
            size: '65%',
            background: 'transparent',
        },
        customScale: 0,
        offsetX: 0,
        offsetY: 0,
        dataLabels: {
            offset: 0,
        },
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
            position: 'front',
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
                opacity: 0.5,
            },
        },
        dataLabels: {
            showOn: 'always',
            name: {
                show: true,
                fontSize: '22px',
                color: undefined,
                offsetY: -10,
            },
            value: {
                show: true,
                fontSize: '16px',
                color: undefined,
                offsetY: 16,
                formatter: val => `${val}%`,
            },
        },
    },
};
