import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

export const DATABASE_CONNECTION_TOKEN = 'DATABASE_CONNECTION_TOKEN';

@Module({
  providers: [
    {
      provide: DATABASE_CONNECTION_TOKEN,
      useFactory: async (): Promise<Db> => {
        try {
          const client = await MongoClient.connect(
            'mongodb+srv://agustinialexsandro:4qF7XzlIRs0DzOkT@cluster0.nhdkqr1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
          );

          return client.db();
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: [DATABASE_CONNECTION_TOKEN],
})
export class DatabaseModule {}
