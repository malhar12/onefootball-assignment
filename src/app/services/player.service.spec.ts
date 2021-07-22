import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PlayerAvaibility, PlayerDetails } from './../models/model';
import { PAService } from './player.service'

const mockPlayerAvailibility: PlayerAvaibility = {
    id: 'test-id',
    active: true,
    profileId: 'test-profile'
};

const mockPlayerDetails: PlayerDetails = {
    id: 'test-profile',
    profile: {
        age: '28',
        role: 'center back',
        team: 'Chelsea FC',
        picture: 'https://www.fakeImageUrl.com/image.png'
    }
}

describe('Player Service', () => {

    let paService: PAService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [PAService]
        });

        paService = TestBed.inject(PAService);
    });

    it(`should return player availibility for id: ${mockPlayerAvailibility.id}`, () => {
        let playerAvailibilityResponse: PlayerAvaibility;
        spyOn(paService, 'getPlayerAvailibilityById').and.returnValue(of(mockPlayerAvailibility));
        paService.getPlayerAvailibilityById('test-id')
            .subscribe(playerAvailibility => {
                playerAvailibilityResponse = playerAvailibility;
                expect(playerAvailibilityResponse.profileId).toBe('test-profile');
            });
    });

    it(`should return player details for id: ${mockPlayerDetails.id}`, () => {
        let playerDetailsResponse: PlayerDetails;
        spyOn(paService, 'getPlayerDetailsById').and.returnValue(of(mockPlayerDetails));
        paService.getPlayerDetailsById('test-profile')
            .subscribe(playerDetails => {
                playerDetailsResponse = playerDetails;
                expect(playerDetailsResponse.profile.age).toBe('28');
            });
    });
})