/**
 * Created by serne_000 on 14.12.2015.
 */
var TelegramBot = require('node-telegram-bot-api');
var http = require('http');
var answer=require('answer');

var token = '115827379:AAFaFtX7j5pFblau-xnP35dcI8VS2Ku6o9I';
var botOptions = {
    polling: true
};
var bot = new TelegramBot(token, botOptions);

bot.getMe().then(function(me) {
    console.log('Hello! My name is %s!', me.first_name);
    console.log('My id is %s.', me.id);
    console.log('And my username is @%s.', me.username);
});

bot.on('text', function(msg) {
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
    var messageDate = msg.date;
    var messageUsr = msg.from.username;
    console.log(msg);
    sendMessageByBot(messageChatId,answer.ans(messageChatId,messageText,messageDate,messageUsr));

});

function sendMessageByBot(aChatId, aMessage) {
    if(aMessage)
    bot.sendMessage(aChatId, aMessage, { caption: 'I\'m a cute bot!' });
}