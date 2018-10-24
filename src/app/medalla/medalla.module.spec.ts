import { MedallaModule } from './medalla.module';

describe('MedallaModule', () => {
  let medallaModule: MedallaModule;

  beforeEach(() => {
    medallaModule = new MedallaModule();
  });

  it('should create an instance', () => {
    expect(medallaModule).toBeTruthy();
  });
});
