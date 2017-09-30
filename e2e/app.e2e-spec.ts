import { TheIslandZgzPage } from './app.po';

describe('the-island-zgz App', () => {
  let page: TheIslandZgzPage;

  beforeEach(() => {
    page = new TheIslandZgzPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
