# MonitoringControl
<img src="preview.jpg" />

## Set-up
In your IBM Watson IoT Platform service, generate a new application API key.
Watson IoTP `<wiotp-org-id>.internetofthings.ibmcloud.com/dashboard/#/apps/apikeys-v2`

Set the application permissions to the lowest level it requires: Visualization Application. If you add more features to the application, you'll need to elevate it to a higher role.


Docs: https://bluemix.net/docs/services/IoT/platform_authorization.html#api-key

## To Run Locally

1. Run **`npm install -g @angular/cli`** to install the Angular CLI
2. Run **`npm install`**
3. Create a file named **basicConfig.json** in the root folder of this repo with this content:
```json
{
  "org":      "{{your_org_ID}}",
  "apiKey":   "{{your_API_key}}",
  "apiToken": "{{your_API_token}}"
}
```
4. Run `npm run build-run` to build the project and start the app.
5. Go to [http://localhost:3000](http://localhost:3000) on your browser

## To Deploy to Bluemix

1. Run **`npm install -g @angular/cli`** to install the Angular CLI
2. Run **`npm install`**
3. Run **`npm run push`** to build the project and push using **Cloud Foundry**.
4. Go to Bluemix, create an [environment variable](https://console.stage1.bluemix.net/docs/services/IoT/getting_started/getting-started-iot-monitoring.html#connect) for your Bluemix app called **basicConfig** with this content:
```json
{
  "org":      "{{your_org_ID}}",
  "apiKey":   "{{your_API_key}}",
  "apiToken": "{{your_API_token}}"
}
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.
