import { howOldService } from '../services/howOldService.js';

describe('Test /howold route handler function', function () {

    test('responds to howOldService function', async () => {
        const req = { query: { dob: '02/02/1996' } };
        const age = await howOldService(req.query);
        expect(age).toEqual(26);
    });

});