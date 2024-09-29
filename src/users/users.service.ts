import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  users = [
    {
      id: 1,
      name: 'Ronny',
      age: 26
    },
    {
      id: 2,
      name: 'Raani',
      age: 27
    }
  ]

  findall(){
    console.log(this.users);
    return this.users
  }

}
