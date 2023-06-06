// Copyright 2019 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// <https://apache.org/licenses/LICENSE-2.0>.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const fs = require('fs');

const ProgressBar = require('progress');

const get = (url,...options) => import('./get.js').then(({get})=>get(url,...options));

const download = (url) => {
	return new Promise(async (resolve, reject) => {
		try {

			const response = await fetch(url);
			let readBytes = 0;
			
			
			// Clear the progress bar.
			console.log('\x1B[1A\x1B[2K\x1B[1A');
			const buffer = response.body;
					
			fs.mkdtemp(path.join(os.tmpdir(), 'jsvu-'), (err, folder) => {
			  if (err) throw err;
			  const filePath = `${folder}/jsvutmpf`; // console.log(folder); Prints: /tmp/foo-itXde2
			  fetch(url).then((res) =>
 			  fs.promises.writeFile(filePath, res.body.pipeThrough(
			  new TransformStream({ transform(data,controller){
			  controller.enqueue(data);
			  readBytes += data.length;
			  console.log(filePath, readBytes);
		          return filePath;
			  }}))))).then(resolve);
			});
			
			
		} catch (error) {
			reject(error);
		}
	});
};

module.exports = download;
