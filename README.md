# AWS - Amazon Web Services

### CLOUD COMPUTING BASICS  

- [LEGACY AND CLOUD I.T.](#legacy-and-cloud-it)
- [TYPES OF CLOUD SERVICE AND DEPLOYMENT](#types-of-cloud-service-and-deployment)
- [ADVANTAGES OF CLOUD COMPUTING](#advantages-of-cloud-computing)
- [RESUME](#resume-cloud-basics)

---

### IAM - IDENTITY AND ACCESS MANAGEMENT

- [USERS, GROUPS, ROLES AND POLICIES](#users-groups-roles-and-policies)
- [AWS IAM BEST PRACTICES](#aws-iam-best-practices)
- [RESUME](#resume-iam)

---

### COMPUTE SERVICES - EC2/ECS

- [EC2](#ec2)

---

### CLOUD ARQUITECTURE

- [BEST PRACTICES](#best-practices)
- [WELL-ARCHITECTED FRAMEWORK](#well-architected-framework)

### CLOUD COMPUTING BASICS

### LEGACY AND CLOUD IT

#### LEGACY

- The IT equipment is owned by the company
- A company typically leases space in a data center, or may own the whole building
- Very capital intensive
- IT staff must design, build, operate, and manage equipment

- Costs:
  - Data center bulding
  - Data center security
  - Physical It hardware
  - Software licensing costs
  - Maintenance contracts
  - Power
  - Internet connectivity

#### CLOUD COMPUTING VS TRADITIONAL IT

##### CLOUD

- On-demand, self-service
- Broad network access
- Resource pooling
- Rapid elasticity
- Measured service

##### TRADITIONAL

- Requires human involvement
- Internal accessibility, limited public presence
- Single-tenant, can be virtualized
- Limited scalability
- Usage is not typically measured

#### DEPLOYING A WEBSITE ON-PREMISES

##### LEGACY

| Activity:         | Timeline:    |
| ----------------  | ------------ |
| Purchase hardware | 4 - 12 weeks |
| Install and build | 4 - 8 weeks  |
| Acceptance testing | 2 - 4 weeks  |
| Handover to operations | 1 - 2 weeks  |
| Total | 3 - 6 months |

##### CLOUD

- Admin uses a browser or command line to deploy website and database
- Customers connect over the Internet to place orders

### TYPES OF CLOUD SERVICE AND DEPLOYMENT

#### PRIVATE CLOUD

With a private cloud, an analogy would be a house. With a house, you might buy your house, your own the house, you're responsible for anything that goes wrong with the house and you're responsible for furnishing the house or the contents that go into it

| Managed by you    |
| ----------------  |
| Java WebAPP       | 
| Data              | 
| Java Runtime      | 
| Linux OS          | 
| Hypervisor        | 
| Server            | 


#### INFRASTRUCTURE AS A SERVICE (IaaS)

An anolagy here would be a hotel. With a hotel you don't own the building, but yu can lease some space in that building so you can rent out a room for a night and if you want to rent a room for a few nights, then obviously you'll pay more

| Managed by you    |
| ----------------  |
| Java WebAPP       | 
| Data              | 
| Java Runtime      | 
| Linux OS          | 


#### PLATFORM AS A SERVICE (PaaS)

All we have to carefull in this model is the data and the web application, so essentially it's just uploading data and code, nothing else, we're not responsible for anything else

| Managed by you    |
| ----------------  |
| Java WebAPP       | 
| Data              | 


#### SOFTWARE AS A SERVICE (SaaS)

Pure consumption model
You don't manage anithing! You just have to use what they give to you.

### ADVANTAGES OF CLOUD COMPUTING

1. Trade capital expense for variable expense
    > you just pay for what you use

2. Benefit from massive economies of scale
    > lower variable costs for customer

3. Stop guessing capacity
    > Wasted resources just does not exists.

4. Increase speed and agility
    > Speed = deploy resources easily and quickly  
    > Agility = react to change; speed to market

5. Stop spending money running and maintaining data centers
    > \+ Innovation  
    > \- Data center management

6. Go global in minutes

### RESUME: CLOUD BASICS

#### COMPUTING MODEL:

1. Infrastructure as a service (IaaS) - managed up to the OS
2. Platform as a service (PaaS) - managed up to the code
3. Software as a service (SaaS) - pure consumption model

#### DEPLOYMENT:

1. Public Cloud or simple "Cloud"
    > AWS, Azure, GCP
2. Hybrid Cloud - mixture of public and private clouds
3. Private Cloud (on-premise) - managed in your own data center
    > Hyper-v, OpenStack, VMware
4. Multicloud - use private/public clouds from multiple providers

#### PRICING FUNDAMENTALS:

- Compute - CPU/RAM and duration
- Storage - quantity of data stored or allocated
- Outbound data transfer - data leaving an AWS Region

#### GLOBAL INFRASTRUCTURE

- AWS Regions
  - A region is a geographical area
  - Each region consists of 2 or more availability zones
  - Isolated from other AWS Regions

- Availability Zones
  - Availability Zones are physically separate and isolated from each other
  - AZs span one or more data centers
  - Each AZ is designed as an independent failure zone

- Local Zones
  - AWS Local Zones place compute, storage, database, and other select AWS services closer to end-users
  - Extension of an AWS Region where you can run your latency sensitive applications

- Edge Locations and Regional Edge Caches
  - Edge Locations are Content Delivery Network (CDN) endpoints for CloudFront
  - There are many more edge locations than regions
  - Regional Edge Caches sit between CloudFront origin servers and edge locations
  - A Regional Edge Cache has a larger cache-width than each of the individual Edge Locations

#### RESPONSABILITY MODEL

- AWS are responsible for "Security of the Cloud"
  - AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud
  - This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services.

- Customers are responsible for "Security in the Cloud"
  - For EC2 this includes network level security, operating system patches and updates, IAM user acess management, and client and server-side data encryption

#### ADVANTAGES OF CLOUD

1. Trade capital expense for variable expense
2. Benefit from massive economies of scale
3. Stop guessing about capacity
4. Increase speed and agility
5. Stop spending money running and maintaining data centres
6. Go global in minutes

---

## IAM - IDENTITY AND ACCESS MANAGEMENT

### USERS, GROUPS, ROLES AND POLICIES

#### USER

An IAM user is an entity that represents a person or service

- Can be assigned:
  - An access key ID and secret access key for programmatic access to the AWS API, CLI, SDK, and other development tools
  - A password for access to the management console

By default, users cannot access anything in your account

#### GROUPS

- Groups are collections of users and have policies attached to them
- A group is not an identity and cannot be identified as a principal in an IAM policy
- Use groups to assign permissions to users
- Use the principle of least privilege when assigning permissions
- You cannot nest groups (groups within groups)

#### ROLES

Roles are created and then “assumed” by trusted entities and define a set of permissions for making AWS service requests

With IAM Roles you can delegate permissions to resources for users and services without using permanent credentials (e.g. user name and password)

IAM users or AWS services can assume a role to obtain temporary security credentials that can be used to make AWS API calls

- Temporaly Credentials
  - Roles can be assumed temporarily through the console or programmatically with the AWS CLI, Tools for Windows PowerShell, or the API
  - IAM users can temporarily assume a role to take on permissions for a specific task
  - Temporary credentials are primarily used with IAM roles and automatically expire

#### POLICIES

- Policies are documents that define permissions and can be applied to users, groups, and roles
- All permissions are implicitly denied by default
- Policy documents are written in JSON (key value pair that consists of an attribute and a value)
- The IAM policy simulator is a tool to help you understand, test, and validate the effects of access control policies

### MULTI-FACTOR AUTHENTICATION

- It could be something that you know
    > Password
- It could be something that you have
    > Virtual MFA  
    > Physical MFA

### AWS IAM BEST PRACTICES

- Lock away your AWS account root user acess keys
- Create individual IAM users
- Use groups to assign permissions to IAM users
- Grant least privilege
- Get started using permissions with AWS managed policies
- Use customer managed policies instead of inline policies
- Use acess levels to review IAM permissions
- Configure a strong password policy for your users
- Enable MFA
- Use roles for applications that run on Amazon EC2 instances
- Use roles to delegate permissions
- Do not share acess keys
- Rotate credentials regularly
- Remove unnecessary credentials
- Use policy conditions for extra security
- Monitor activity in your AWS account

### RESUME: IAM

- What is it?
  - AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources
  - You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources

- Users
  - Users are individual accounts you log in with
  - Users have NO permission by default

- Groups
  - Used for organizing users and applying policies

- Roles
  - Used for delegating permissions and are assumed by services

- Access
  - Users log in to the AWS Management Console with a user name and password
  - Access keys are used for CLI/API access (programmatic) 
  - Acess keys consist of an access key ID and secret access key

- Root
  - the root users have full permissions and cannot be restricted

- MFA - Multi-factor authentication
  - uses a second factor in addition to a password - typically a code generated on a device

- Service Control Policies (SCPs)
  - are features of AWS Organizations
  - control the maximum avaliable permissions in an AWS account
  - do not grant permissions

- IAM Best Practices
  - [IAM Best practices](#aws-iam-best-practices)

---

## COMPUTE SERVICES - EC2/ECS

### EC2

- What is it?
  - Amazon Elastic Compute Cloud (EC2) is a web service offered by Amazon Web Services (AWS) that provides scalable computing capacity in the cloud. It allows businesses and individuals to rent virtual computing resources, such as virtual machines (VMs), to run their applications and services on the internet
  - EC2 provides a flexible and cost-effective solution for running various computing workloads, including web and application servers, data processing, storage, and more

- With EC2, users can easily create, launch, and manage instances of virtual servers, known as Amazon Machine Images (AMIs), in a variety of configurations to suit their specific needs. They can also choose the operating system, networking, and security settings for their instances, and pay only for the computing resources they use, making it a highly scalable and cost-effective solution.

- Benefits
  - Elastic Computing - easily launch hundreds to thousands of EC2 instances within minutes
  - Complete Control - you control the EC2 instances with full root/admin acess
  - Flexible - Choice of instance types, operating systems, and software packages
  - Reliable - EC2 offers very high levels of availiability and instances can be rapidly commissioned and replaced
  - Secure - Fully integrated with Amazon VPC and security features
  - Inexpensive - Low cost, pay for what you use

---

## CLOUD ARQUITECTURE

### BEST PRACTICES

1. Design for failure and nothing fails
    - Avoid single points of failure
    - multiple instances
    - multiple availability zones
    - separate single server into multiple tiered application
    - for amazon RDS, use Multi-AZ feature

2. Build security in every layer
    - Encrypt Data at rest and in transit
    - Enforce principle of least privilege in IAM
    - Implement both security Groups and Network Acess Control Lists (NACL)
    - Consider advanced security features and services

3. Leverage different storage options
    - Move static web assets to Amazon S3
    - Use Amazon CloudFront to serve globally
    - Store session state in DynamoDB
    - Use ElastiCache between hosts and batabases

4. Implement Elasticity
    - Implement auto scaling policies
    - Architect resiliency to reboot and relauch
    - Leverage managed services like Amazon S3 and Amazon DynamoDB

5. Think Parallel
    - Scale horizontally, not vertically
    - Decouple compute from session/state
    - Use Elastic Load Balancing
    - Right-size your infrastructure

6. Loose coupling sets you free
    - Instead of a single, ordered workflow, use multiple queues.
    - Use Amazon Simple Queue Service and Simple Notification Service (SQS and SNS)
    - Leverage existing services

7. Don't fear constraints
    - Rethink traditional constraints
    - Need more RAM?
    - Better IOPS for databases?
    - Response to failure?

### WELL-ARCHITECTED FRAMEWORK

- A Framework for ensuring infrastructures are:
  - secure
  - high-performing
  - resilient
  - efficient
  - sustainable

- Practices developed through reviewing customers architectures on AWS

- Systematic approach for evaluating and implementing architectures

- Well-Architected Tool in the console

- "The Six Pillars" from Well-Architected Framework
  - Operational Excellence
  - Security
  - Reliability
  - Performance Efficiency
  - Cost Optimization
  - Sustainability
