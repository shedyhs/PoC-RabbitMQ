import 'dotenv/config';
import { app } from './main/config/app';

app.listen(3334, () =>
  console.log('🚀 Server started at http://localhost:3334'),
);
