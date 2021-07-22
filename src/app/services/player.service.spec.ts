import { of } from 'rxjs';
import { PlayerAvaibility } from './../models/model';
import { PAService } from './player.service'

const mockPlayerAvailibility: PlayerAvaibility = {
    id: 'test-id',
    active: true,
    profileId: 'test-profile'
};

describe('Player Service', () => {
    let playerService: PAService;

    let http = jest.fn(() => of(mockPlayerAvailibility));

    beforeEach(() => {
        playerService = new PAService(http as any);
    });

    it(`should return player availibility for id: ${mockPlayerAvailibility.id}`, () => {
        playerService.getPlayerAvailibilityById('test-id')
            .subscribe(playerAvailibility => {
                expect(playerAvailibility.profileId).toBe('test-profile');
            })
    })
})