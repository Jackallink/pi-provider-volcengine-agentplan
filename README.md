# pi-provider-volcengine-agentplan

Pi extension that registers Volcengine Ark (火山方舟) **Agent Plan** models as a custom provider for [@earendil-works/pi-coding-agent](https://pi.dev).

## Endpoint

```
https://ark.cn-beijing.volces.com/api/plan/v3
```

This provider targets the **Agent Plan** endpoint only. Agent Plan API keys are **not** interchangeable with Coding Plan keys (`/api/coding/v3`). If your key does not work here, verify it was created for Agent Plan.

## Install

```bash
pi install npm:pi-provider-volcengine-agentplan
```

## Auth

Set your API key in one of these places (highest priority first):

1. `~/.pi/agent/auth.json` → `providers["volcengine-ark"].key`
2. `$ARK_API_KEY` environment variable

## Models

| id | context window | max output tokens | image input |
|---|---|---|---|
| `glm-latest` | 1M | 128K | no |
| `minimax-m3` | 512K | 131K | yes |
| `deepseek-v4-flash` | 1M | 384K | no |
| `deepseek-v4-pro` | 1M | 384K | no |
| `kimi-k2.6` | 256K | 32K | yes |
| `kimi-k2.7-code` | 256K | 32K | yes |
| `doubao-seed-2.1-turbo` | 256K | 65.5K | yes |

Note: on the Agent Plan endpoint, `kimi-k2.6` routes to `kimi-k2.7-code`, so its `max_tokens` limit is 32768.

## Use

In the pi TUI, open `/model` and pick `volcengine-ark/<id>`, or pass it on the CLI:

```bash
pi --model "volcengine-ark/glm-latest"
```

## License

MIT
