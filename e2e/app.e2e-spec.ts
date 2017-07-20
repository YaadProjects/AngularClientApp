import { ClientPanelAppPage } from './app.po';

describe('client-panel-app App', () => {
  let page: ClientPanelAppPage;

  beforeEach(() => {
    page = new ClientPanelAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
