const { MessageEmbed } = require("discord.js");
var osu = require('node-os-utils')

var cpu = osu.cpu


exports.run = async (client, message) => {
    cpu.usage()
    .then(info => {
//         if(info < 15.0){
//             message.channel.send("Server Load Status: " + "Very Low");
//         }
//         if(info < 39.9){
//             message.channel.send("Server Load Status: " + "Low");
//         }
//         if(info > 40.0){
//             message.channel.send("Server Load Status: " + "Normal");
//         }
//         if(info > 55.0){
//             message.channel.send("Server Load Status: " + "High");
//         }
//         if(info > 90.0){
//             message.channel.send("Server Load Status: " + "Very High");
//         }

        message.channel.send("Server Load: "+parseInt(info)+"%");
    })
};
