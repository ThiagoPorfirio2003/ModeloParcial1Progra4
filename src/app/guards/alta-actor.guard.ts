import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { ApoyoGuardService } from '../servicios/apoyo-guard.service';
  
export const altaActorGuard: CanActivateFn = (route, state) => {
  const tipoUsuario = route.data["tipoUsuarioEsperado"];
  console.log(tipoUsuario);
  return inject(ApoyoGuardService).sePuedeAcceder && tipoUsuario === "admin";
};

/*
export const altaActorGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivate();
};
*/
