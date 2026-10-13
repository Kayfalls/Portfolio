<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The portfolio is a single-page React experience at `/`, with section anchors for its existing content; this preserves the uploaded portfolio's navigation.
- Portfolio appearance is defined by semantic tokens and reusable classes in `src/styles.css`; shared Button variants carry the glossy and glass treatments.
- Contact submissions open a prefilled email, and missing hiring documents are requested by email rather than linked to nonexistent files.
