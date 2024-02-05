<%*
const items = ["Friend", "Contact", "Co-worker"];
let contact_type = await tp.system.suggester(item => item, items, null, "Select type of associated person"); 
-%>
- <% contact_type %>: