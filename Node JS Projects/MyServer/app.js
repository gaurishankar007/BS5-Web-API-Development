// core modules examples
// fs file system
const fs = require("fs");
fs.writeFileSync("myfile.txt", "This is some note.");
fs.writeFileSync("DemoText.txt", "Install the latest version of app.");

// server system
const http = require("http");
const myDetails = {
    name: "Gauri",
    add: "Morang",
    ph: "9816346714"
}
const jsonString = JSON.stringify(myDetails);
const jsonParse = JSON.parse(jsonString);
console.log(jsonParse.ph);
http.createServer(function(req, res){
    //res.write("hello world!");
    res.write("<b>"+jsonParse.ph+"</b> </br>");
    res.write("<b>This is bold text.</b>");
    res.write("<h1>This is h1 heading.</h1>");

    res.write("<table border='1'>");
    res.write("<tr>");
    res.write("<td>Name: </td>");
    res.write("<td>"+jsonParse.name+"</td>")
    res.write("</tr>")
    res.write("<tr>");
    res.write("<td>Address: </td>");
    res.write("<td>"+jsonParse.add+"</td>")
    res.write("</tr>")
    res.write("<tr>");
    res.write("<td>Phone: </td>");
    res.write("<td>"+jsonParse.ph+"</td>")
    res.write("</tr>")
    res.write("</table>")
    res.end();
}).listen(90);

