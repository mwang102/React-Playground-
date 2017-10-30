webpackJsonp([1],{

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _keen = __webpack_require__(37);

var _keen2 = _interopRequireDefault(_keen);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			/*
   let elm = document.getElementById('remove')
   if(elm){
   	elm.remove();
   }
   */

		}
	}, {
		key: 'render',
		value: function render() {
			var array = ['work', 'stuff'],
			    arrayObj = [{ name: 'Todd', talent: 'spooning' }, { name: 'Lisa', talent: 'growling' }];

			var mappedStrings = arrayObj.map(function (d, i) {
				var name = d.name,
				    talent = d.talent;

				return _react2.default.createElement(
					'div',
					{ className: 'dummyText', key: i },
					' My name is ',
					name,
					' and I love ',
					talent,
					' '
				);
			});
			console.log(mappedStrings);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					null,
					'Hello from react',
					_react2.default.createElement('img', { src: _keen2.default, alt: 'Commander Keen' }),
					mappedStrings
				)
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ })

});