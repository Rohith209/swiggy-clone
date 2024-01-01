import { HttpInterceptorFn } from '@angular/common/http';

export const getInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
