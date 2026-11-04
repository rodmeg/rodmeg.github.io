# Acorda — Case Study

## 1. The problem and product goal

Planning apps are usually strongest at listing intended tasks. Acorda is designed to connect that planning experience with a simple record of daily activity: the user can capture a photo or audio note, revisit it, and see the day in context.

The product goal is to make daily reflection and evidence capture quick, understandable, and personal. Acorda is not presented as a medical, safety-monitoring, or clinical product.

## 2. Product Owner responsibilities

The Product Owner owns product direction and acceptance:

- Defines the concept, requirements, target experience, and capability priorities.
- Sets UX/UI direction and specifies interaction behavior.
- Writes acceptance criteria and resolves usability tradeoffs.
- Coordinates development with AI-assisted software tools.
- Reviews generated or adapted implementation, test results, and user-facing behavior.
- Decides whether a feature meets the intended product outcome.

AI-assisted development is part of the delivery workflow. Tools help inspect the codebase, propose and implement scoped changes, and adapt tests. The Product Owner supplies context, makes product decisions, reviews outcomes, and owns acceptance. Source authorship is not represented as exclusively manual.

## 3. Product design and interaction decisions

### Capture in the context of the day

The Agenda provides the organizing context for tasks and evidence. Capture is initiated by a user action. The interaction should make it clear when a recording starts, when it has been saved, and how to recover from interruption or failure.

### Photo-First evidence

A photo can be retained as evidence without forcing the user to first create or confirm a task. This keeps the capture path lightweight and preserves the user's ability to interpret the image later.

### Evidence is not confirmation

Audio and photos are records. They do not automatically prove that a task was completed. Any generated action proposals require an explicit review/confirmation path in the product's advanced processing flow.

### Calm sessions remain calm

Calma is designed as an uninterrupted breathing experience. The approved product split makes Cyclic Sigh available in Free and reserves five other patterns for Pro. Access is checked when a session begins; an active session should finish without a paywall or entitlement interruption.

### Privacy and predictable access

The product direction keeps personal evidence on-device. Free users can capture, save, browse, and play local photo/audio evidence. Free does not start transcription or action extraction. Expired Pro access keeps saved evidence readable and playable. Individual evidence deletion is a separate Pro capability, while a clearly confirmed erase-all privacy action remains available to everyone.

These Free/Pro rules are approved product requirements, and their enforcement is still being integrated. Billing and purchase verification are not implemented.

## 4. Technical overview

- **Platform:** Android.
- **Language:** Kotlin.
- **UI:** Jetpack Compose.
- **Persistence:** Room for structured app state; app-private storage for media.
- **Speech:** Android's on-device `SpeechRecognizer` is the approved initial commercial engine.
- **Architecture:** Compose UI → ViewModels → domain use cases and capability rules → repository interfaces → Room and app-private media.

Local-first describes where user-created evidence is stored and processed. This public overview intentionally does not publish database schemas, deployment configuration, endpoint names, credentials, or detailed trust boundaries.

## 5. Milestones and status

### Implemented in the beta baseline

- Day-based Agenda interactions.
- Local photo and audio evidence capture and review.
- Photo-First evidence entry.
- Calma breathing experience.
- Android on-device speech recognition path.
- Recovery paths for voice capture and persistence failures.

### In progress

- Enforcing the approved Free/Pro capability matrix at UI and domain boundaries.
- Ensuring Free capture does not start transcription or Pro background work.
- Preserving saved evidence through entitlement expiry.
- Validating individual deletion gates and the all-state privacy-erasure action.
- Improving tests around direct entry points, background work, and restart behavior.

### Planned

- Google Play Billing integration.
- Purchase verification and subscription restoration.
- Commercial release and store listing.

Those planned items are not complete or available to users.

## 6. Testing and product validation

Product validation has used JVM tests for domain rules and Android emulator instrumentation for UI and persistence behavior. On November 3, 2026, the local debug JVM suite and 31 focused emulator tests passed, and the debug APK built successfully. Release compilation was not verified in that environment. These results describe a local development checkpoint, not a published release or a guarantee of production readiness.

The screenshots for a public portfolio should be captured separately with synthetic data and reviewed before publication. No real user evidence is part of this case study.
