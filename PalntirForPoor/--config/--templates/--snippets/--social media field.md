<%*
const items = ["vk", "facebook", "twiter", "telegram", "instagram", "ok.ru"];
let type = await tp.system.suggester(item => item, items, null, "Select type of social media"); 
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
-%>
- <% capitalizeFirstLetter(type) %>
	- platform: (soc-media::)
	- url: (url::)
	- username: (username::)
- [ ] insert url and apply url enhancement to paste card
