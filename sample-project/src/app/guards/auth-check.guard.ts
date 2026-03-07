import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authCheckGuard: CanActivateFn = (route, state) => {

  const _router = inject(Router);

  console.log(route);
  console.log(state);

  let isLoggedIn = sessionStorage.getItem(`isLoggedIn`);
  if (isLoggedIn === `false`) {
    alert(`Please Login In !!!`);
    _router.navigate(['login']);
    return false;
  }
  return true;
};
