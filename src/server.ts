/* eslint-disable no-console */

import app from './app';
import config from './config';

async function bootstrap() {
  try {
    app.listen(config.port, () => {
      console.log(
        `successfully running Daily mart server on this port: ${config.port}`
      );
    });
  } catch (error) {
    console.error('failed to connect', error);
  }
}
bootstrap();
