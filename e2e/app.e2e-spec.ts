import { CCrowdWebAppPage } from './app.po';

describe('ccrowd-web-app App', () => {
  let page: CCrowdWebAppPage;

  beforeEach(() => {
    page = new CCrowdWebAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
