<%* const items = ["army", "division", "brigade", "regiment", "company", "platoon", "PMC"];
let unit_type = await tp.system.suggester(item => item, items);
let unit_name = await tp.system.prompt('Set unit name (Optional)');
let unit_number = await tp.system.prompt('Set unit number (Optional)');
let fullname = [unit_type, unit_number, unit_name].join(' ')
await tp.file.rename("MilUnit - " + fullname)
-%>
<% tp.file.include("[[--military unit block]]") %>
<%*
tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "milunit";
    frontmatter["type"] = "milunit";
    frontmatter["created"] = tp.date.now('YYYY-MM-DD HH:mm');
   });
});
-%>