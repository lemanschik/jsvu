import fsPromises from 'node:fs/promises';

export const download = async (url) => {
  let readBytes = 0;						    
  // console.log(filePath); Prints: /tmp/jsvu-itXde2/jsvutmpf
  const filePath = `${await fsPromises.mkdtemp(path.join(os.tmpdir(), 'jsvu-')}/jsvutmpf`;
  return fetch(url).then((res) =>
  const contentLength = +res.headers.get('Content-Length');
	fsPromises.writeFile(filePath, res.body.pipeThrough(
  new TransformStream({ transform(data,controller){
  controller.enqueue(data);
  readBytes += data.length;
  console.log('\x1B[1A\x1B[2K\x1B[1A');
  console.log(filePath, readBytes,'of',contentLength);
  // Clear the progress bar.
  return filePath;
  }})))));
};
