import { Body, ForbiddenException, Injectable, Req } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SigninDto, SignupDto } from './dto';
// import * as argon from 'argon2';
import * as bcrypt from 'bcrypt'; //maybe change it

import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  /*
    signup()
    login()
    logout()
    refresh()
    signToken()
  */
}

//special for buisness logic (connect to db, ect...)
