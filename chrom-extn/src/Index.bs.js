// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';


var extensionData = {
  color: "green"
};

chrome.runtime.onInstalled.addListener((function () {
        chrome.storage.sync.set(extensionData, (function () {
                console.log(extensionData);
                return /* () */0;
              }));
        return /* () */0;
      }));

var pageUrl = {
  hostEquals: "developer.chrome.com"
};

var pageStateMatcherParams = {
  pageUrl: pageUrl
};

var rules = /* array */[{
    conditions: /* array */[new (chrome.declarativeContent.PageStateMatcher)(pageStateMatcherParams)],
    actions: /* array */[new (chrome.declarativeContent.ShowPageAction)()]
  }];

chrome.declarativeContent.onPageChanged.removeRules(undefined, (function () {
        chrome.declarativeContent.onPageChanged.addRules(rules);
        return /* () */0;
      }));

exports.extensionData = extensionData;
exports.pageUrl = pageUrl;
exports.pageStateMatcherParams = pageStateMatcherParams;
exports.rules = rules;
/*  Not a pure module */
