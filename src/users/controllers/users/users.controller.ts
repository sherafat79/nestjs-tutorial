import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return {
      user: 'ali',
      age: 22,
    };
  }
  @Get('posts')
  getUsersPosts() {
    return {
      user: 'ali',
      age: 22,
      post: [
        {
          name: 'post 1',
          slug: 'aaaaaaa',
        },
        {
          name: 'post 2',
          slug: 'aaaaaaa',
        },
        {
          name: 'post 3',
          slug: 'aaaaaaa',
        },
        {
          name: 'post 4',
          slug: 'aaaaaaa',
        },
        {
          name: 'post 5',
          slug: 'aaaaaaa',
        },
      ],
    };
  }
}
