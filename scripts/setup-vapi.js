#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎤 Vapi Workflow Setup Helper');
console.log('==============================\n');

console.log('To set up your Vapi workflows for the AI Mock Interviews app, follow these steps:\n');

console.log('1. Go to your Vapi dashboard: https://vapi.ai/dashboard');
console.log('2. Navigate to the "Workflows" section');
console.log('3. Create two workflows:\n');

console.log('📋 Workflow 1: Generate Interview Questions');
console.log('Purpose: Creates interview questions based on role, level, and tech stack');
console.log('Variables to expect:');
console.log('- username: string');
console.log('- userid: string');
console.log('Set this workflow ID as: NEXT_PUBLIC_VAPI_WORKFLOW_ID\n');

console.log('📋 Workflow 2: Conduct Interview');
console.log('Purpose: Conducts the actual interview with the candidate');
console.log('Variables to expect:');
console.log('- questions: string (formatted list of questions)');
console.log('- username: string');
console.log('- userid: string');
console.log('Set this workflow ID as: NEXT_PUBLIC_VAPI_INTERVIEW_WORKFLOW_ID\n');

console.log('4. Add both workflow IDs to your .env.local file:');
console.log('   NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_generate_workflow_id');
console.log('   NEXT_PUBLIC_VAPI_INTERVIEW_WORKFLOW_ID=your_interview_workflow_id');

console.log('\n5. Make sure you also have this environment variable set:');
console.log('   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_web_token_here');

console.log('\n✅ Setup complete! Your workflows should now work with both the generate and interview features.');

// Create a sample configuration file
const sampleConfig = {
  generateWorkflow: {
    description: "Workflow for generating interview questions",
    variables: ["username", "userid"],
    envVariable: "NEXT_PUBLIC_VAPI_WORKFLOW_ID"
  },
  interviewWorkflow: {
    description: "Workflow for conducting interviews",
    variables: ["questions", "username", "userid"],
    envVariable: "NEXT_PUBLIC_VAPI_INTERVIEW_WORKFLOW_ID"
  }
};

const configPath = path.join(__dirname, '../vapi-workflow-config.json');
fs.writeFileSync(configPath, JSON.stringify(sampleConfig, null, 2));
console.log(`\n📄 Configuration reference saved to: ${configPath}`); 