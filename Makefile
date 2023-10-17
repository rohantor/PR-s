# Makefile for running the Node.js script with Puppeteer

# Variables
NODE := node
SCRIPT := script.js
DEV := dev
QA := qa
STAGE :=stage
# Target for running the script
dev-qa:
	$(NODE) $(SCRIPT) $(DEV) $(QA)
qa-stage:
	$(NODE) $(SCRIPT)  $(QA) $(STAGE)


.PHONY: run set-branches
