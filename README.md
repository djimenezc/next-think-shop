#  Shopping list app

Source code for the complete thinknext shopping list application, built with:

- [Angular](https://angular.io) for the frontend
- [NestJS](https://nestjs.com) for the backend
- [Azure Functions](https://azure.microsoft.com/services/functions/?WT.mc_id=catfacts-github-yolasors) and [Azure Storage Static Website](https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website?WT.mc_id=catfacts-github-yolasors) for deployment

# Requirements

Write a standalone web page that displays a shopping list and allows the user to add items to it. An item is represented by a text describing what to shop (e.g. milk, eggs, pasta). Each item of the resulting shopping list has a checkbox that, when checked, strikes the item and puts it at the bottom of the list (the user bought it). The user is also able to unstrike a given element to put it back up the list, and should also able to remove or change the text of any item from the list.

![shopping list](https://user-images.githubusercontent.com/3044034/76162635-ce49d300-613f-11ea-8f7b-32719f8067da.png)


> The application is based on this article:
["Build your first serverless app with Angular, NestJS and Azure"](https://dev.to/azure/build-your-first-serverless-app-with-angular-nestjs-and-azure-108h)

For CI I have used [Travis](https://travis-ci.org/djimenezc/next-think-shop/builds) 

The application has been deployed in https://shoplistdjimenezc.z16.web.core.windows.net/
