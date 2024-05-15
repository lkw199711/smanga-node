import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { Token } from './entities/token.entity';
import { UserModule } from 'src/user/user.module';
import { TokenService } from './login.service';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([Login, Token])],
  controllers: [LoginController],
  providers: [LoginService, TokenService],
})
export class LoginModule {}
