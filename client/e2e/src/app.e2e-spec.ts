import {AppPage} from './app.po';
import {browser, logging} from 'protractor';
const fs = require('fs');

// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
  const stream = fs.createWriteStream(filename);

  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.takeScreenshot().then((png) => {
      writeScreenShot(png, 'main.png');
    });
    expect(page.getTitleText()).toEqual('NextThink shop');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
