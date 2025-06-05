module.exports = {
    // Extend the standard‐SCSS config so SCSS syntax is fully supported:
    extends: ["stylelint-config-standard-scss"],

    plugins: [
        // Enables `stylelint-scss` rules (e.g. no-duplicate-dollar-variables, etc.)
        "stylelint-scss"
    ],

    rules: {
        // Allow SCSS at-rules: @use, @forward, @mixin, @include, @if, @else, @for, @function, etc.
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,

        // Enforce kebab-case for SCSS variables:
        "scss/dollar-variable-pattern": [
            "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
            {
                message: "SCSS variables must be in kebab-case (e.g. `$primary-color`)."
            }
        ],

        // Disallow redundant nesting selectors (& inside selector)
        "scss/selector-no-redundant-nesting-selector": true,
        "scss/dollar-variable-colon-space-after": null,
        "selector-class-pattern": null,
    }
};
