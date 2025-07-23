module.exports = {
  apps: [
    {
      name: 'Assignment2',
      script: './index.js', // <-- This line is critical
      watch: true,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
