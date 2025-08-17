import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ContentModule } from './content/content.module';
import { DiscoveryModule } from './discovery/discovery.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    DatabaseModule,
    ContentModule,
    DiscoveryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
