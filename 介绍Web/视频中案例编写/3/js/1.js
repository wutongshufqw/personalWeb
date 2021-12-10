document.write("<table align='center'>");
for (let i = 1; i <10 ; i++) {
    document.write("<tr>");
    for (let j = 1; j <=i ; j++) {
        document.write("<td>")
        document.write(i + " * " + j + " = " +(i*j)+"&nbsp;");
        document.write("</td>")
    }
    document.write("</tr>");
}
document.write("</table>")