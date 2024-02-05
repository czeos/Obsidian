<%*
const items = ["True", "False"];
let _add_headline = await tp.system.suggester(item => item, items, null, "Set Header?"); 
-%>
<%* 
if  (_add_headline == "True") 
{tR += await tp.file.include("[[--case header block]]");}
%>

# Person of interest

## Photo

## Biographical Data

### About the person
- gender: `=this.gender`
- name: `=this.name`
- surname: `=this.surname`
- middle name: `=this.midname`
- birthday: `=this.bdate`
- citizenship: (citizenship::)
