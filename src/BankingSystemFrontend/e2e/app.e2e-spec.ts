import { Pk2AngularCliFreePage } from './app.po';

describe('pk2-angular-cli-free App', () => {
  let page: Pk2AngularCliFreePage;

  beforeEach(() => {
    page = new Pk2AngularCliFreePage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    const text = await page.getParagraphText();
    expect(text).toEqual('Welcome to app!!');
  });
});
