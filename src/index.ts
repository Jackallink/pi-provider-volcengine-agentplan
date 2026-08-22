import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

/**
 * Volcano Ark (火山方舟) — Agent Plan 专项扩展.
 *
 * Endpoint: https://ark.cn-beijing.volces.com/api/plan/v3 (OpenAI-compatible).
 * Agent Plan keys are NOT interchangeable with Coding Plan keys
 * (/api/coding/v3), so this extension targets the Agent Plan endpoint only.
 *
 * Auth resolution (highest first):
 *   1. ~/.pi/agent/auth.json -> providers["volcengine-ark"].key
 *   2. $ARK_API_KEY environment variable
 */
export default function (pi: ExtensionAPI) {
  pi.registerProvider("volcengine-ark", {
    name: "火山引擎方舟 (Agent Plan)",
    baseUrl: "https://ark.cn-beijing.volces.com/api/plan/v3",
    apiKey: "$ARK_API_KEY",
    api: "openai-completions",
    models: [
      {
        id: "glm-latest",
        name: "GLM 5.x (glm-latest)",
        reasoning: true,
        thinkingLevelMap: {
          minimal: null,
          low: "high",
          medium: "high",
          high: "high",
          max: "max",
        },
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 1000000,
        maxTokens: 128000,
        compat: {
          sendSessionAffinityHeaders: true,
          supportsStore: false,
          supportsDeveloperRole: false,
          supportsReasoningEffort: true,
        },
      },
      {
        id: "minimax-m3",
        name: "MiniMax M3",
        reasoning: true,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 524288,
        maxTokens: 131072,
        compat: {
          sendSessionAffinityHeaders: true,
          supportsDeveloperRole: false,
        },
      },
      {
        id: "deepseek-v4-flash",
        name: "DeepSeek V4 Flash",
        reasoning: true,
        thinkingLevelMap: {
          minimal: null,
          low: null,
          medium: null,
          high: "high",
          max: "max",
        },
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 1000000,
        maxTokens: 384000,
        compat: {
          sendSessionAffinityHeaders: true,
          supportsStore: false,
          supportsDeveloperRole: false,
          requiresReasoningContentOnAssistantMessages: true,
          thinkingFormat: "deepseek",
        },
      },
      {
        id: "deepseek-v4-pro",
        name: "DeepSeek V4 Pro",
        reasoning: true,
        thinkingLevelMap: {
          minimal: null,
          low: null,
          medium: null,
          high: "high",
          max: "max",
        },
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 1000000,
        maxTokens: 384000,
        compat: {
          sendSessionAffinityHeaders: true,
          supportsStore: false,
          supportsDeveloperRole: false,
          requiresReasoningContentOnAssistantMessages: true,
          thinkingFormat: "deepseek",
        },
      },
      {
        id: "kimi-k2.6",
        name: "Kimi K2.6 (→ K2.7 Code)",
        reasoning: true,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 262144,
        maxTokens: 32768,
        compat: {
          sendSessionAffinityHeaders: true,
          supportsStore: false,
          supportsDeveloperRole: false,
          supportsReasoningEffort: false,
          maxTokensField: "max_tokens",
          supportsStrictMode: false,
          thinkingFormat: "deepseek",
        },
      },
      {
        id: "kimi-k2.7-code",
        name: "Kimi K2.7 Code",
        reasoning: true,
        thinkingLevelMap: {
          off: null,
        },
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 262144,
        maxTokens: 32768,
        compat: {
          sendSessionAffinityHeaders: true,
          supportsStore: false,
          supportsDeveloperRole: false,
          supportsReasoningEffort: false,
          maxTokensField: "max_tokens",
          supportsStrictMode: false,
          thinkingFormat: "deepseek",
        },
      },
      {
        id: "doubao-seed-2.1-turbo",
        name: "Doubao Seed 2.1 Turbo",
        reasoning: true,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 256000,
        maxTokens: 65536,
        compat: {
          sendSessionAffinityHeaders: true,
          supportsStore: false,
          supportsDeveloperRole: false,
          supportsReasoningEffort: false,
          supportsStrictMode: false,
        },
      },
    ],
  });
}
