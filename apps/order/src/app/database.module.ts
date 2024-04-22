import { Module, Global, DynamicModule } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvService } from './env.service';
import { EnvModule } from './env.module';


function DatabaseOrmModule(): DynamicModule {
  const config = new EnvService().read();
  return TypeOrmModule.forRoot({
    type: 'mongodb',
    url: config.AUTH_DB_URL,
    synchronize: true,
    logging: true,
    useNewUrlParser: true,
    ssl: true,
    useUnifiedTopology: true,
    autoLoadEntities: true,
    keepConnectionAlive: true,
    entities: ['dist/**/*.entity.{ts,js}'],
  });
}


@Global()
@Module({
  imports: [EnvModule, DatabaseOrmModule()],
})
export class DatabaseModule {}

