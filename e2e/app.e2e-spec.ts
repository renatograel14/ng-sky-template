import { ScssTrainingPage } from './app.po';

describe('scss-training App', () => {
  let page: ScssTrainingPage;

  beforeEach(() => {
    page = new ScssTrainingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
