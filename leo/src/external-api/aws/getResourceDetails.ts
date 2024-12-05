import {
  CloudControlClient,
  ListResourcesCommand,
  ListResourcesCommandInput,
} from '@aws-sdk/client-cloudcontrol'

const client = new CloudControlClient({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: '',
    secretAccessKey: '',
  },
})

export function getResourceDetails() {
  const input = {
    TypeName: 'AWS::Logs::LogGroup',
    // NextToken: 'STRING_VALUE',
    // MaxResults: Number('int'),
  } satisfies ListResourcesCommandInput
  const command = new ListResourcesCommand(input)
  const response = client.send(command)
  return response
}

const hello = {
  $metadata: {
    httpStatusCode: 200,
    requestId: 'c9ef8cff-ebfa-4a28-88ac-f528a4e3d1dc',
    extendedRequestId: undefined,
    cfId: undefined,
    attempts: 1,
    totalRetryDelay: 0,
  },
  NextToken:
    '/aws/lambda/prod-project-aditya-asabe-siteServerFunction6DFA6F-kA3GnwbOAb0b',
  ResourceDescriptions: [
    {
      Identifier: '/aws/apigateway/welcome',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/apigateway/welcome","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/apigateway/welcome:*"}',
    },
    {
      Identifier:
        '/aws/lambda/SSTBootstrap-CustomS3AutoDeleteObjectsCustomResour-35X96849c9BB',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/SSTBootstrap-CustomS3AutoDeleteObjectsCustomResour-35X96849c9BB","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/SSTBootstrap-CustomS3AutoDeleteObjectsCustomResour-35X96849c9BB:*"}',
    },
    {
      Identifier:
        '/aws/lambda/SSTBootstrap-MetadataHandlerBEE7179C-Ri0V3KnBnA4T',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/SSTBootstrap-MetadataHandlerBEE7179C-Ri0V3KnBnA4T","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/SSTBootstrap-MetadataHandlerBEE7179C-Ri0V3KnBnA4T:*"}',
    },
    {
      Identifier:
        '/aws/lambda/aditya-project-aditya-asa-CustomResourceHandlerE8F-eecd3mOFJuFa',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/aditya-project-aditya-asa-CustomResourceHandlerE8F-eecd3mOFJuFa","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/aditya-project-aditya-asa-CustomResourceHandlerE8F-eecd3mOFJuFa:*"}',
    },
    {
      Identifier:
        '/aws/lambda/aditya-project-aditya-asa-LogRetentionaae0aa3c5b4d-Dbx1HjNtxLWx',
      Properties:
        '{"RetentionInDays":1,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/aditya-project-aditya-asa-LogRetentionaae0aa3c5b4d-Dbx1HjNtxLWx","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/aditya-project-aditya-asa-LogRetentionaae0aa3c5b4d-Dbx1HjNtxLWx:*"}',
    },
    {
      Identifier:
        '/aws/lambda/aditya-project-aditya-asa-siteServerFunction6DFA6F-M7csQYsQRh3o',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/aditya-project-aditya-asa-siteServerFunction6DFA6F-M7csQYsQRh3o","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/aditya-project-aditya-asa-siteServerFunction6DFA6F-M7csQYsQRh3o:*"}',
    },
    {
      Identifier:
        '/aws/lambda/dev-medusa-beta-1-SiteSta-CustomResourceHandlerE8F-kmKCk4emSsVh',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/dev-medusa-beta-1-SiteSta-CustomResourceHandlerE8F-kmKCk4emSsVh","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/dev-medusa-beta-1-SiteSta-CustomResourceHandlerE8F-kmKCk4emSsVh:*"}',
    },
    {
      Identifier:
        '/aws/lambda/dev-medusa-beta-1-SiteSta-LogRetentionaae0aa3c5b4d-Axe66NUfTwGY',
      Properties:
        '{"RetentionInDays":1,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/dev-medusa-beta-1-SiteSta-LogRetentionaae0aa3c5b4d-Axe66NUfTwGY","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/dev-medusa-beta-1-SiteSta-LogRetentionaae0aa3c5b4d-Axe66NUfTwGY:*"}',
    },
    {
      Identifier:
        '/aws/lambda/dev-medusa-beta-1-SiteSta-siteServerFunction6DFA6F-R7WTIywNiu36',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/dev-medusa-beta-1-SiteSta-siteServerFunction6DFA6F-R7WTIywNiu36","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/dev-medusa-beta-1-SiteSta-siteServerFunction6DFA6F-R7WTIywNiu36:*"}',
    },
    {
      Identifier:
        '/aws/lambda/dev-vasundhara-Site-CustomResourceHandlerE8FB56BA-0LfpBDCjJycB',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/dev-vasundhara-Site-CustomResourceHandlerE8FB56BA-0LfpBDCjJycB","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/dev-vasundhara-Site-CustomResourceHandlerE8FB56BA-0LfpBDCjJycB:*"}',
    },
    {
      Identifier:
        '/aws/lambda/dev-vasundhara-Site-CustomS3AutoDeleteObjectsCusto-HSo8jdQJHluD',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/dev-vasundhara-Site-CustomS3AutoDeleteObjectsCusto-HSo8jdQJHluD","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/dev-vasundhara-Site-CustomS3AutoDeleteObjectsCusto-HSo8jdQJHluD:*"}',
    },
    {
      Identifier:
        '/aws/lambda/dev-vasundhara-Site-LogRetentionaae0aa3c5b4d4f87b0-YENnYVnQwpd3',
      Properties:
        '{"RetentionInDays":1,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/dev-vasundhara-Site-LogRetentionaae0aa3c5b4d4f87b0-YENnYVnQwpd3","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/dev-vasundhara-Site-LogRetentionaae0aa3c5b4d4f87b0-YENnYVnQwpd3:*"}',
    },
    {
      Identifier:
        '/aws/lambda/dev-vasundhara-Site-siteImageFunctionD6B403E9-5eb5wZFgs0Ea',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/dev-vasundhara-Site-siteImageFunctionD6B403E9-5eb5wZFgs0Ea","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/dev-vasundhara-Site-siteImageFunctionD6B403E9-5eb5wZFgs0Ea:*"}',
    },
    {
      Identifier:
        '/aws/lambda/dev-vasundhara-Site-siteServerFunction6DFA6F1B-AMVxJlDXhgs5',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/dev-vasundhara-Site-siteServerFunction6DFA6F1B-AMVxJlDXhgs5","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/dev-vasundhara-Site-siteServerFunction6DFA6F1B-AMVxJlDXhgs5:*"}',
    },
    {
      Identifier:
        '/aws/lambda/dev-webflow-socials-SiteS-CustomResourceHandlerE8F-gOM4PJieBFjB',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/dev-webflow-socials-SiteS-CustomResourceHandlerE8F-gOM4PJieBFjB","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/dev-webflow-socials-SiteS-CustomResourceHandlerE8F-gOM4PJieBFjB:*"}',
    },
    {
      Identifier:
        '/aws/lambda/dev-webflow-socials-SiteS-LogRetentionaae0aa3c5b4d-9woCVEuWgOgh',
      Properties:
        '{"RetentionInDays":1,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/dev-webflow-socials-SiteS-LogRetentionaae0aa3c5b4d-9woCVEuWgOgh","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/dev-webflow-socials-SiteS-LogRetentionaae0aa3c5b4d-9woCVEuWgOgh:*"}',
    },
    {
      Identifier:
        '/aws/lambda/dev-webflow-socials-SiteS-siteServerFunction6DFA6F-jST91KsM9PS7',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/dev-webflow-socials-SiteS-siteServerFunction6DFA6F-jST91KsM9PS7","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/dev-webflow-socials-SiteS-siteServerFunction6DFA6F-jST91KsM9PS7:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-flowcom-WebSt-CustomResourceHandlerE8F-qjCCJbBtzvOt',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-flowcom-WebSt-CustomResourceHandlerE8F-qjCCJbBtzvOt","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-flowcom-WebSt-CustomResourceHandlerE8F-qjCCJbBtzvOt:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-flowcom-WebSt-LogRetentionaae0aa3c5b4d-XxZfGknb9edG',
      Properties:
        '{"RetentionInDays":1,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-flowcom-WebSt-LogRetentionaae0aa3c5b4d-XxZfGknb9edG","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-flowcom-WebSt-LogRetentionaae0aa3c5b4d-XxZfGknb9edG:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-flowcom-WebSt-siteServerFunction6DFA6F-rDVuERobB8pp',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-flowcom-WebSt-siteServerFunction6DFA6F-rDVuERobB8pp","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-flowcom-WebSt-siteServerFunction6DFA6F-rDVuERobB8pp:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-gta-manager-D-clientsConsumerclientsad-cgLNdzo7V3Xc',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-gta-manager-D-clientsConsumerclientsad-cgLNdzo7V3Xc","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-gta-manager-D-clientsConsumerclientsad-cgLNdzo7V3Xc:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-gta-manager-S-CustomResourceHandlerE8F-yxOpU11rOTtn',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-gta-manager-S-CustomResourceHandlerE8F-yxOpU11rOTtn","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-gta-manager-S-CustomResourceHandlerE8F-yxOpU11rOTtn:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-gta-manager-S-LogRetentionaae0aa3c5b4d-1J2HaQur2s3N',
      Properties:
        '{"RetentionInDays":1,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-gta-manager-S-LogRetentionaae0aa3c5b4d-1J2HaQur2s3N","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-gta-manager-S-LogRetentionaae0aa3c5b4d-1J2HaQur2s3N:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-gta-manager-S-siteServerFunction6DFA6F-NvJI9TIXg2u0',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-gta-manager-S-siteServerFunction6DFA6F-NvJI9TIXg2u0","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-gta-manager-S-siteServerFunction6DFA6F-NvJI9TIXg2u0:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-gta-manager-W-CustomResourceHandlerE8F-ifasxOsFIHuK',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-gta-manager-W-CustomResourceHandlerE8F-ifasxOsFIHuK","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-gta-manager-W-CustomResourceHandlerE8F-ifasxOsFIHuK:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-gta-manager-Webso-wsdisconnect1E2184EA-nm3jcsCH9UtO',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-gta-manager-Webso-wsdisconnect1E2184EA-nm3jcsCH9UtO","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-gta-manager-Webso-wsdisconnect1E2184EA-nm3jcsCH9UtO:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-gta-manager-Webso-wssyncPeriodFFBE6EA6-JFmyxyPg3kH5',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-gta-manager-Webso-wssyncPeriodFFBE6EA6-JFmyxyPg3kH5","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-gta-manager-Webso-wssyncPeriodFFBE6EA6-JFmyxyPg3kH5:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-gta-manager-Websock-wsdatabase7A617728-HCnwxsnNyB4e',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-gta-manager-Websock-wsdatabase7A617728-HCnwxsnNyB4e","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-gta-manager-Websock-wsdatabase7A617728-HCnwxsnNyB4e:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-gta-manager-Websocke-wsconnectC2B29F5B-fizaCX3PgPFg',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-gta-manager-Websocke-wsconnectC2B29F5B-fizaCX3PgPFg","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-gta-manager-Websocke-wsconnectC2B29F5B-fizaCX3PgPFg:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-gta-manager-Websocke-wsdefault99C429E9-LILJYbKZ3hxl',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-gta-manager-Websocke-wsdefault99C429E9-LILJYbKZ3hxl","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-gta-manager-Websocke-wsdefault99C429E9-LILJYbKZ3hxl:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-gta-manager-Websockets-wshelloB8FF98A8-2gXrFwaRtpQA',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-gta-manager-Websockets-wshelloB8FF98A8-2gXrFwaRtpQA","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-gta-manager-Websockets-wshelloB8FF98A8-2gXrFwaRtpQA:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-payments-WebS-CustomResourceHandlerE8F-YpZ2hJWJFiZw',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-payments-WebS-CustomResourceHandlerE8F-YpZ2hJWJFiZw","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-payments-WebS-CustomResourceHandlerE8F-YpZ2hJWJFiZw:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-payments-WebS-LogRetentionaae0aa3c5b4d-QxMZBer3R96a',
      Properties:
        '{"RetentionInDays":1,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-payments-WebS-LogRetentionaae0aa3c5b4d-QxMZBer3R96a","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-payments-WebS-LogRetentionaae0aa3c5b4d-QxMZBer3R96a:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-payments-WebS-siteServerFunction6DFA6F-xfDEbrcqHjyA',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-payments-WebS-siteServerFunction6DFA6F-xfDEbrcqHjyA","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-payments-WebS-siteServerFunction6DFA6F-xfDEbrcqHjyA:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-vasundhara-ms-CustomResourceHandlerE8F-x84xcvFv0EPl',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-vasundhara-ms-CustomResourceHandlerE8F-x84xcvFv0EPl","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-vasundhara-ms-CustomResourceHandlerE8F-x84xcvFv0EPl:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-vasundhara-ms-LogRetentionaae0aa3c5b4d-las6blCQxoNP',
      Properties:
        '{"RetentionInDays":1,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-vasundhara-ms-LogRetentionaae0aa3c5b4d-las6blCQxoNP","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-vasundhara-ms-LogRetentionaae0aa3c5b4d-las6blCQxoNP:*"}',
    },
    {
      Identifier:
        '/aws/lambda/development-vasundhara-ms-siteServerFunction6DFA6F-ViC0n3RciijE',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/development-vasundhara-ms-siteServerFunction6DFA6F-ViC0n3RciijE","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/development-vasundhara-ms-siteServerFunction6DFA6F-ViC0n3RciijE:*"}',
    },
    {
      Identifier: '/aws/lambda/gta-manager-dev-WebAppDefaultFunction',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/gta-manager-dev-WebAppDefaultFunction","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/gta-manager-dev-WebAppDefaultFunction:*","Tags":[{"Value":"dev","Key":"sst:stage"},{"Value":"gta-manager","Key":"sst:app"}]}',
    },
    {
      Identifier: '/aws/lambda/gta-manager-dev-WebAppImageOptimizerFunction',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/gta-manager-dev-WebAppImageOptimizerFunction","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/gta-manager-dev-WebAppImageOptimizerFunction:*","Tags":[{"Value":"dev","Key":"sst:stage"},{"Value":"gta-manager","Key":"sst:app"}]}',
    },
    {
      Identifier: '/aws/lambda/leo-aditya-WebFrameworkDefaultFunction',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/leo-aditya-WebFrameworkDefaultFunction","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/leo-aditya-WebFrameworkDefaultFunction:*","Tags":[{"Value":"leo","Key":"sst:app"},{"Value":"aditya","Key":"sst:stage"}]}',
    },
    {
      Identifier: '/aws/lambda/leo-aditya-WebFrameworkImageOptimizerFunction',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/leo-aditya-WebFrameworkImageOptimizerFunction","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/leo-aditya-WebFrameworkImageOptimizerFunction:*","Tags":[{"Value":"leo","Key":"sst:app"},{"Value":"aditya","Key":"sst:stage"}]}',
    },
    {
      Identifier: '/aws/lambda/leo-dev-WebFrameworkDefaultFunction',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/leo-dev-WebFrameworkDefaultFunction","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/leo-dev-WebFrameworkDefaultFunction:*","Tags":[{"Value":"dev","Key":"sst:stage"},{"Value":"leo","Key":"sst:app"}]}',
    },
    {
      Identifier: '/aws/lambda/leo-dev-WebFrameworkImageOptimizerFunction',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/leo-dev-WebFrameworkImageOptimizerFunction","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/leo-dev-WebFrameworkImageOptimizerFunction:*","Tags":[{"Value":"dev","Key":"sst:stage"},{"Value":"leo","Key":"sst:app"}]}',
    },
    {
      Identifier:
        '/aws/lambda/prod-project-aditya-asabe-CustomResourceHandlerE8F-eOKp6zHAdi8u',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/prod-project-aditya-asabe-CustomResourceHandlerE8F-eOKp6zHAdi8u","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/prod-project-aditya-asabe-CustomResourceHandlerE8F-eOKp6zHAdi8u:*"}',
    },
    {
      Identifier:
        '/aws/lambda/prod-project-aditya-asabe-CustomS3AutoDeleteObject-4pOFHncmpOu9',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/prod-project-aditya-asabe-CustomS3AutoDeleteObject-4pOFHncmpOu9","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/prod-project-aditya-asabe-CustomS3AutoDeleteObject-4pOFHncmpOu9:*"}',
    },
    {
      Identifier:
        '/aws/lambda/prod-project-aditya-asabe-LogRetentionaae0aa3c5b4d-TjcQh0L9g7FY',
      Properties:
        '{"RetentionInDays":1,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/prod-project-aditya-asabe-LogRetentionaae0aa3c5b4d-TjcQh0L9g7FY","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/prod-project-aditya-asabe-LogRetentionaae0aa3c5b4d-TjcQh0L9g7FY:*"}',
    },
    {
      Identifier:
        '/aws/lambda/prod-project-aditya-asabe-siteImageFunctionD6B403E-O7TkmDb2Bkzv',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/prod-project-aditya-asabe-siteImageFunctionD6B403E-O7TkmDb2Bkzv","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/prod-project-aditya-asabe-siteImageFunctionD6B403E-O7TkmDb2Bkzv:*"}',
    },
    {
      Identifier:
        '/aws/lambda/prod-project-aditya-asabe-siteRevalidationInsertFu-vSQ5D3JWjMSG',
      Properties:
        '{"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/prod-project-aditya-asabe-siteRevalidationInsertFu-vSQ5D3JWjMSG","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/prod-project-aditya-asabe-siteRevalidationInsertFu-vSQ5D3JWjMSG:*"}',
    },
    {
      Identifier:
        '/aws/lambda/prod-project-aditya-asabe-siteRevalidationProvider-oyzyVjVVW2Hx',
      Properties:
        '{"RetentionInDays":1,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/prod-project-aditya-asabe-siteRevalidationProvider-oyzyVjVVW2Hx","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/prod-project-aditya-asabe-siteRevalidationProvider-oyzyVjVVW2Hx:*"}',
    },
    {
      Identifier:
        '/aws/lambda/prod-project-aditya-asabe-siteServerFunction6DFA6F-kA3GnwbOAb0b',
      Properties:
        '{"RetentionInDays":3,"LogGroupClass":"STANDARD","LogGroupName":"/aws/lambda/prod-project-aditya-asabe-siteServerFunction6DFA6F-kA3GnwbOAb0b","Arn":"arn:aws:logs:ap-south-1:950043126803:log-group:/aws/lambda/prod-project-aditya-asabe-siteServerFunction6DFA6F-kA3GnwbOAb0b:*"}',
    },
  ],
  TypeName: 'AWS::Logs::LogGroup',
}
