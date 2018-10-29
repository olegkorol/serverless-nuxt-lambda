# serverless-nuxt-lambda

## Description

This repository demonstrates a sample application using:

* Nuxt.js
* Serverless Framework
* AWS Lambda
* AWS API Gateway

## Quick start

To run the application locally, run:

`$ npm run start:dev`

## Deploy to AWS

Follow these steps:

1) If you want to change the service name, check the `serverless.yml` file.<br>
Change this line: "`service: serverless-nuxt-lambda`"

2) You will have to add your own domain to the `secrects.json` file.

>NOTE: Make sure that you have a SSL certificate for the (sub)domain on AWS before getting to the next step.

3) To register the new (sub)domain on AWS, run:<br>
`$ sls create_domain`<br>
And then wait for about 30 min for AWS to set things up.

4) After that run `$ npm run deploy` and you are all set.<br>
The Serverless Framework will create a CloudFormation file for you and create an API Gateway and Lambda.

<hr>

>I got this idea from a blog post by [@adnanrahic](https://github.com/adnanrahic)
