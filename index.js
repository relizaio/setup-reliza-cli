const path = require('path');
const fs = require('fs');
const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const { getDownloadObject } = require('./lib/utils');

async function setup() {
  try {
    // Create /tmp/reliza directory
    const relizaDir = '/tmp/reliza';
    if (!fs.existsSync(relizaDir)) {
      fs.mkdirSync(relizaDir, { recursive: true });
      core.info(`Created directory: ${relizaDir}`);
    }

    // Get version of tool to be installed
    const version = core.getInput('version');

    // Download the specific version of the tool, as a zipball
    const download = getDownloadObject(version);
    const pathToTarball = await tc.downloadTool(download.url);

    // Extract the tarball/zipball onto host runner
    const extract = tc.extractZip;
    const pathToCLI = await extract(pathToTarball);
    
    // Expose the tool by adding it to the PATH
    core.addPath(pathToCLI);
  } catch (e) {
    core.setFailed(e);
  }
}

module.exports = setup

if (require.main === module) {
  setup();
}