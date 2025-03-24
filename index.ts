export { }
declare global {
  interface Window {
    // add your own properties/namespaces here (in the 'dev' property)
    dev: any;
  }
}

(function (window, mw, $) {
  // your stuff here

  // remember to delete unused parameters
})(this! as Window, mediaWiki, jQuery);
