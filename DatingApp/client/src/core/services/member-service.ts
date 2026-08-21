import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core'; 
import { environment } from '../../environments/environment';
import { Member, Photo } from '../../types/member'; 
import { AccountService } from './account-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private http=inject(HttpClient);
  private baseUrl=environment.apiUrl;
   private AccountService=inject(AccountService);

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl + 'members');
  }

  getMember(id: string): Observable<Member> {
    return this.http.get<Member>(this.baseUrl + 'members/' + id);
  }

  getMemberPhotos(id:string){
    return this.http.get<Photo[]>(this.baseUrl + 'members/' + id + '/photos');
  }

 
  
}
