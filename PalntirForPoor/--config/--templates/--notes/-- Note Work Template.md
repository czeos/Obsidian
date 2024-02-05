c<%* 
await tp.file.rename("Work - " + tp.file.title)
-%>

<% tp.file.include("[[--work block]]") %>



<%*
tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "work";
    frontmatter["type"] = "work";
    frontmatter["created"] = tp.date.now('YYYY-MM-DD HH:mm');
    frontmatter["parrent"] = "[["+app.workspace.getLastOpenFiles()[0].split('/').at(-1).slice(0,-3)+"]]";
   });
});
-%>
