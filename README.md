## Start Project:

```bash
yarn or npm install

# In first terminal 
yarn run dev or npm start

# In second terminal (With docker running)
cd db
docker-compose up db

# In third terminal
npx prisma migrate dev --name init
npx prisma generate
npx prisma studio 
```

Open localhost:3000 with your browser to see the result.
