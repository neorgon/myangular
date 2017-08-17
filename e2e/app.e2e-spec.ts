import { Myangular.NoPage } from './app.po';

describe('myangular.no App', () => {
  let page: Myangular.NoPage;

  beforeEach(() => {
    page = new Myangular.NoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
