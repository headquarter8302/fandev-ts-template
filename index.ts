export { }
declare global {
  interface Window {
    // feel free to hot-plug any dependencies/resources here
    mediaWiki: any;
    jQuery: any;

    // add your own properties/namespaces here (in the 'dev' property)
    dev: any;
  }

  // alternatively, fill these namespaces if you don't want to prefix `window.` to the IIFE input
  namespace mediaWiki {

  }

  namespace jQuery {

  }
}

(function (window, mw, $) {
  // your stuff here

  // remember to delete unused parameters
})(this! as Window, window.mediaWiki, window.jQuery);
