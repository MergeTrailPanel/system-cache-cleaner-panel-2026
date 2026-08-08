/**
 * SystemCacheCleaner — Pages helper (UI only).
 * Keyword: system cache cleaner
 */
(function (global) {
  'use strict';

  var Product = {
    name: 'SystemCacheCleaner',
    keyword: 'system cache cleaner',
    channel: 'github-pages'
  };

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function bindDownload(btn, url) {
    if (!btn || !url) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = url;
    });
  }

  global.SystemCacheCleanerUI = { Product: Product, ready: ready, bindDownload: bindDownload };
})(typeof window !== 'undefined' ? window : globalThis);
