import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common'
import { UsersService } from "./users.service";



@Controller('users')
export class UsersController {
  @Get() // GET /users
  findAll() {
    return UsersService
  }

  @Get('interns') // GET /users/interns
  findInterns() {
    return ['All interns here']
  }

  @Get(':id') // GET /users/id
  findOne(@Param('id') id: string) {
    return { id }
  }

  @Post() // POST /users/:id
  Create(@Body() user: {}) {
    return user
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: {}){
    console.log('The id is ', id);
    
    return user
  }
}
