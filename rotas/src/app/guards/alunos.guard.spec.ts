import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { alunosGuard } from './alunos.guard';

describe('alunosGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => alunosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
