# Video streaming application with react as frontend, using s3 and cloudfront
![video_streaming_React_frontend](https://github.com/jcabralmdevops/VideoStreamingWebSite/assets/109381604/3ada18ee-35e4-4b18-9688-41a6759b1e76)

### Here are the steps for creating an S3 bucket, configuring versioning and blocking public access, configuring CloudFront with S3 origin access, and building the frontend of your React application:

1.	Create the S3 bucket with versioning enabled and public access blocked.
2.	Add the video to the S3 bucket.
3.	Create an Origin Access Identity (OAI) for S3 and associate it with the bucket.
4.	Create a CloudFront distribution and configure it to use the OAI and the S3 bucket as its origin.
5.	Build the frontend of your React application.
6.	Use the <source> tag in your code to reference the CloudFront URL with access to the origin.


