<%* 
const items = ["male", "female"];
let gender = await tp.system.suggester(item => item, items); 
let name = await tp.system.prompt('Set first name (Optional)');
let surname = await tp.system.prompt('Set surname (Optional)');
let midname = await tp.system.prompt('Set middle name (Optional)');
let aliases = await tp.system.prompt('Set aliases (Optional, comma seprated)');
let bdate = await tp.system.prompt('Set birth day YYYY-MM-HH');
let fullname = [name, midname, surname].join(' ')
await tp.file.rename("POI - " + fullname )
-%>
<%*
tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "poi";
    frontmatter["type"] = "person";
    frontmatter["gender"] = gender;
    frontmatter["name"] = name;
    frontmatter["midname"] = midname;
    frontmatter["surname"] = surname;
    frontmatter["bdate"] = bdate;
    frontmatter["created"] = tp.date.now('YYYY-MM-DD HH:mm');
    frontmatter["aliases"] = aliases;
  });
});
-%>
<% tp.file.include("[[--person bio block]]") %>