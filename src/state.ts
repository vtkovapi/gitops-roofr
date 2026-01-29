import { existsSync } from "fs";
import { writeFile } from "fs/promises";
import { STATE_FILE_PATH, VAPI_ENV } from "./config.ts";
import type { StateFile } from "./types.ts";

// ─────────────────────────────────────────────────────────────────────────────
// State Management
// ─────────────────────────────────────────────────────────────────────────────

function createEmptyState(): StateFile {
  return {
    assistants: {},
    structuredOutputs: {},
    tools: {},
    squads: {},
    personalities: {},
    scenarios: {},
    simulations: {},
    simulationSuites: {},
  };
}

export function loadState(): StateFile {
  if (!existsSync(STATE_FILE_PATH)) {
    console.log(`📄 Creating new state file for environment: ${VAPI_ENV}`);
    return createEmptyState();
  }

  try {
    const content = require(STATE_FILE_PATH);
    console.log(`📄 Loaded state file for environment: ${VAPI_ENV}`);
    // Merge with empty state to ensure all keys exist (for backwards compatibility)
    return { ...createEmptyState(), ...content } as StateFile;
  } catch {
    console.log(`📄 Creating new state file for environment: ${VAPI_ENV}`);
    return createEmptyState();
  }
}

export async function saveState(state: StateFile): Promise<void> {
  await writeFile(STATE_FILE_PATH, JSON.stringify(state, null, 2) + "\n");
  console.log(`💾 Saved state file: ${STATE_FILE_PATH}`);
}

