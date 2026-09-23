# Hybrid Gaussians project page

Static research project website for **Hybrid Gaussians for Robust Open-Vocabulary 3D Segmentation with Multi-View Object Association and Boundary Refinement**.

Target: https://nora202.github.io/hybridgaussians/

## Preview

Run `python3 -m http.server 8000` from this directory and open http://localhost:8000.
No build or package installation is needed. All site assets use relative URLs for GitHub Pages project-path compatibility.

## Content

- `index.html`: manuscript summary, methods, complete reported benchmark rows, qualitative figures.
- `styles.css`: responsive layout.
- `script.js`: four-scene/eight-query video selection and benchmark switching.
- `assets/papers/`: supplied manuscript, appendix, and updated pipeline PDF, unchanged.
- `assets/videos/`: eight supplied H.264 videos, unchanged.
- `assets/images/`: figures from the supplied paper, the updated pipeline PDF rendered for the web, and video-frame posters.

The supplied manuscript is anonymous. Author names, affiliations, acceptance status, code links, and a formal BibTeX citation have intentionally not been invented. Add these when verified publication metadata is available.

Benchmark numbers come from main-paper Table 1. Boundary ablations come from main-paper Table 3 and appendix Table 2. The +13.43% LERF result is a relative gain over Seg-Splat (52.1 → 59.1 mIoU), equivalent to +7.0 percentage points.

The visual structure is inspired by https://gujiaqivadin.github.io/hybridgs/; this implementation and its research content are independent. Research materials retain their existing rights.

## GitHub Pages

Publish the root of the `main` branch from a public repository named `hybridgaussians` under `Nora202`. `.nojekyll` enables direct static-file publishing. Do not use Git LFS for these videos: GitHub Pages needs directly served media files.
