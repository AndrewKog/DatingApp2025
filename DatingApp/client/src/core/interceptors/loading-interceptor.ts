import { HttpInterceptorFn } from '@angular/common/http';
import { BusyService } from '../services/busy-service';
import { inject } from '@angular/core'; 
import { of, delay, tap, finalize } from 'rxjs';
const cache= new Map<string,any>();

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(BusyService);

  if(req.method==='GET'){
    const cashedResponse = cache.get(req.url);
    if (cashedResponse){
      return of(cashedResponse);
    }
  }

  busyService.busy();


  return next(req).pipe(
    delay(500),
    tap(response=>{
      cache.set(req.url,response)
    }

    ),
    finalize(()=>{
      busyService.Idle()
    }
    )
  );
};
