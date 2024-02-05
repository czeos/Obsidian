<%*
const items = ["True", "False"];
let _add_headline = await tp.system.suggester(item => item, items, null, "Add Section Headline?"); 
-%>
<%* 
if  (_add_headline == "True") 
{ %>## Military units:<%*} else {%> <%*}
%>
<% tp.file.include("[[--military unit field]]") %>