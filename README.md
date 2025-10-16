# React Signup Form using `useActionState`

This component implements a **signup form** that validates user input, preserves entered data after failed submissions, and manages state through React’s **`useActionState`**.

### Key Points

- **`useActionState`** handles form logic and errors, returning `[formState, formAction]`.
- The form uses `action={formAction}` to automatically call `signupAction(prevState, formData)` on submit.
- Values are extracted with `.get()` and `.getAll()` from the `FormData` object.
- Validation errors are collected and displayed below the form.
- `defaultValue` and `defaultChecked`
