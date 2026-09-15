#!/usr/bin/env bash
# Pulls imagery from the existing EPCMT deployment into this repo.
#
# The three project images on the old site appear to be genuine EPCMT project
# photos, so they are mapped directly onto the new filenames. The old "gallery"
# images are template stock (remodeling/construction/repairs/design) — they are
# downloaded into public/images/_legacy/ for triage rather than used directly.
#
# Usage:  bash scripts/fetch-legacy-images.sh
set -euo pipefail

SRC="https://epcmt-demo.vercel.app/assets/img"
cd "$(dirname "$0")/.."

mkdir -p public/images/projects public/images/_legacy

echo "→ project covers"
curl -fsSL "$SRC/projects1.png" -o public/images/projects/abseron-eps-cover.jpg
curl -fsSL "$SRC/projects2.png" -o public/images/projects/tsnori-cover.jpg
curl -fsSL "$SRC/projects3.png" -o public/images/projects/likani-cover.jpg

echo "→ legacy gallery (for triage, not wired up)"
for cat in remodeling construction repairs design; do
  for n in 1 2 3; do
    curl -fsSL "$SRC/projects/$cat-$n.jpg" \
      -o "public/images/_legacy/$cat-$n.jpg" || true
  done
done

echo
echo "Done. Remaining images still need real EPCMT photography —"
echo "see IMAGES.md for the full manifest."
