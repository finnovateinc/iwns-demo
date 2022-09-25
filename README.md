# iwns-demo

Inter Web Notification Service
Notifications as a Service Protocol for blockchain account activity that is chain agnostic and platform independent

A typical wallet activity does not provide alerts or communication to the user in consumable form - such as notifications in mail, whatsapp, discord, telegram. Web3 account activity does not reach the user and this disconnect leads to poor UX, incomplete engagement and lost opportunities. Dapps and services have no way to natively communicate. Users must repeatedly check their actions via transaction hash and blockchain records.

IWNS stands for Inter-Web Notification Service and reaches the user via communication channels of their choice. The system allows users to set any number of accounts and preferred channels via the dashboard and recieve activity based notifications.

The project uses combination of websockets and webhooks with third party tooling to build a web3 notification service. front end it built with react-js, and other tooling with nodejs / serverless computing. 

The challenge is to manage several account x channel configurations and ensure it reaches the user at the desired channel in near real-time as possible. 
