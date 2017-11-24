import { TestBed, inject } from '@angular/core/testing';

import { GetUsersService } from './get-users.service';

describe('GetUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUsersService]
    });
  });

  it('should be created', inject([GetUsersService], (service: GetUsersService) => {
    expect(service).toBeTruthy();
  }));

  it('login should call endpoint and return its result', inject([GetUsersService], (service: GetUsersService) => {
    service.loginUser('admin', 'secret').subscribe((response) => {
      expect(response.json()).toEqual({ success: true });
    });
  }));

  it('getUsers should call endpoint and return its result', inject([GetUsersService], (service: GetUsersService) => {
    service.getUsers().subscribe((response) => {
      expect(response.json()).toEqual({ success: true });
    });
  }));

  it('getUserDetails should call endpoint and return its result', inject([GetUsersService], (service: GetUsersService) => {
    service.getUserDetails(2).subscribe((response) => {
      expect(response.json()).toEqual({ success: true });
    });
  }));

  it('createUser should call endpoint and return its result', inject([GetUsersService], (service: GetUsersService) => {
    service.createNewuser('Mark','Driver').subscribe((response) => {
      expect(response.json()).toEqual({ success: true });
    });
  }));

  it('updateUser should call endpoint and return its result', inject([GetUsersService], (service: GetUsersService) => {
    service.updateUser(2,'Mark','Driver').subscribe((response) => {
      expect(response.json()).toEqual({ success: true });
    });
  }));

  it('deleteUser should call endpoint and return its result', inject([GetUsersService], (service: GetUsersService) => {
    service.deleteUser(1).subscribe((response) => {
      expect(response.json()).toEqual({ success: true });
    });
  }));

});
