import { NoCoversPage } from './app.po';

describe('no-covers App', function() {
  let page: NoCoversPage;

  beforeEach(() => {
    page = new NoCoversPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
