# Rafael Pardinas personal website starter

A simple static personal website for GitHub Pages.

## Quick setup

1. Create a GitHub repository named exactly:

   ```text
   <your-github-username>.github.io
   ```

   For example, if your GitHub username is `rafapi`, use:

   ```text
   rafapi.github.io
   ```

2. Copy these files into the repository root.

3. Replace placeholder links in `index.html`:

   - GitHub profile
   - Google Scholar
   - LinkedIn
   - Contact email or contact page
   - CUBE-harness link
   - TapeAgents link
   - Writing links
   - PipelineRL paper link

4. Commit and push to `main`.

5. In GitHub, go to Settings -> Pages. Use "Deploy from a branch", branch `main`, folder `/root`.

6. Your website should appear at:

   ```text
   https://<your-github-username>.github.io/
   ```

## Local preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```
