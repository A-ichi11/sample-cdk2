import * as cdk from '@aws-cdk/core';
import { Vpc } from '@aws-cdk/aws-ec2'; // <- 追加

export class VpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Vpc(this, 'Vpc'); // <- 追加
  }
}