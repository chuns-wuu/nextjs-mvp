## Project description


`nextjs-mvp`: retrospective ghost writer(UI only). You can find many good boilerplates there.

`landingpage`: landing page for the SLO project for sign-ups.

## Contribute

Navigate to the project folder, then run the following steps(make sure you have docker running locally):
```
make build // to build the image and listen to changes locally

make up // to only run the container without building

make firebase // to deploy a change to production(you need firebase login)
```

You should have the application running at port 3000. 

To contribute, always test things locally first and make sure `make up` work for you.

First, create your own branch:
```
git checkout -b <your-new-branch>
```

Then, create a PR for merge requests. Add @chuns-wuu for review.


## Troubleshooting
### Firebase
  1. node 20 is not supported. You can use `nvm use 18` to downgrade the version before you run `make firebase`
  2. "Got source token undefined for region us-xxx" or "CloudRunServiceNotFound" during firebase deployment can be resolved by manually granting the permission in the [Google console](https://console.cloud.google.com/functions/list?authuser=2&hl=en&project=retroxsignup) and redeploy on the UI as well.

