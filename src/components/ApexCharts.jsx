import React from 'react';
import Chart from 'src/components/ApexCharts';
import { propTypes, defaultProps } from '../props';

class ApexCharts extends React.Component {
    constructor(props) {
        super(props);

        this.chartRef = React.createRef();
    }

    componentDidMount() {
        const {
            options,
        } = this.props;

        this.chart = new Chart(this.chartRef.current, options);

        this.chart.render();
    }

    componentWillUnmount() {
        this.chart.destroy();
    }

    render() {
        return (
            <div id="chart" ref={this.chartRef} />
        );
    }
}

ApexCharts.propTypes = propTypes;

ApexCharts.defaultProps = defaultProps;

export default ApexCharts;
