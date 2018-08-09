'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ApexCharts = require('src/components/ApexCharts');

var _ApexCharts2 = _interopRequireDefault(_ApexCharts);

var _props = require('../props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApexCharts = function (_React$Component) {
    _inherits(ApexCharts, _React$Component);

    function ApexCharts(props) {
        _classCallCheck(this, ApexCharts);

        var _this = _possibleConstructorReturn(this, (ApexCharts.__proto__ || Object.getPrototypeOf(ApexCharts)).call(this, props));

        _this.chartRef = _react2.default.createRef();
        return _this;
    }

    _createClass(ApexCharts, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var options = this.props.options;


            this.chart = new _ApexCharts2.default(this.chartRef.current, options);

            this.chart.render();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.chart.destroy();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { id: 'chart', ref: this.chartRef });
        }
    }]);

    return ApexCharts;
}(_react2.default.Component);

ApexCharts.propTypes = _props.propTypes;

ApexCharts.defaultProps = _props.defaultProps;

exports.default = ApexCharts;