import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerAvaibility, PlayerDetails } from './../models/model';
import { BASE_URL } from './../../constants';

@Injectable()
export class PAService {
    constructor(private http: HttpClient) {}

    getPlayerAvailibilityById(playerId: string): Observable<PlayerAvaibility> {
        return this.http.get<any>(`${BASE_URL}data/${playerId}.json`).pipe(
            map(response => {
                return {
                    id: response.id,
                    active: JSON.parse(response.active),
                    profileId: response['profile-id']
                }
            })
        );
    }

    getPlayerDetailsById(playerId: string): Observable<PlayerDetails> {
        return this.http.get<any>(`${BASE_URL}profile/${playerId}`);
    }
}