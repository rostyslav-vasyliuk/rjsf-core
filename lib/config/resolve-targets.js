"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveBrowserslistConfigFile = resolveBrowserslistConfigFile;
exports.resolveTargets = resolveTargets;

function _helperCompilationTargets() {
  const data = _interopRequireDefault(require("@babel/helper-compilation-targets"));

  _helperCompilationTargets = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

({});

const path = require("path");

function resolveBrowserslistConfigFile(browserslistConfigFile, configFileDir) {
  return path.resolve(configFileDir, browserslistConfigFile);
}

function resolveTargets(options, root) {
  let {
    targets
  } = options;

  if (typeof targets === "string" || Array.isArray(targets)) {
    targets = {
      browsers: targets
    };
  }

  if (targets && targets.esmodules) {
    targets = Object.assign({}, targets, {
      esmodules: "intersect"
    });
  }

  const {
    browserslistConfigFile
  } = options;
  let configFile;
  let ignoreBrowserslistConfig = false;

  if (typeof browserslistConfigFile === "string") {
    configFile = browserslistConfigFile;
  } else {
    ignoreBrowserslistConfig = browserslistConfigFile === false;
  }

  return (0, _helperCompilationTargets().default)(targets, {
    ignoreBrowserslistConfig,
    configFile,
    configPath: root,
    browserslistEnv: options.browserslistEnv
  });
}