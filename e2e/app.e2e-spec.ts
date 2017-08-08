import { AngularAllPage } from './app.po';

describe('angular-all App', () => {
  let page: AngularAllPage;

  beforeEach(() => {
    page = new AngularAllPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
