<%*
const items = ["True", "False"];
let _add_headline = await tp.system.suggester(item => item, items, null, "Add Section Headline?"); 
-%>
<%* 
if  (_add_headline == "True") 
{ %>### Documents<%*} else {%> <%*}
%>
<%* 
	const default_field = ["passport", "driving-licence", "military-id"]
	const credit_card_field = ["credit-card"]
	const document_types = default_field.concat(credit_card_field);
let document_type = await tp.system.suggester(item => item, document_types);
-%>
<%* if (default_field.includes(document_type))  
	{tR += await tp.file.include("[[--document field]]");}
else if (credit_card_field.includes(document_type))  
	{tR += await tp.file.include("[[--credit card field]]");}
%>


