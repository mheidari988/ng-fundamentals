import { of } from "rxjs";
import { ISession } from "../models/isession";
import { VoterService } from "./voter.service";

describe('VoterService', () => {
    let voterService: VoterService;
    let mockHttp: any;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);

        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove voter from the list of voters', () => {
            var session = { id: 6, voters: ["joe", "john"] };
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVote(3, <ISession>session, 'joe');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john');
        });
    });

    describe('deleteVoter', () => {
        it('should remove voter from the list of voters', () => {
            var session = { id: 6, voters: ["joe", "john"] };
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVote(3, <ISession>session, 'joe');

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');
        });
    });
});