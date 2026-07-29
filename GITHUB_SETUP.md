# Put the portfolio on GitHub

## 1. Preview v5 first

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:5173/`.

## 2. Create a GitHub repository

Create a new empty repository. A simple name is:

```text
engineering-notebook-portfolio
```

Do not add a generated README or `.gitignore` during repository creation because this project already includes them.

## 3. Push the project

Run these commands from the extracted project folder:

```powershell
git init
git add .
git commit -m "Create engineering notebook portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/engineering-notebook-portfolio.git
git push -u origin main
```

Replace the example repository URL with your own.

## 4. Turn on GitHub Pages

In the GitHub repository:

1. Open **Settings**
2. Open **Pages**
3. Under **Build and deployment**, choose **GitHub Actions**
4. Open the **Actions** tab and wait for the deployment workflow to finish

The project includes `.github/workflows/deploy.yml`, so later pushes to `main` rebuild and publish the site automatically.

## 5. Edit details directly on GitHub

Most writing is in:

```text
src/content/siteContent.js
```

To edit it in GitHub:

1. Open the file
2. Click the pencil icon
3. Make the changes
4. Choose **Commit changes**

That commit automatically triggers the Pages workflow.

For larger layout changes, edit the project in VS Code and push the new commit instead.
