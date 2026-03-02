# Day-1-
🚀 React Learning – Day 1
⚡ Vite

Fast development server and build tool

Uses ES Modules

Does not bundle everything during development

npm run dev starts the dev server

npm run build creates production build

⚛️ Functional Components

Components are JavaScript functions

Must start with a capital letter

Return JSX

Must return only one root element

JSX allows JavaScript expressions using {}

📦 Props

Used to pass data from parent to child

Received as an object

Can be destructured

Missing props become undefined

React does not render undefined, null, or false

🔁 State (useState)

State is data controlled inside a component

Normal variables do not trigger re-render

useState returns value + setter function

Calling setter triggers re-render

🔄 Functional State Updates

Used when update depends on previous state

Prevents stale state issues

Safer when multiple updates happen

🔀 Conditional Rendering

Cannot use if directly inside JSX

Use ternary for if–else

Use && for rendering only when true

Edge case: 0 && can render 0

🎯 useEffect

Runs after render

Used for side effects (API calls, timers, document title)

Dependency Behavior:

No dependency array → runs after every render

Empty array [] → runs once (on mount)

[value] → runs when that value changes

⚠️ Infinite Loop Concept

Updating a state inside effect while depending on same state can cause infinite re-renders

🧹 Cleanup Function

Runs on unmount

Runs before effect re-runs (if dependencies change)

Used to clear timers, remove listeners, stop subscriptions

Prevents memory leaks

🧠 React Mental Model

State change → Re-render

Render → DOM updates

Effects run after render

Cleanup prevents unwanted side effects