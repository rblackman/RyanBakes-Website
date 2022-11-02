# Ryan Bakes

## NPM

This project uses a custom NPM repo with Azure Dev Ops. Follow these steps to authenticate:

If you don't already have it installed. Run the following to install the vsts npm auth tool:

```powershell
npm install -g vsts-npm-auth
```

```powershell
vsts-npm-auth -config .npmrc -force -E 525600
```

To get a new token for a NPM_RC env variable (used for deployment pipelines) run:

```powershell
vsts-npm-auth -C .\.npmrc -T temp.npmrc -E 525600 -F
```
