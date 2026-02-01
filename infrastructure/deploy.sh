#!/bin/bash

# Portfolio Website Deployment Script
# This script deploys the CloudFormation stack for your portfolio website

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Portfolio Website Deployment${NC}"
echo "================================"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not installed${NC}"
    echo "Install it from: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if AWS CLI is configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not configured${NC}"
    echo "Run: aws configure"
    exit 1
fi

echo -e "${GREEN}✓${NC} AWS CLI is configured"
echo ""

# Prompt for GitHub token
echo -e "${YELLOW}GitHub Personal Access Token${NC}"
echo "Create one at: https://github.com/settings/tokens"
echo "Required scope: repo (full control)"
echo ""
read -sp "Enter your GitHub token: " GITHUB_TOKEN
echo ""
echo ""

if [ -z "$GITHUB_TOKEN" ]; then
    echo -e "${RED}Error: GitHub token is required${NC}"
    exit 1
fi

# Configuration
STACK_NAME="portfolio-website"
DOMAIN_NAME="georgejohn.net"
GITHUB_REPO="https://github.com/georgejohnisb/portfolio-website"
GITHUB_BRANCH="main"
REGION="us-east-1"

echo -e "${YELLOW}Deployment Configuration:${NC}"
echo "  Stack Name: $STACK_NAME"
echo "  Domain: $DOMAIN_NAME"
echo "  Repository: $GITHUB_REPO"
echo "  Branch: $GITHUB_BRANCH"
echo "  Region: $REGION"
echo ""

read -p "Continue with deployment? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled"
    exit 0
fi

echo ""
echo -e "${YELLOW}Deploying CloudFormation stack...${NC}"
echo ""

aws cloudformation deploy \
  --template-file infrastructure/amplify-stack.yaml \
  --stack-name "$STACK_NAME" \
  --parameter-overrides \
    DomainName="$DOMAIN_NAME" \
    GitHubRepository="$GITHUB_REPO" \
    GitHubBranch="$GITHUB_BRANCH" \
    GitHubToken="$GITHUB_TOKEN" \
  --capabilities CAPABILITY_IAM \
  --region "$REGION"

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ Deployment successful!${NC}"
    echo ""
    
    # Get outputs
    echo -e "${YELLOW}Stack Outputs:${NC}"
    aws cloudformation describe-stacks \
      --stack-name "$STACK_NAME" \
      --query 'Stacks[0].Outputs' \
      --output table \
      --region "$REGION"
    
    echo ""
    echo -e "${YELLOW}Next Steps:${NC}"
    echo "1. Get your Route 53 name servers (shown above in 'NameServers' output)"
    echo "2. Update name servers at your domain registrar"
    echo "3. Wait 24-48 hours for DNS propagation"
    echo "4. Visit your Amplify default domain (shown above) to test immediately"
    echo ""
    echo -e "${GREEN}Your website will be live at: https://$DOMAIN_NAME${NC}"
else
    echo ""
    echo -e "${RED}✗ Deployment failed${NC}"
    echo "Check the error messages above for details"
    exit 1
fi
