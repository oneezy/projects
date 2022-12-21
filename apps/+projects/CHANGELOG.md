# @packages/site

## 0.0.2

### Patch Changes

- d391533: :construction: fixed issue with alpine requiring libc compatibility
- df35f45: :construction: cleanup and prepare for deploy
- 15e67de: - brought over updates from oneezy/monorepo
  - added and tested 3 component storybook alternatives (Vitebook/Bookit/Histoire)
  - Histoire is clear winner so added it here
  - updated @oneezy/ui structure (WIP)
  - added ability to "plop app" or "plop component" or "plop story" (WIP)
  - updated Sveltekit to work with new router
- 9391d9d: :construction: reorganized packages and unified package.json with full details
- :construction: ready for deployment
- d391533: :construction: updated versions of libraries based on sveltekit default app
- 29dab29: :construction: updated start script to run vite on port 5000
- 5af838c: :construction: updated gitlab ci rules
- d10d1a2: :construction: updated plop to include docker-compose and dockerfile
- 3e4302d: :construction: removed unneeded devDependencies, updated context and workspaces
- dbe2d5c: :construction: updated docker and gitlab config for site
- Updated dependencies [15e67de]
- Updated dependencies [9391d9d]
- Updated dependencies [fa432ab]
- Updated dependencies [e27d324]
- Updated dependencies [3e4302d]
  - @oneezy/ui@0.0.2
  - @packages/config@0.0.2
  - @packages/metadata@0.0.2
