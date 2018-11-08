import { SocialtabletopPage } from './app.po';

describe('socialtabletop App', function() {
  let page: SocialtabletopPage;

  beforeEach(() => {
    page = new SocialtabletopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
