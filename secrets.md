# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Link your project (run inside your project folder)
vercel link

# 4. Read the generated file
cat .vercel/project.json

# Output:
# {
#   "orgId": "team_xxxxxxxxxx",       ← this is VERCEL_ORG_ID
#   "projectId": "prj_xxxxxxxxxx"     ← this is VERCEL_PROJECT_ID
# }