<%*
const items = ["Elementary", "High-School", "University","Post-grual","Qualification","Other"];
let type = await tp.system.suggester(item => item, items, null, "Select type of eduction"); 
-%>
- Type of education: (edu-type::<% type %>)
- School: (schoool::)
- Degree: (edu-degree::)
- From: (from-date::)
- To:(to-date::)