#!/bin/sh

mkdir -p src/client

npm run-script run-ts -- scripts/client-generator.ts

# Remove jsonEndpoints, Provider, Implementation, ExpressZodAPIClient
till=$(sed -n '/export const jsonEndpoints/=' src/client/api.ts)
till=$((till - 1))
head -n $till src/client/api.ts >src/client/api-modified.ts

npm run typeCheck
npx eslint src/client/api-modified.ts --fix
npx prettier --write src/client/api-modified.ts

mv src/client/api-modified.ts src/client/api.ts
