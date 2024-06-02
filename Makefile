install:
	bun install
	cd frontend && bun install

build:
	bun run build
	cd frontend && bun run build 
	
run:
	bun run dev
