brain-games:
	bin/brain-games.js

brain-even:
	bin/brain-even.js

brain-calc:
	bin/brain-calc.js

install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

