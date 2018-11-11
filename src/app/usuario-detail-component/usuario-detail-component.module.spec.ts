import { UsuarioDetailComponentModule } from './usuario-detail-component.module';

describe('UsuarioDetailComponentModule', () => {
  let usuarioDetailComponentModule: UsuarioDetailComponentModule;

  beforeEach(() => {
    usuarioDetailComponentModule = new UsuarioDetailComponentModule();
  });

  it('should create an instance', () => {
    expect(usuarioDetailComponentModule).toBeTruthy();
  });
});
