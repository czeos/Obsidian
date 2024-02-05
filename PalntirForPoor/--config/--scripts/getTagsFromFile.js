function getTagsFromFile (filename) {
	let file = tp.file.find_tfile(filename);
    return file;
}
module.exports = getTagsFromFile;