<%* 
await tp.file.rename("Location - " + tp.file.title)
-%>

<% tp.file.include("[[--location block]]") %>

<%*
tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "location";
    frontmatter["type"] = "location";
    frontmatter["created"] = tp.date.now('YYYY-MM-DD HH:mm');
    frontmatter["parrent"] = "[["+app.workspace.getLastOpenFiles()[0].split('/').at(-1).slice(0,-3)+"]]";
   });
});
-%>