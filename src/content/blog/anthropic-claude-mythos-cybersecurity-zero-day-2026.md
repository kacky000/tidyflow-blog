---
noindex: true
title: "Anthropic Unveils Claude Mythos: A Frontier AI Model That Finds Zero-Day Vulnerabilities — And Won't Be Released to the Public"
description: "Anthropic announced Claude Mythos, a frontier AI model capable of automatically identifying zero-day software vulnerabilities. The model, priced five times higher than Opus, is available only to critical infrastructure operators through an invite-only Project Glasswing program."
pubDate: "2026-04-26"
heroImage: "/thumbs/thumb-anthropic-claude-mythos-cybersecurity-2026.jpg"
tags: ["Anthropic", "Claude", "AI", "cybersecurity", "enterprise", "artificial intelligence", "security"]
---

Anthropic has quietly announced a new tier of artificial intelligence capability that it has chosen not to make publicly available. Claude Mythos, described by the company as a "frontier" model positioned above its existing Opus line, has demonstrated the ability to automatically identify zero-day software vulnerabilities in critical infrastructure — a capability Anthropic says is too sensitive for general commercial release.

The announcement was made in early April 2026 as part of a limited preview program called Project Glasswing, which restricts access to a curated set of organizations including Amazon, Apple, Broadcom, Cisco, CrowdStrike, the Linux Foundation, Microsoft, and Palo Alto Networks, alongside approximately 40 other critical infrastructure operators.

## What Claude Mythos Can Do

According to Anthropic's disclosures, Mythos has achieved the following on standard software engineering benchmarks:

| Benchmark | Score |
|-----------|-------|
| SWE-bench Verified | 93.9% |
| SWE-bench Pro | 77.8% |

Beyond benchmark performance, Anthropic reports that Mythos can autonomously identify zero-day vulnerabilities in widely deployed operating systems. The company cited examples including previously unknown remote code execution vulnerabilities in OpenBSD (a flaw reportedly dormant for 27 years) and FreeBSD (a separate issue undetected for 17 years). The claims have not yet been independently verified by external security researchers at the time of publication.

## Why Anthropic Is Not Releasing It Publicly

The decision to restrict Mythos reflects a calculated position on AI safety for cyberweapons-class capabilities. Anthropic's stated rationale is a "defense-first" approach: the company believes that putting this capability exclusively in the hands of defenders — network operators, infrastructure security teams, and software vendors — before it becomes available to attackers creates a window for patching vulnerabilities at scale.

The same capability that finds vulnerabilities for patching could, in theory, be used to find vulnerabilities for exploitation. That dual-use tension is why Anthropic elected to bypass the standard public API release model it uses for Claude Opus, Sonnet, and Haiku.

Project Glasswing organizations are bound by usage policies that restrict the model to defensive security research, vulnerability disclosure, and patch development.

## Pricing: Five Times the Cost of Opus

Claude Mythos is priced at **$25 per million input tokens** and **$125 per million output tokens** — approximately five times the cost of the publicly available Claude Opus tier. The pricing reflects both the model's capability level and Anthropic's intent to limit use to serious enterprise security deployments rather than casual API access.

For context, a typical security audit of a medium-sized codebase might involve tens of millions of tokens of context. At these prices, organizations would face costs that are meaningful but not prohibitive for critical security operations — consistent with Anthropic's goal of restricting use to operators with legitimate infrastructure security needs.

## The Strategic Picture: AI as a Cybersecurity Moat

Anthropic's move enters a crowded field where several major vendors — including Google with its Gemini Security line, Microsoft with Security Copilot, and CrowdStrike with its Charlotte AI — are positioning foundation model AI as a core component of enterprise security workflows.

The distinction in the Mythos announcement is the emphasis on autonomous offensive-style capability wielded defensively. Most AI security tools currently focus on classification, alert triage, threat intelligence summarization, and log analysis. The claim that Mythos can autonomously discover previously unknown vulnerabilities in production-grade operating systems, if validated, would represent a qualitative step beyond these applications.

## Market Implications

Anthropic is a private company backed by Amazon and Google, with a reported valuation above $60 billion. It does not trade publicly, but news of Mythos has implications for several public companies:

- **CrowdStrike (CRWD)** and **Palo Alto Networks (PANW)** are among the founding Project Glasswing members. For both companies, early access to frontier-level AI vulnerability detection could become a differentiated offering in their enterprise security platforms.
- **Microsoft (MSFT)** is also a founding member, and the access to Mythos will likely feed into the Microsoft Security Copilot product line — a detail investors will want to probe during the April 29 earnings call.
- **Amazon (AMZN)** is a founding member and the primary cloud provider for Anthropic's training infrastructure. The relationship extends well beyond financial investment into product co-development.

---

*This article is based on Anthropic's published disclosures regarding the Claude Mythos preview and Project Glasswing program. Benchmark figures and pricing have not been independently verified. This article is for informational purposes only and does not constitute investment advice.*
