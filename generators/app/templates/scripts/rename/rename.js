import { rename } from 'node:fs';

rename('git.template', '.gitignore', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});
