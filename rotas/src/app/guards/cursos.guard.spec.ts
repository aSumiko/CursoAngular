import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { cursosGuard } from './cursos.guard';

describe('cursosGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cursosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
