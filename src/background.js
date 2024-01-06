//this script will run in the background of browser
//we will use this script to send messages to content script
//we will use this script to send messages to popup script
//we will use this script to send messages to other scripts
//we will use this script to listen to messages from other scripts
//we will use this script to listen to messages from content script

//like : chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//like : chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//like : chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//like : chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//like : chrome.tabs.executeScript(tabs[0].id, {file: "content.js"}, function() {
//like : chrome.tabs.executeScript(tabs[0].id, {code: "document.body.style.backgroundColor='red'"});
