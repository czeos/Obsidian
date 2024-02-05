<%*
const items = ["True", "False"];
let _add_headline = await tp.system.suggester(item => item, items, null, "Add Section Headline?"); 
-%>
<%* 
if  (_add_headline == "True") 
{ %>### Social media accounts<%*} else {%> <%*}
%>
<% tp.file.include("[[--social media field]]") %>