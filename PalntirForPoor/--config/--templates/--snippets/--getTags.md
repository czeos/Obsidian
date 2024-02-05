
<%* 
let loc_tag_file = tp.file.find_tfile("--List of location tags");
loc_tags = tp.obsidian.getAllTags(app.metadataCache.getFileCache(loc_tag_file))
loc_tags = tags.map(x => x.replace("#", ""));
let tag = await tp.system.suggester(item => item, loc_tags, null, "Select tag for MapView marker"); 
-%>
<%*
tp.hooks.on_all_templates_executed(async () => {
  file_tags = tp.frontmatter["tags"]
  if (file_tags == null) 
	{ file_tags = []}
  else if (typeof file_tags === 'string')
	  { file_tags = [file_tags]}
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = file_tags.concat([tag]);
    frontmatter["type"] = "location";
   });
});
-%>