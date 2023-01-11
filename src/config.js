import "dotenv/config.js"

const config = {
  server: {
    port: 9000
  },
  view: {
    results: {
      minLimit: 1,
      maxLimit: 20,
      defaultLimit: 10
    }
  },
  db: {
    client: "pg",
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST
    },
    migrations: {
      directory: "./src/db/migrations",
      stub: "./src/db/migration.stub"
    }
  },
  security: {
    uploadDirectory: process.env.TMPDIR,
    password: {
      iterations: 100000,
      keylen: 256,
      digest: "sha512",
      pepper: process.env.SECURITY_PASSWORD_PEPPER
    },
    jwt: {
      expiresIn: "2 days",
      secret: process.env.SECURITY_JWT_SECRET
    }
  }
}

export default config
