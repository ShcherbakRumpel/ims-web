module.exports = {
  apps: [{
    name: 'ims-api-web',
    script: 'src/main.ts',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'env two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
