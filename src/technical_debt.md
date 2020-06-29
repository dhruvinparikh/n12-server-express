# List of technical debt

- Consolidate various config files into one. `.env` is ideal.
- Move from `graphql` to `gql`.
- Remove unnecessary scaffolding:
  - User related stuff
  - Build related stuff
  - `models\index.js`  related stuff
  - user seeds.
- `seed:undo` isn't working.