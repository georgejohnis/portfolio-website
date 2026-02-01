# Portfolio Website Infrastructure

This directory contains the CloudFormation template to deploy your portfolio website using AWS Amplify and Route 53.

## Prerequisites

1. **AWS CLI installed and configured**
   ```bash
   aws --version
   aws configure
   ```

2. **GitHub Personal Access Token**
   - Go to https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes: `repo` (full control of private repositories)
   - Copy the token (you'll need it for deployment)

3. **Domain registered**
   - You need to own `georgejohn.net` at a domain registrar (e.g., Route 53, GoDaddy, Namecheap)
   - You'll update the name servers after deployment

4. **GitHub repository created**
   - Create a new repository at https://github.com/georgejohnisb
   - Name it `portfolio-website`
   - Push your website files to the `main` branch

## Deployment Steps

### Step 1: Create GitHub Repository

```bash
# Initialize git in your project directory (if not already done)
cd /path/to/your/portfolio-website
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - portfolio website"

# Add remote (replace with your actual repo URL)
git remote add origin https://github.com/georgejohnisb/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy CloudFormation Stack

```bash
# Deploy the stack (you'll be prompted for the GitHub token)
aws cloudformation deploy \
  --template-file infrastructure/amplify-stack.yaml \
  --stack-name portfolio-website \
  --parameter-overrides \
    DomainName=georgejohn.net \
    GitHubRepository=https://github.com/georgejohnisb/portfolio-website \
    GitHubBranch=main \
    GitHubToken=YOUR_GITHUB_TOKEN_HERE \
  --capabilities CAPABILITY_IAM \
  --region us-east-1
```

**Note:** Replace `YOUR_GITHUB_TOKEN_HERE` with your actual GitHub personal access token.

### Step 3: Get Name Servers

After deployment completes, get the Route 53 name servers:

```bash
aws cloudformation describe-stacks \
  --stack-name portfolio-website \
  --query 'Stacks[0].Outputs[?OutputKey==`NameServers`].OutputValue' \
  --output text \
  --region us-east-1
```

### Step 4: Update Domain Registrar

Take the name servers from Step 3 and update them at your domain registrar:

1. Log in to your domain registrar (where you bought georgejohn.net)
2. Find DNS/Name Server settings
3. Replace existing name servers with the AWS Route 53 name servers
4. Save changes (can take 24-48 hours to propagate)

### Step 5: Verify Deployment

Check the Amplify app status:

```bash
# Get the Amplify default domain (works immediately)
aws cloudformation describe-stacks \
  --stack-name portfolio-website \
  --query 'Stacks[0].Outputs[?OutputKey==`AmplifyDefaultDomain`].OutputValue' \
  --output text \
  --region us-east-1
```

Visit the Amplify default domain to see your site immediately. Your custom domain (georgejohn.net) will work once DNS propagates.

## Updating Your Website

After initial deployment, any push to the `main` branch will automatically trigger a new deployment:

```bash
# Make changes to your website
# Then commit and push
git add .
git commit -m "Update content"
git push origin main
```

Amplify will automatically rebuild and deploy your site within 1-2 minutes.

## Monitoring

View your Amplify app in the AWS Console:
```
https://console.aws.amazon.com/amplify/home?region=us-east-1
```

## Cleanup

To delete all resources:

```bash
aws cloudformation delete-stack \
  --stack-name portfolio-website \
  --region us-east-1
```

**Note:** You'll need to manually delete the Route 53 hosted zone if it has any records other than the default NS and SOA records.

## Costs

Expected monthly costs:
- **Amplify Hosting**: ~$0.15/GB served + $0.01/build minute
- **Route 53 Hosted Zone**: $0.50/month
- **Total**: ~$1-3/month for typical portfolio traffic

## Troubleshooting

### Build fails
- Check the Amplify console for build logs
- Verify your GitHub token has correct permissions
- Ensure all files are committed to the repository

### Custom domain not working
- Verify name servers are updated at your registrar
- DNS propagation can take 24-48 hours
- Check Route 53 hosted zone has correct records

### SSL certificate pending
- Amplify automatically provisions SSL certificates
- This can take 15-30 minutes after domain verification
- Check Amplify console for certificate status
