import { TestBed } from '@angular/core/testing';
import { pasttripsService } from './pasttrips.service';
describe('pasttripService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(pasttripsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=pasttrips.service.spec.js.map