# Vercel Deployment

If deploying with Vercel, you will need to authenticate with the private NPM registry.

Do so by setting an environmental variable in Vercel:

1. Authenticate with [Azure Dev Ops][ado] on local machine.
2. Copy the contents of `C:\Users\{USER_NAME}\.npmrc`
3. Set variable in Vercel with the name `NPM_RC` and the value from step 2.

[ado]: https://docs.microsoft.com/en-us/azure/devops/artifacts/npm/npmrc?view=azure-devops&tabs=windows
