"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./footersignature.css");

var _Aslam = _interopRequireDefault(require("./Aslam.png"));

var _fa = require("react-icons/fa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "FooterSignature"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Identity"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _Aslam.default
  }), /*#__PURE__*/_react.default.createElement("h4", null, "Develop by Aslam Baba")), /*#__PURE__*/_react.default.createElement("div", {
    className: "SocialMedia"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://facebook.com/aslambabaofficial",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaFacebookSquare, {
    className: "aslambabaSocialicons"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://instagram.com/aslambaba91r",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaInstagram, {
    className: "aslambabaSocialicons"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/aslambaba",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaGithub, {
    className: "aslambabaSocialicons"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://linkedin.com/in/aslamsarfraz/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaLinkedin, {
    className: "aslambabaSocialicons"
  }))));
}

var _default = Footer;
exports.default = _default;

//# sourceMappingURL=index.js.map