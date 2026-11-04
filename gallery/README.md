# Screenshot capture checklist

The gallery is intentionally empty until approved, anonymized screenshots are captured from the real Acorda UI. Do not use synthetic mockups in place of product screenshots, and do not copy screenshots from prior test folders without confirming their data is synthetic.

## Capture setup

1. Use a dedicated emulator or demo installation with a fresh synthetic profile. Do not use the user's primary phone or database.
2. Use fictional dates and labels such as “Prepare breakfast” and “Read for 10 minutes.” Do not use names, addresses, health information, actual recordings, transcripts, personal photos, notification content, or account details.
3. Hide debug entitlement controls, developer menus, emulator identifiers, status-bar notifications, and any account/configuration screens.
4. Capture the actual approved app UI. Record the app build/version and emulator resolution for reproducibility.
5. Inspect each image at full resolution before adding it. Crop only device chrome; do not alter app states or imply a feature is released when it is still in development.

## Required gallery assets

Save approved captures in this directory using these filenames:

- `01-agenda.png` — selected-day Agenda with only fictional tasks and dates.
- `02-voice-capture.png` — the real voice-capture ready/active interaction, without a real saved recording or transcript.
- `03-local-evidence.png` — synthetic saved photo/audio evidence in its browse/play view; show no personal media.
- `04-photo-first.png` — Photo-First entry using a synthetic test image, with no person or identifying location.
- `05-calma.png` — the real Calma screen during a breathing pattern; do not imply medical benefits.
- `06-calma-access.png` — Free pattern selection and any actual locked indicators, if present in the approved build; label the entitlement experience as in development.
- `07-privacy-erasure.png` — the explicit erase-all confirmation dialog before confirmation, with no personal data visible.

## Before adding images

- Confirm each screenshot is from the real app and matches current behavior.
- Confirm every visible record, image, phrase, and date is synthetic.
- Remove screenshots that expose real user data, debug settings, credentials, deployment identifiers, or unreleased internal screens.
- Update the README gallery section only after the Product Owner approves each image.
