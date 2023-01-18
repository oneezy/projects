# Projects (BETA! I'M VERY BROKE)
This is a test monorepo that consists of 2 `.git` repos
- `.git` at the root `./`
- `.git` at `./apps/+ui` (git submodule)

```diff
./
+ ├── .git
  ├── apps/
  │   ├── +projects/
  │   └── +ui/
+ │       └── .git
  └── packages/
```
## Installation
In order to clone this repo and it's submodules you have to use the `--recursive` flag [(see SO link)](https://stackoverflow.com/a/46774204/301250)
```
git clone --recursive https://github.com/oneezy/projects.git
```
From the root directory run `pnpm i` to install packages in both root `.git` and submodules `.git`

## Cleanup
When trying to get this working I've made heavy use of `pnpm clean` *(git clean -fXd)* to remove all folder/files listed in `.gitignore` to ensure project is *fresh* for testing.
- If you just run `pnpm clean` it will only clean the current `.git` directory you're in but not the git submodule
- To bypass having to `cd` in/out of everything, run the `pnpm clean:all` from the root `./` directory which is a custom shell script (`chmod +x ./.sh/clean.sh` to make it executable - sorry @country :)

## Goal
The goal is to successfully have a shared `@oneezy/ui` component lib that can be worked on in a single repo [(oneezy/ui)](https://github.com/oneezy/ui) or a monorepo [(oneezy/projects)](https://github.com/oneezy/projects) or simply `pnpm i -D @oneezy/ui` (not published yet) to use wherever. Once this workflow is figured we'll be able to use this for other things such as public docs repo/ ect ect.

**To Do**
- [x] Make `.git` and `.git submodule` co-exist so able to work on ui lib simultaneously from project to project (can use same pattern for docs / other public repos)
- [x] Update Sveltekit to `1.0.0`
- [x] Combine Histoire + Sveltekit 
- [x] Make `apps/+ui` **(@oneezy/ui)** histoire app + component lib `(pnpm dev --filter @oneezy/ui)`
- [x] Make `apps/+ui` **(@oneezy/ui)** import from the `$ui` alias `(apps/+ui/src/lib)` instead of `@oneezy/ui` (because packages can't depend on themselves...doh!)
- [ ] Make all `apps/**` **(@apps/some-app)** with the exception of `apps/+ui`**(@oneezy/ui)** import components from the `@oneezy/ui` workspace
```js
// apps/+ui
import { Button } from '$ui'

// apps/** ... (BUT NOT apps/+ui !)
import { Button } from '@oneezy/ui'
```
> **NOTE:** attempts were made at using `svelte package` to *package* up `apps/+ui/src/lib` and dist it to `packages/ui` to stick w/ our previous paradigm, however I ran into 2 `@oneezy/ui` workspaces being installed (confusion) .. and the whole packages depending on themselves inception thing. Opted for giving components their own app to sit alongside histoire stories.
- [ ] Use Sveltkit specific `$modules` in imports in Histoire ([issue #384](https://github.com/histoire-dev/histoire/issues/384) says closed/fixed but it ain't working on this end)