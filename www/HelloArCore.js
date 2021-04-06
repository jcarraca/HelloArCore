function HelloArCorePlugin() {}

HelloArCorePlugin.prototype.open = function(success, fail) {
	console.log('Entrei');
	cordova.exec(success, fail, 'HelloArCorePlugin', 'open', []);
};

HelloArCorePlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.HelloArCorePlugin = new HelloArCorePlugin();
  return window.plugins.HelloArCorePlugin;
};

cordova.addConstructor(HelloArCorePlugin.install);